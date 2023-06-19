import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // here is the total key to composition
  constructor(public analyzer: Analyzer, public outPutTarger: OutputTarget) {}
}

/* new Summary(new WinsAnalysis(), new ConsoleOutPut()) */
