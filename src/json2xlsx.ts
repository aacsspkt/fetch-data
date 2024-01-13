import assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import * as xlsx from 'xlsx';

export async function createExcelOrCsv(jsonData: any[], outputFilePath: string, fileType: "xlsx" | "csv") {
	const workbook = xlsx.utils.book_new();

	const sheet = xlsx.utils.json_to_sheet(jsonData);
	xlsx.utils.book_append_sheet(workbook, sheet, "Sheet 1");

	if (fileType === "xlsx") {
		xlsx.writeFile(workbook, outputFilePath);
	} else if (fileType === "csv") {
		const csvData = xlsx.utils.sheet_to_csv(sheet);
		fs.writeFileSync(outputFilePath, csvData);
	}
	console.log(`Conversion from JSON to ${fileType.toUpperCase()} successful!`);
}



export function jsonToXlsx() {
  const lotteyFile = fs.readFileSync(path.resolve(__dirname, "lottery-participants.json"), "utf-8");
  const stakingFile = fs.readFileSync(path.resolve(__dirname, "staking-participants.json"), "utf-8");
  const whitelistFile = fs.readFileSync(path.resolve(__dirname, "whitelist-participants.json"), "utf-8");

  const lotteryInfo = JSON.parse(lotteyFile);
  const stakerInfo = JSON.parse(stakingFile);
  const whitelistInfo = JSON.parse(whitelistFile);

  assert(Array.isArray(lotteryInfo));
  assert(Array.isArray(stakerInfo));
  assert(Array.isArray(whitelistInfo));

  const lotteryParticipants = lotteryInfo.map(info => ({buyer: info.buyers}));
  createExcelOrCsv(lotteryParticipants, path.resolve(__dirname, 'lotteryParticipants.xlsx'), "xlsx");

  const stakingParticipants = stakerInfo.map(info => ({staker: info.staker}));
  createExcelOrCsv(stakingParticipants, path.resolve(__dirname, 'stakingParticipants.xlsx'), "xlsx");

  const whitelistParticipants = whitelistInfo.map(info => ({buyer: info.whitelistUser}));
  createExcelOrCsv(whitelistParticipants, path.resolve(__dirname, 'whitelistParticipants.xlsx'), "xlsx");
  
}