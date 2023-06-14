"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const fileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
const reader = new MatchReader_1.MatchReader(fileReader);
reader.load();
const matches = reader.data;
/* // with this, it is more clear, but not entirely
const homeWin = 'H';
const awayWin = 'A';
// this is also necessary
const draw = 'D'; */
/* const printMtchResults = (): MatchResult=>{
  if(match[5] === 'H'){
    return MatchResult.HomeWin
  }
  return MatchResult.AwayWin
} */
let manUnitedWins = 0;
for (const item of matches) {
    if ((item[1] === 'Man United' && item[5] === MatchResult_1.MatchResult.HomeWin) ||
        (item[2] === 'Man United' && item[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
