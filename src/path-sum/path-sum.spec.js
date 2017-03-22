const expect = require('chai').expect;
const assert = require('chai').assert;
const EULER_MATRIX = require('./p081_matrix.json').data;

const pathSum = require('./path-sum');

describe('path-sum', () => {

  describe('finds minimal path sum', () => {
    it('for a simple 3 x 3 matrix', () => {
      const data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      let result = pathSum.minimalPath(data);

      expect(result.sum).to.equal(21);
      assert.sameMembers([1,2,3,6,9], result.path);
    });

    it('for the test 5 x 5 matrix', () => {
      const data = [
        [131, 673, 234, 103, 18],
        [201, 96, 342, 965, 150],
        [630, 803, 746, 422, 111],
        [537, 699, 497, 121, 956],
        [805, 732, 524, 37, 331],
      ];

      let result = pathSum.minimalPath(data);

      expect(result.sum).to.equal(2427);
      assert.sameMembers([ 131, 201, 96, 342, 746, 422, 121, 37, 331 ], result.path);
    });

    it('for the 80 x 80 EULER matrix', () => {
      expect(pathSum.minimalPath(EULER_MATRIX).sum).to.equal(427337);
    });

  });


});
