const EULER_VALUES = require('./src/roman-numerals/p089_roman.json').values;
const EULER_MATRIX = require('./src/path-sum/p081_matrix.json').data;

const prizeStrings = require('./src/prize-strings/prize-strings');
const romanNumerals = require('./src/roman-numerals/roman-numerals');
const pathSum = require('./src/path-sum/path-sum');

const fibEven = require('./src/fibonacci-even/fibonacci-even');

console.log("Hello!");
console.log("-----------------------");

console.log(`There are ${prizeStrings(30).count} prize worthy attendance strings in 30 days.`);

console.log(`${romanNumerals.diff(EULER_VALUES)} roman numeral characters can be saved by rewriting thier values more efficiently.`);

console.log(`The minimal path sum of the Euler 80x80 matrix is ${pathSum.minimalPath(EULER_MATRIX).sum}.`);

console.log(`The sum of even values in the fibonacci sequence up to 4 million is ${fibEven.findEvenFibonacciSum(4000000)}.`);
