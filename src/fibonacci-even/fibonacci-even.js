// Even Fibonacci numbers
// Problem 2
// https://projecteuler.net/problem=2

function isEven(value) {
  return value % 2 == 0;
}

/* O(n) */
const fib = (function() {
  let sequence = [1,1];

  return function(n) {
    while(n >= sequence.length) {
      sequence.push(sequence[sequence.length-2] + sequence[sequence.length-1]);
    }

    return sequence[n];
  }
})();


/* O(n) */
function findEvenFibonacciSum(maximumValue) {
  let i=1, value = 0, sum = 0;

  for(;value < maximumValue;value=fib(i)) {

    if (isEven(value)) {
      sum += value;
    }

    i++;
  }
  return sum;
}

module.exports = {
  fib,
  findEvenFibonacciSum
};
