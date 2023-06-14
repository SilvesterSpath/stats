interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}

  load(): void {}
}
