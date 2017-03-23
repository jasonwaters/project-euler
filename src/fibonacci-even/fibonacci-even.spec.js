const expect = require('chai').expect;

const fibonacciEven = require('./fibonacci-even');

describe('fibonacci-even', () => {

  describe('determines nth number in fobonacci sequence', () => {
    it('19th == 6765', () => {
      let result = fibonacciEven.fib(19);
      expect(result).to.equal(6765);
    });

    it('79th == 23416728348467685', () => {
      let result = fibonacciEven.fib(79);
      expect(result).to.equal(23416728348467685);
    });

  });

  describe('summarizes even fibonacci numbers up to a maximum value', () => {

    it('correctly sumarizes up to 90', () => {
      let result = fibonacciEven.findEvenFibonacciSum(90);
      expect(result).to.equal(44);
    });

    it('correctly sumarizes up to 4 million', () => {
      let result = fibonacciEven.findEvenFibonacciSum(4000000);
      expect(result).to.equal(4613732);
    });

  });

});
