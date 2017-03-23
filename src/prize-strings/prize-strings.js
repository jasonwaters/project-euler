// Prize Strings
// Problem 191
// https://projecteuler.net/problem=191

const {LATE, ABSENT, ON_TIME} = require("./attendance.enum.js");

const getNumPrizeWinning = require('./prize-strings-formula');
const Attendance = require('./addendance.model');

/* O(n!) */
function permutations(numDays, possibleStates, Type) {
  function permute(permutation = new Type(), permutations = []) {
    if (permutation.length === numDays) {
      permutations.push(permutation);
    } else {
      for (let state of possibleStates) {
        let nextPermutation = permutation.add(state);
        if (nextPermutation.isPrizeWorthy()) {
          permute(nextPermutation, permutations);
        }
      }
    }

    return permutations;
  }

  return permute();
}

module.exports = function (numDays) {
  return {
    count: getNumPrizeWinning(numDays),
    list: numDays <= 10 ? permutations(numDays, [LATE, ON_TIME, ABSENT], Attendance).map(item => item.toString()) : 'unavailable'
  };
};

