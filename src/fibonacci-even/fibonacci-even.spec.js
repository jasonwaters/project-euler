const expect = require('chai').expect;

const fibonacciEven = require('./fibonacci-even');

describe('fibonacci-even', () => {

  describe('determines nth number in fobonacci sequence', () => {
    it('19th == 6765', () => {
      let result = fibonacciEven.fib(19);
      expect(result).to.equal(6765);
    });
  });
});
