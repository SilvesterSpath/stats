"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const reader = new MatchReader_1.MatchReader(fileReader);
reader.load();
const matches = reader.data;
/* const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report.html')
);
*/
// With a static method we can do this:
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matches);
