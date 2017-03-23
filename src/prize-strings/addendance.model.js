const {LATE, ABSENT, ON_TIME} = require("./attendance.enum.js");

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

Attendance.prototype.toString = function () {
  return this.values.join('');
};

Object.defineProperty(Attendance.prototype, 'length', {
  get: function () {
    return this.values.length;
  }
});

module.exports = Attendance;
