import { changeDateFormat } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  data: MatchData[] = [];
  constructor(public reader: DataReader) {}

  /*   .map((item: string[]): string[] => [
    item[0],
    item[1],
    item[2],
    item[3],
    item[4],
    item[5], // 'H', 'A', 'D'
    item[6],
  ]); // ['string1', 'string2', 'string3']; */

  static MatchReaderWithCsv(file: string): MatchReader {
    return new MatchReader(new CsvFileReader(file));
  }

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map(
      (item: string[]): MatchData => [
        changeDateFormat(item[0]),
        item[1],
        item[2],
        +item[3],
        +item[4],
        item[5] as MatchResult, // 'H', 'A', 'D'
        item[6],
      ]
    );
  }
}
