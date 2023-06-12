import fs from 'fs';

type MatchData = [Date, string, string, number, number, string, string];

export abstract class CsvFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((item: string): string[] => item.split(',')) // 'string1, string2, string3'
      .map(this.mapRow); // only reference not invoke the method
  }
}
