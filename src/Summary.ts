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

  buildAndPrintReport(matchData: MatchData[]): void {
    const report = this.analyzer.run(matchData);
    this.outPutTarger.print(report);
  }
}

/* new Summary(new WinsAnalysis(), new ConsoleReport()) */
