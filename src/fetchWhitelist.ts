import assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';

import {
  Program,
  utils,
} from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

import { WhitelistIdl } from './idl';
import {
  getConnection,
  getProvider,
} from './utils';

export function deriveWhitelistPda(auctionAddress: PublicKey, buyer: PublicKey, programId: PublicKey) {
	const [auctionVaultAddress] = PublicKey.findProgramAddressSync(
		[Buffer.from(utils.bytes.utf8.encode("wl_buyer")), buyer.toBuffer(), auctionAddress.toBuffer()],
		programId,
	);

	return auctionVaultAddress;
}

export async function fetchWhitelistBuyer() {
	const connection = getConnection();
	const provider = getProvider(connection);
	const auctionAddress = new PublicKey("HXK6GzgArqSthZdWSnvsAYeWm2Rkv1htQCzxwhXCagvi");
	const auctionCreator = new PublicKey("9JbEUj3q3HNEmfEe3wWNWE4xbqzNd1UVkbvatXAbJJEA");
	const programId = new PublicKey("9MiaHcAwgcdvw1ETSk5UPwtLuWot8WQBfFLHgcsXiP27");

	const program = new Program(WhitelistIdl, programId, provider);

	const buyerSize = program.account.buyer.size;
	console.log("size:", buyerSize);

	// const response = await connection.getProgramAccounts(programId, {
	// 	filters: [{ dataSize: buyerSize }],
	// 	commitment: "confirmed",
	// });

	// const totalPdas = response.length;
	// console.log("totalPdas count: %d", totalPdas);
	// const whiteListPdas = response.map((r) => ({ whitelistPda: r.pubkey, data: r.account.data }));

	// const whitelisted: {
	// 	whitelistPda: string;
	// 	whitelistUser: string;
	// }[] = [];

	// const chunks = chunkArray(whiteListPdas, 100);

	// for (let i = 0; i < chunks.length; i++) {
	// 	console.log("chunk index: %d out of %d", i + 1, chunks.length);
	// 	const chunk = chunks[i];
	// 	const promises = chunk.map(async ({ whitelistPda, data }) => {
	// 		// const buyerInfo = program.coder.accounts.decode("Buyer", item.data);
	// 		const signatureInfos = await connection.getConfirmedSignaturesForAddress2(whitelistPda);
	// 		const signatures = signatureInfos.map((info) => info.signature);
	// 		const parsedtxns = await connection.getParsedTransactions(signatures, { commitment: "confirmed" });
	// 		const [signer] = parsedtxns.map((parsed) => {
	// 			assert(parsed, "Parsed transaction is null");
	// 			const account = parsed.transaction.message.accountKeys.filter((key) => key.signer);
	// 			assert(account.length, "There is no signer in transaction");
	// 			const signer = account[0].pubkey;
	// 			return signer;
	// 		}).filter((s) => !s.equals(auctionCreator));

	// 		return {
	// 			whitelistUser: signer?.toString(),
	// 			whitelistPda: whitelistPda.toString(),
	// 		};
	// 	});

	// 	const data = await Promise.all(promises);

	// 	whitelisted.push(...data);
	// }

	// fs.writeFileSync(path.resolve(__dirname, "whitelist-whitelisted.json"), JSON.stringify(whitelisted), "utf-8");

	const file = fs.readFileSync(path.resolve(__dirname, "whitelisted.json"), "utf-8");
	const list = JSON.parse(file);
	assert(Array.isArray(list));

	const unparticipated = list.filter((i: any) => !Object.keys(i).includes("whitelistUser"))
	console.log("unparticipated count: %d", unparticipated.length);

	fs.writeFileSync(path.resolve(__dirname, "whitelist-unparticipated.json"), JSON.stringify(unparticipated), "utf-8");

	const participated = list.filter((item: any) => Object.keys(item).includes("whitelistUser"));
	console.log("participated count: %d", participated.length);
	fs.writeFileSync(path.resolve(__dirname, "whitelist-participants.json"), JSON.stringify(participated), "utf-8");
}
