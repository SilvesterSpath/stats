import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // here is the total key to composition
  constructor(public analyzer: Analyzer, public outPutTarger: OutputTarget) {}

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport('report.html'));
  }

  buildAndPrintReport(matchData: MatchData[]): void {
    const report = this.analyzer.run(matchData);
    this.outPutTarger.print(report);
  }
}

/*const summary = new Summary(new WinsAnalysis(), new ConsoleReport())
summary.buildAndPrintReport()
 */

// I can call a static method without instanciating the class
/* Summary.printHello(); */
