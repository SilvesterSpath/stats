"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((item) => item.split(',')) // 'string1, string2, string3'
            .map((item) => [
            (0, utils_1.changeDateFormat)(item[0]),
            item[1],
            item[2],
            +item[3],
            +item[4],
            item[5],
            item[6],
        ]); // ['string1', 'string2', 'string3'];
    }
}
exports.CsvFileReader = CsvFileReader;
