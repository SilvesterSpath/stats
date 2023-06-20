"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    // here is the total key to composition
    constructor(analyzer, outPutTarger) {
        this.analyzer = analyzer;
        this.outPutTarger = outPutTarger;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport('report.html'));
    }
    buildAndPrintReport(matchData) {
        const report = this.analyzer.run(matchData);
        this.outPutTarger.print(report);
    }
}
exports.Summary = Summary;
/*const summary = new Summary(new WinsAnalysis(), new ConsoleReport())
summary.buildAndPrintReport()
 */
// I can call a static method without instanciating the class
/* Summary.printHello(); */
