import * as fs from 'fs';
import * as path from 'path';

import { Program } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

import { LotteryIdl } from './idl';
import {
  getConnection,
  getProvider,
} from './utils';

type BuyerInfo = {
	buyer: string;
	buyerPda: string;
	participatedWith: "sol" | "token" | "none";
	claimed: boolean;
	isWinner: boolean;
	isBlacklisted: boolean;
}

export async function fetchLotterBuyer() {
	const connection = getConnection();
	const provider = getProvider(connection);
	const auctionAddress = new PublicKey("GNvjk7jgS3YqV1CtK9AKTyRGkwx9VRQWkwoKr2fARoEy");

	const programId = new PublicKey("6XcNvRBptZ7dQv8aUDcidiz8h53X4tEZvBP3MvqtSays");

	const program = new Program(LotteryIdl, programId, provider);

	// const buyerSize = program.account.buyer.size;
	const buyerSize = 56;
	console.log("size:", buyerSize);

	const response = await connection.getProgramAccounts(programId, {
		filters: [{ dataSize: buyerSize }],
		commitment: "confirmed",
	});

  const totalParticipants = response.length;
	console.log("participants count: %d", totalParticipants);

  const buyerInfos = response.map((item, index) => {
		// console.log("index: %d out of %d", index + 1, totalParticipants);
		const buyerPda = item.pubkey;
		const decoded = program.coder.accounts.decode("Buyer", item.account.data);
		// console.log({decoded});
		const buyerInfo: BuyerInfo = {
			buyer: decoded.buyerAddress.toString(),
			buyerPda: buyerPda.toString(),
			claimed: decoded.claimed,
			participatedWith: decoded.claimSol ? "sol" : decoded.claimToken ? "token" : "none",
			isBlacklisted: decoded.blacklisted,
			isWinner: decoded.winner
		}

		return buyerInfo;
	});

  fs.writeFileSync(path.resolve(__dirname, "output", "lottery-participants.json"), JSON.stringify(buyerInfos), "utf-8");
}
