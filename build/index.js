"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('./football.csv', {
    encoding: 'utf-8',
});
const matches2 = matches.split('\n');
const matches3 = matches2.map((item) => item.split(','));
console.log(matches3);
