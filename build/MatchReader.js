"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.data = [];
    }
    /*   .map((item: string[]): string[] => [
      item[0],
      item[1],
      item[2],
      item[3],
      item[4],
      item[5], // 'H', 'A', 'D'
      item[6],
    ]); // ['string1', 'string2', 'string3']; */
    static MatchReaderWithCsv(file) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(file));
    }
    load() {
        this.reader.read();
        this.data = this.reader.data.map((item) => [
            (0, utils_1.changeDateFormat)(item[0]),
            item[1],
            item[2],
            +item[3],
            +item[4],
            item[5],
            item[6],
        ]);
    }
}
exports.MatchReader = MatchReader;
