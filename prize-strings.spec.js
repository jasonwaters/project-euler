const expect = require('chai').expect;
const assert = require('chai').assert;

const prizeStrings = require('./prize-strings');

describe('prize-strings', () => {
  let result = prizeStrings(4);

  describe('generates attendance for 4 days', () => {
    it('has 43 prize worthy values', () => {
      expect(result.length).to.equal(43);
    });

    it('returns correct prize worthy values', () => {
      let expected = ['AALA', 'AALO', 'AAOA', 'AAOL', 'AAOO', 'ALAA', 'ALAO', 'ALOA', 'ALOO', 'AOAA', 'AOAL', 'AOAO', 'AOLA', 'AOLO', 'AOOA', 'AOOL', 'AOOO', 'LAAO', 'LAOA', 'LAOO', 'LOAA', 'LOAO', 'LOOA', 'LOOO', 'OAAL', 'OAAO', 'OALA', 'OALO', 'OAOA', 'OAOL', 'OAOO', 'OLAA', 'OLAO', 'OLOA', 'OLOO', 'OOAA', 'OOAL', 'OOAO', 'OOLA', 'OOLO', 'OOOA', 'OOOL', 'OOOO'];

      assert.sameMembers(expected, result);
    });
  });
});
