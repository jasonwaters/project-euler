const EULER_VALUES = require('./src/roman-numerals/p089_roman.json').values;

const prizeStrings = require('./src/prize-strings/prize-strings');
const romanNumerals = require('./src/roman-numerals/roman-numerals');
const pathSum = require('./src/path-sum/path-sum');

// let results = prizeStrings(4);
// console.log(results.length, results);

// let values = romanNumerals.parseGroup(EULER_VALUES);
//
// let efficient = romanNumerals.generateGroup(values);
//
// let totalSavings = 0;
//
// efficient.forEach((value, idx) => {
//   let savings = EULER_VALUES[idx].length - value.length;
//   totalSavings += savings;
//   console.log(`${values[idx]} - ${EULER_VALUES[idx]}, ${value}, ${savings}, ${totalSavings}`);
// });


console.log(pathSum.minimalPath([
  [131,673,234,103,18],
  [201,96,342,965,150],
  [630,803,746,422,111],
  [537,699,497,121,956],
  [805,732,524,37,331],
]));

console.log(pathSum.minimalPath([
  [1,2,3],
  [4,5,6],
  [7,8,9],
]));
