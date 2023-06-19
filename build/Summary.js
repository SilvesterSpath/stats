"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    // here is the total key to composition
    constructor(analyzer, outPutTarger) {
        this.analyzer = analyzer;
        this.outPutTarger = outPutTarger;
    }
}
exports.Summary = Summary;
/* new Summary(new WinsAnalysis(), new ConsoleOutPut()) */
