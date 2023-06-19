import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { ConsoleReport } from './analyzers/ConsoleReport';

// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader('./football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const reader = new MatchReader(fileReader);
reader.load();
const matches = reader.data;

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summary.outPutTarger.print(summary.analyzer.run(matches));
