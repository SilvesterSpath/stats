"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
        this.matches = [];
    }
    run(matches) {
        let wins = 0;
        for (const item of matches) {
            if ((item[1] === this.team && item[5] === MatchResult_1.MatchResult.HomeWin) ||
                (item[2] === this.team && item[5] === MatchResult_1.MatchResult.AwayWin)) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
