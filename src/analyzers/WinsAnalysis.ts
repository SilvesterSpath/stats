import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  matches: MatchData[] = [];

  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (const item of matches) {
      if (
        (item[1] === this.team && item[5] === MatchResult.HomeWin) ||
        (item[2] === this.team && item[5] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
