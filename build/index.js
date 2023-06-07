"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
const matches = reader.data;
const formattedMatches = [];
for (const item of matches) {
    const newDate = (0, utils_1.changeDateFormat)(item[0]);
    if (!newDate) {
        continue;
    }
    formattedMatches.push([
        newDate,
        item[1],
        item[2],
        +item[3],
        +item[4],
        item[5],
        item[6],
    ]);
}
console.log(formattedMatches);
/* // with this, it is more clear, but not entirely
const homeWin = 'H';
const awayWin = 'A';
// this is also necessary
const draw = 'D'; */
// this is much more descriptive using enum - enumerations (using just like an object)
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
/* const printMtchResults = (): MatchResult=>{
  if(match[5] === 'H'){
    return MatchResult.HomeWin
  }
  return MatchResult.AwayWin
} */
let manUnitedWins = 0;
for (const item of matches) {
    if ((item[1] === 'Man United' && item[5] === MatchResult.HomeWin) ||
        (item[2] === 'Man United' && item[5] === MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
