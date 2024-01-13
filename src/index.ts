import dotenv from 'dotenv';

import { jsonToXlsx } from './json2xlsx';

dotenv.config();

(async () => {
	// await fetchStaker();
	// await fetchLotterBuyer();
	// await fetchWhitelistBuyer();
	jsonToXlsx();
})();
