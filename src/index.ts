import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
/* const fileReader = new CsvFileReader('./football.csv'); */

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const reader = MatchReader.MatchReaderWithCsv('football.csv');
reader.load();
const matches = reader.data;

/* const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report.html')
);
*/

// With a static method we can do this:
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matches);
