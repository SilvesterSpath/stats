"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const reader = new MatchReader_1.MatchReader(fileReader);
reader.load();
const matches = reader.data;
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport('report.html'));
summary.buildAndPrintReport(matches);
