const expect = require('chai').expect;
const assert = require('chai').assert;
const EULER_VALUES = require('./p089_roman.json').values;

const romanNumerals = require('./roman-numerals');

describe('roman-numerals', () => {

  describe('parses roman numerals', () => {
    it('MMMMDCLXXII == 4672', () => {
      expect(romanNumerals.parseRomanNumeral('MMMMDCLXXII')).to.equal(4672);
    });

    it('MMDCCCLXXXIII == 2883', () => {
      expect(romanNumerals.parseRomanNumeral('MMDCCCLXXXIII')).to.equal(2883);
    });

    it('MMMDLXVIIII == 3569', () => {
      expect(romanNumerals.parseRomanNumeral('MMMDLXVIIII')).to.equal(3569);
    });

    it('MDCCCCXXXVII == 1937', () => {
      expect(romanNumerals.parseRomanNumeral('MDCCCCXXXVII')).to.equal(1937);
    });

    it('parses a group', () => {
      let result = romanNumerals.parseGroup(['MMMMDCLXXII', 'MMDCCCLXXXIII', 'MMMDLXVIIII', 'MDCCCCXXXVII'])
      assert.sameMembers([4672, 2883, 3569, 1937], result);
    });
  });

  describe('generates roman numerals', () => {
    it('4672 == MMMMDCLXXII', () => {
      expect(romanNumerals.generateRomanNumeral(4672)).to.equal('MMMMDCLXXII');
    });

    it('2883 == MMDCCCLXXXIII', () => {
      expect(romanNumerals.generateRomanNumeral(2883)).to.equal('MMDCCCLXXXIII');
    });

    it('3569 == MMMDLXIX', () => {
      expect(romanNumerals.generateRomanNumeral(3569)).to.equal('MMMDLXIX');
    });

    it('1937 == MCMXXXVII', () => {
      expect(romanNumerals.generateRomanNumeral(1937)).to.equal('MCMXXXVII');
    });

    it('generates a group', () => {
      let result = romanNumerals.generateGroup([4672, 2883, 3569, 1937]);
      assert.sameMembers(['MMMMDCLXXII', 'MMDCCCLXXXIII', 'MMMDLXIX', 'MCMXXXVII'], result);
    })
  });

  describe('efficiency gains', () => {
    it('diffs', () => {
      let result = romanNumerals.diff(['MMMMDCLXXII', 'MMDCCCLXXXIII', 'MMMDLXVIIII', 'MDCCCCXXXVII']);
      expect(result).to.equal(6);
    });

    it('Finds the number of characters saved by writing each of the EULER test values in their minimal form ', () => {
      let result = romanNumerals.diff(EULER_VALUES);
      expect(result).to.equal(831);
    });
  });

});
