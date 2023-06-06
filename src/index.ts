import fs from 'fs';

const matches = fs
  .readFileSync('./football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((item: string): string[] => item.split(','));

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
