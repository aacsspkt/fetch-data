# Fetch Solmash Auction Participants Info

This is a script for fetching data from solmash auctions.

## Usage

Copy `.env.example` to `.env` and provide value respectively. Run `yarn install` to install dependencies.

Run `yarn start` to run the scripts.

src/.index.ts
```ts
(async () => {
	await fetchStaker();
	await fetchLotterBuyer();
	await fetchWhitelistBuyer();

	jsonToXlsx();
})();

```

Comment any function call in `index.ts` file to run specific parts.