import { Launchpad } from './launchpad';
import LaunchpadIdlJson from './launchpad.json';
import { LaunchpadLottery } from './launchpad_lottery';
import LotteryIdlJson from './launchpad_lottery.json';
import { LaunchpadStaking } from './launchpad_staking';
import StakingIdlJson from './launchpad_staking.json';
import { SolmashWhitelist } from './solmash_whitelist';
import WhitelistIdlJson from './solmash_whitelist.json';

export const LaunchpadIdl = LaunchpadIdlJson as Launchpad;
export const LotteryIdl = LotteryIdlJson as LaunchpadLottery; 
export const StakingIdl = StakingIdlJson as LaunchpadStaking;
export const WhitelistIdl = WhitelistIdlJson as SolmashWhitelist;
