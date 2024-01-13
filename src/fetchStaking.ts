import assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';

import {
  Program,
  utils,
} from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

import { StakingIdl } from './idl';
import {
  chunkArray,
  getConnection,
  getProvider,
} from './utils';

export function deriveStakerPdaAddress(
	auctionAddress: PublicKey,
	staker: PublicKey,
	programId: PublicKey,
): PublicKey {
	const [auctionVaultAddress] = PublicKey.findProgramAddressSync(
		[
			Buffer.from(utils.bytes.utf8.encode("staker_smash")),
			staker.toBuffer(),
			auctionAddress.toBuffer(),
		],
		programId,
	);

	return auctionVaultAddress;
}

export { StakingIdl } from './idl';
export async function fetchStaker() {
	const auctionAddress = new PublicKey("A6D9HwMM8qmYXvsMKdMMM7u6ExofmC7uZ3XcynrsEbGK");

	const programId = new PublicKey("4oVNqxdvN2t7e5xqZRD6MfxWiUVEepDo8Na6AVhvwuEr");

	const connection = getConnection();
	const provider = getProvider(connection);
	const program = new Program(StakingIdl, programId, provider);

	// const stakerSize = program.account.staker.size;
	const stakerSize = 32;
    console.log("size:", stakerSize);

	const response = await connection.getProgramAccounts(programId, {
		filters: [{ dataSize: stakerSize }],
		commitment: "confirmed",
	});

	const count = response.length;
	console.log("participants count: %d", count);

	const stakerPdas = response.map(r => ({stakerPda: r.pubkey, data: r.account.data}));

	const participants: {
		stakerPda: string;
		staker: string;
	}[] = []

	const chunks = chunkArray(stakerPdas, 100);

	for (let i = 0; i < chunks.length; i++) {
		console.log("chunk index: %d out of %d", i + 1, chunks.length)
		const chunk = chunks[i];
		const promises = chunk.map(async ({stakerPda, data}) => {
			// console.log("stakerPda:", stakerPda.toString());
			// const stakerInfo = program.coder.accounts.decode("Staker", data);
	
			const [{ signature }] = await connection.getConfirmedSignaturesForAddress2(stakerPda, { limit: 1 }, "confirmed");
			const parsed = await connection.getParsedTransaction(signature, { commitment: "confirmed" });
			assert(parsed, "Parsed transaction is null");
			const account = parsed.transaction.message.accountKeys.filter((key) => key.signer);
			assert(account.length, "There is no signer in transaction");
			const signer = account[0].pubkey;
			// console.log("signer %s\n", signer.toString());
	
			return { staker: signer.toString(), stakerPda: stakerPda.toString() }
		});

		const data = await Promise.all(promises);

		participants.push(...data);
	}

	const isValid = participants.every((item, i, arr) => {
		const staker = new PublicKey(item.staker);
		const derivedPda = deriveStakerPdaAddress(auctionAddress, staker, program.programId);
		
		const valid = derivedPda.equals(new PublicKey(item.stakerPda));
		if (!valid) {
			console.log("programId", program.programId.toString());
			console.log("staker:", item.staker);
			console.log("derived pda:", derivedPda.toString());
			console.log("stakerPda:", item.stakerPda);
		}
		return valid;
	});

	fs.writeFileSync(path.resolve(__dirname, "remaining-staking-participants.json"), JSON.stringify(participants), "utf-8");
}
