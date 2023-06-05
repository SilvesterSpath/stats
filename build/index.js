"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('./football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((item) => item.split(','));
// with this, it is more clear, but not entirely
const homeWin = 'H';
const awayWin = 'A';
// this is also necessary
const draw = 'D';
let manUnitedWins = 0;
for (const item of matches) {
    if ((item[1] === 'Man United' && item[5] === homeWin) ||
        (item[2] === 'Man United' && item[5] === awayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
