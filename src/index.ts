import fs from 'fs';

const matches = fs.readFileSync('./football.csv', {
  encoding: 'utf-8',
});

const matches2 = matches.split('\n');
const matches3 = matches2.map((item) => item.split(','));

console.log(matches3);
