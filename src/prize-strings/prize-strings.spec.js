const expect = require('chai').expect;
const assert = require('chai').assert;

const prizeStrings = require('./prize-strings');

describe('prize-strings', () => {

  describe('generates attendance for 4 days', () => {
    let result = prizeStrings(4);

    it('has correct prize worthy count', () => {
      expect(result.count).to.equal(43);
    });

    it('has correct prize worthy values', () => {
      let expected = ['AALA', 'AALO', 'AAOA', 'AAOL', 'AAOO', 'ALAA', 'ALAO', 'ALOA', 'ALOO', 'AOAA', 'AOAL', 'AOAO', 'AOLA', 'AOLO', 'AOOA', 'AOOL', 'AOOO', 'LAAO', 'LAOA', 'LAOO', 'LOAA', 'LOAO', 'LOOA', 'LOOO', 'OAAL', 'OAAO', 'OALA', 'OALO', 'OAOA', 'OAOL', 'OAOO', 'OLAA', 'OLAO', 'OLOA', 'OLOO', 'OOAA', 'OOAL', 'OOAO', 'OOLA', 'OOLO', 'OOOA', 'OOOL', 'OOOO'];

      assert.sameMembers(expected, result.list);
    });
  });


  describe('generates attendance for 30 days', () => {
    let result = prizeStrings(30);

    it('has correct prize worthy count', () => {
      expect(result.count).to.equal(1918080160);
    });

    it('does not produce prize worthy values for days > 10', () => {
      expect(result.list).to.equal('unavailable');
    });
  });
});
