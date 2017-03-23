// Roman numerals
// Problem 89
// https://projecteuler.net/problem=89
// https://projecteuler.net/about=roman_numerals

const ROMAN_NUMERALS = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
};

const NUMERALS = Object.keys(ROMAN_NUMERALS);
const NUMERAL_VALUES = NUMERALS.map(key => ROMAN_NUMERALS[key]);

const ROMAN_NUMERALS_BY_VALUE = NUMERAL_VALUES.reduce((tot, next, idx) => {
  tot[next] = NUMERALS[idx];
  return tot;
}, {});

/* O(n) */
function parseRomanNumeral(str) {
  let result = 0;

  while(str.length) {

    let numeralValue = ROMAN_NUMERALS[str.substr(-2)] || ROMAN_NUMERALS[str.substr(-1)];
    let numeral = ROMAN_NUMERALS_BY_VALUE[numeralValue];

    result += numeralValue;
    str = str.substr(0, str.length-numeral.length);

  }

  return result;
}

/* O(n)-ish */
function generateRomanNumeral(num) {
    let result = '';

      NUMERAL_VALUES.forEach((value, idx) => {
        while(num >= value) {
          result += NUMERALS[idx];
          num -= value;
        }
      });

    return result;

}

function parseGroup(arr) {
  return arr.map(parseRomanNumeral);
}

function generateGroup(arr) {
  return arr.map(generateRomanNumeral);
}

function diff(arr) {
  let values = parseGroup(arr);
  let efficientRomanNumerals = generateGroup(values);

  return arr.reduce((savings, next, idx) => {
    savings += next.length - efficientRomanNumerals[idx].length;
    return savings;
  }, 0);
}

module.exports = {
  parseRomanNumeral,
  generateRomanNumeral,
  parseGroup,
  generateGroup,
  diff
};
