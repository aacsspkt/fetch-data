import assert from 'assert';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

import { PublicKey } from '@solana/web3.js';

import {
  deriveStakerPdaAddress,
  getConnection,
  getProgram,
  getProvider,
} from './utils';

dotenv.config();

(async () => {
	const auctionAddress = new PublicKey("A6D9HwMM8qmYXvsMKdMMM7u6ExofmC7uZ3XcynrsEbGK")

	const programId = new PublicKey("4oVNqxdvN2t7e5xqZRD6MfxWiUVEepDo8Na6AVhvwuEr");

	const connection = getConnection();
	const provider = getProvider(connection);
	const program = getProgram(provider, programId);

	// const response = await connection.getProgramAccounts(programId, {
	// 	filters: [{ dataSize: program.account.staker.size }],
	// 	commitment: "confirmed",
	// });

	// const totalParticipants = response.length;
	// console.log("participants count: %d", totalParticipants);

	// const promises = response.map(async (item) => {
	// 	console.log("index: %d", index);
	// 	const stakerPda = item.pubkey;
	// 	const stakerInfo = program.coder.accounts.decode("staker", item.account.data);

	// 	const [{ signature }] = await connection.getConfirmedSignaturesForAddress2(stakerPda, { limit: 1 }, "confirmed");
	// 	const parsed = await connection.getParsedTransaction(signature, { commitment: "confirmed" });
	// 	assert(parsed, "Parsed transaction is null");
	// 	const account = parsed.transaction.message.accountKeys.filter((key) => key.signer);
	// 	assert(account.length, "There is no signer in transaction");
	// 	const signer = account[0].pubkey;
	// 	console.log("signer %s\n", signer.toString());

	// 	return {
	// 		staker: signer.toString(),
	// 		stakeAmount: stakerInfo.stakeAmount.toString(),
	// 		stakerPda: stakerPda.toString(),
	// 	};
	// })

	// const data =  await Promise.all(promises);

	// const stakerInfos: { staker: string; stakerPda: string; stakeAmount: string }[] = [];

	// let index = 0;
	// while (index < response.length) {
	// 	console.log("index: %d out of %d", index, totalParticipants);
	// 	const item = response[index];

	// 	const stakerPda = item.pubkey;
	// 	console.log("stakerPda: %s", stakerPda.toString());
	// 	const stakerInfo = program.coder.accounts.decode("staker", item.account.data);
	// 	console.log("stakeAmount: %s", stakerInfo.stakeAmount.toString());

	// 	const [{ signature }] = await connection.getConfirmedSignaturesForAddress2(stakerPda, { limit: 1 });
	// 	const parsed = await connection.getParsedTransaction(signature, { commitment: "confirmed" });
	// 	assert(parsed, "Parsed transaction is null");
	// 	const account = parsed.transaction.message.accountKeys.filter((key) => key.signer);
	// 	assert(account.length, "There is no signer in transaction");
	// 	const signer = account[0].pubkey;
	// 	console.log("staker %s\n", signer.toString());

	// 	stakerInfos.push({
	// 		staker: signer.toString(),
	// 		stakeAmount: stakerInfo.stakeAmount.toString(),
	// 		stakerPda: stakerPda.toString(),
	// 	});
	// 	index++;
	// }

	// fs.writeFileSync(path.resolve(__dirname, "staking-participants.json"), JSON.stringify(stakerInfos), "utf-8");

	const file = fs.readFileSync(path.resolve(__dirname, "staking-participants.json"), "utf-8");

	const list = JSON.parse(file);
	assert(Array.isArray(list), "list is not an array");

	const isValid = list.every((item, i, arr) => {
		const staker = new PublicKey(item.staker);
		const derivedPda = deriveStakerPdaAddress(auctionAddress, staker, program.programId);
		const valid = derivedPda.equals(new PublicKey(item.stakerPda))
		if(!valid) {
			console.log("programId", program.programId.toString());
			console.log("staker:", item.staker)
			console.log("derived pda:", derivedPda.toString());
			console.log("stakerPda:", item.stakerPda);
		}
		return valid;
	})

	if (!isValid) {
		throw new Error("Pda is not valid.")
	}
})();
