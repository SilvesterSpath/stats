import fs from 'fs';
import { changeDateFormat } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((item: string): string[] => item.split(',')) // 'string1, string2, string3'
      .map((item: string[]): any => [
        changeDateFormat(item[0]),
        item[1],
        item[2],
        +item[3],
        +item[4],
        item[5] as MatchResult, // 'H', 'A', 'D'
        item[6],
      ]); // ['string1', 'string2', 'string3'];
  }
}
