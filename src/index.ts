import dotenv from 'dotenv';

import { fetchLotterBuyer } from './fetchLottery';
import { fetchStaker } from './fetchStaking';
import { fetchWhitelistBuyer } from './fetchWhitelist';
import { jsonToXlsx } from './json2xlsx';

dotenv.config();

(async () => {
	await fetchStaker();
	await fetchLotterBuyer();
	await fetchWhitelistBuyer();

	jsonToXlsx();
})();
