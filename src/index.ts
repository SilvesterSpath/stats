import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader('./football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const reader = new MatchReader(fileReader);
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
  if (
    (item[1] === 'Man United' && item[5] === MatchResult.HomeWin) ||
    (item[2] === 'Man United' && item[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
