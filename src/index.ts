import { CsvFileReader } from './CsvFileReader';
import { changeDateFormat } from './utils';

const reader = new CsvFileReader('football.csv');
reader.read();
const matches = reader.data;

const formattedMatches = [];

for (const item of matches) {
  const newDate = changeDateFormat(item[0]);

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
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

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
