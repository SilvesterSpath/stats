import { CsvFileReader } from './CsvFileReader';
import { changeDateFormat } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, string, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      changeDateFormat(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult, // 'H', 'A', 'D'
      row[6],
    ];
  }
}
