// Prize Strings
// Problem 191
// https://projecteuler.net/problem=191

const LATE = 'L', ON_TIME = 'O', ABSENT = 'A';

function Attendance(values = [], numConsecutiveAbsenses = 0, numLates = 0) {
  this.values = values;
  this.numConsecutiveAbsenses = numConsecutiveAbsenses;
  this.numLates = numLates;
}

Attendance.prototype.add = function (value) {
  let numConsecutiveAbsesnses = this.numConsecutiveAbsenses;
  let numLates = this.numLates;

  if (value === ABSENT) {
    if (this.values.length == 0 || this.values[this.values.length - 1] == 'A') {
      numConsecutiveAbsesnses++;
    } else {
      numConsecutiveAbsesnses = 1;
    }
  }

  if (value === LATE) {
    numLates++;
  }

  return new Attendance(this.values.concat(value), numConsecutiveAbsesnses, numLates);
};

Attendance.prototype.isPrizeWorthy = function () {
  return this.numConsecutiveAbsenses < 3 && this.numLates < 2;
};

Attendance.prototype.numValues = function () {
  return this.values.length;
};

Attendance.prototype.toString = function () {
  return this.values.join('');
};


function permutations(numDays, possibleStates, Type) {
  function permute(permutation = new Type(), permutations = []) {
    if (permutation.numValues() === numDays) {
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
  return permutations(numDays, [LATE, ON_TIME, ABSENT], Attendance)
    .map(item => item.toString());
};

