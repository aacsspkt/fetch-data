import assert from 'assert';

import {
  AnchorProvider,
  Program,
  Provider,
  utils,
  Wallet,
} from '@project-serum/anchor';
import {
  Connection,
  Keypair,
  PublicKey,
} from '@solana/web3.js';

import { IDL } from './staking_idl';

export function getConnection() {
	const RPC_URL = process.env.RPC_URL;
	assert(RPC_URL && RPC_URL != "", "missing env var RPC_URL");

	return new Connection(RPC_URL);
}

export function chunkArray<T>(arr: Array<T>, chunkSize: number): T[][] {
	const result: T[][] = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		result.push(arr.slice(i, i + chunkSize));
	}
	return result;
}

export function getProvider(connection: Connection) {
	const SECRET_KEY = process.env.SECRET_KEY;
	assert(SECRET_KEY && SECRET_KEY !== "", "misssing env var SECRET key");
	
	const keypair = Keypair.fromSecretKey(utils.bytes.bs58.decode(SECRET_KEY));
	
	return new AnchorProvider(connection, new Wallet(keypair), AnchorProvider.defaultOptions());
}

export function getProgram(provider: Provider, programId: PublicKey) {
	return new Program(IDL, programId, provider);
}

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