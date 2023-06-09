import fs from 'fs';
import { changeDateFormat } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, string, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((item: string): string[] => item.split(',')) // 'string1, string2, string3'
      .map(this.mapRow); // only reference not invoke the method
  }

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
