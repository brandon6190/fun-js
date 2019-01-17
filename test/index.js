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

describe('repeat()', () => {
  it('should repeat the given string the amount of times as the count number', () => {
    assert.equal(repeat('abc', 3), 'abcabcabc');
    assert.equal(repeat('*', 2), '**');
  });

  it('should return a empty string if no count number is provided', () => {
    assert.equal(repeat('abc', 0), '');
  });
});

describe('reverseString()', () => {
  it('should reverse the given string', () => {
    assert.equal(reverseString('hello'), 'olleh');
    assert.equal(reverseString('will'), 'lliw');
  });
});

describe('reverseObject()', () => {
  it('should reverse the key/value pairs in an object', () => {
    assert.deepEqual(reverseObject({"a":1,"b":"c","d":4}), {"1":"a","4":"d",c:"b"});
  });
});