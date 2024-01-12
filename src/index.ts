import dotenv from 'dotenv';

import { fetchLotterBuyer } from './fetchLottery';
import { fetchStaker } from './fetchStaking';
import { fetchWhitelistBuyer } from './fetchWhitelist';

dotenv.config();

(async () => {
	await fetchStaker();
	await fetchLotterBuyer();
	await fetchWhitelistBuyer();
})();
