import * as fs from 'fs';
import * as path from 'path';

import { Program } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

import { WhitelistIdl } from './idl';
import {
  getConnection,
  getProvider,
} from './utils';

export async function fetchWhitelistBuyer() {
	const connection = getConnection();
	const provider = getProvider(connection);

	const programId = new PublicKey("");

	const program = new Program(WhitelistIdl, programId, provider);

	const buyerSize = program.account.buyer.size;
	console.log("size:", buyerSize);

	const response = await connection.getProgramAccounts(programId, {
		filters: [{ dataSize: buyerSize }],
		commitment: "confirmed",
	});

	const totalParticipants = response.length;
	console.log("participants count: %d", totalParticipants);

	const buyerInfos = response.map((item, index) => {
		console.log("index: %d out of %d", index + 1, totalParticipants);
		const buyerPda = item.pubkey;
		const buyerInfo = program.coder.accounts.decode("Buyer", item.account.data);

		return {
			...buyerInfo,
		};
	});

	fs.writeFileSync(path.resolve(__dirname, "staking-participants.json"), JSON.stringify(buyerInfos), "utf-8");
}
