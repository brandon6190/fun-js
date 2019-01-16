const { assert } = require('chai');
const {
  isNegativeOrOdd,
  repeat,
  reverseString,
  reverseObject,
  isNumber,
  isArray,
  isObject,
  isNull,
  clone,
  size,
  indexOf,
  drop,
  dropRight,
  take,
  difference,
  forEach,
  forEachRight,
  map,
  filter,
} = require('../src');

describe('isNegativeOrOdd()', () => {
  it('should return true if number value is odd', () => {
    assert.equal(isNegativeOrOdd(1), true);
  });

  it('should return true if number is negative, below 0', () => {
    assert.equal(isNegativeOrOdd(-2), true);
  });

  it('should return false if number is even and positive', () => {
    assert.equal(isNegativeOrOdd(2), false);
  });
});
