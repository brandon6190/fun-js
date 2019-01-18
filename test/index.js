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

describe('isNumber()', () => {
  it('should return true if the argument is a number', () => {
    assert.equal(isNumber(5), true);
  });

  it('should return false if the argument is not a number', () => {
    assert.equal(isNumber('hello'), false);
  })
});

describe('isArray()', () => {
  it('should return false if the argument is not an array', () => {
    assert.equal(isArray(5), false);
    assert.equal(isArray('hey'), false);
  });

  it('should return true if the argument is an array', () => {
    assert.equal(isArray([1,2,3]), true);
  });
});

describe('isObject()', () => {
  it('should return true if the argument is an object', () => {
    assert.equal(isObject([1,2,3]), true);
  });

  it('should return false if the argument is not an object', () => {
    assert.equal(isObject(5), false);
    assert.equal(isObject('hey'), false);;
  });
});

describe('isNull()', () => {
  it('should return true if the argument is null', () => {
    assert.equal(isNull(null), true);
  });

  it('should return false if the argument is not null', () => {
    assert.equal(isNull(5), false);
  });
});

describe('clone()', () => {
  it('should create a shallow clone of an object or array', () => {
    let users = [{ 'user': 'barney' },{ 'user': 'fred' }];
    let shallowClone = clone(users);
    
    assert.equal(shallowClone[0] === users[0], true);
    assert.equal(shallowClone === users, false);
  });
});

describe('size()', () => {
  it('should return the length of an array', () => {
    assert.equal(size([1,2,3]), 3);
  });

  it('should return the number of key/value pairs in an object', () => {
    assert.equal(size({a: 1, b: 2}), 2);
  });
});

describe('indexOf()', () => {
  it('should return the index at which the first occurrence of the second argument is found', () => {
    assert.equal(indexOf([11, 22, 33], 11), 0);
  });

  it('should return -1 if the value is not found', () => {
    assert.equal(indexOf([11, 22, 33], 5), -1);
  });
});

describe('drop()', () => {
  it('should remove the amount of elements equal to the second argument', () => {
    assert.deepEqual(drop([1,2,3], 2), [3]);
  });

  it('should remove the first element in an array if the second argument is not provided', () => {
    assert.deepEqual(drop([1,2,3]), [2,3]);
  });

  it('should return an empty array if the second argument is larger than the arrays length', () => {
    assert.deepEqual(drop([1,2,3], 5), []);
  });

  it('should return the whole array if the second argument equals to 0', () => {
    assert.deepEqual(drop([1,2,3], 0), [1,2,3]);
  });
});

describe('dropRight()', () => {
  it('should remove elements starting from the right, that equals the amount of the second argument', () => {
    assert.deepEqual(dropRight([1,2,3], 2), [1]);
  });

  it('should remove the last element if the second argument is not provided', () => {
    assert.deepEqual(dropRight([1,2,3]), [1,2]);
  });

  it('should return an empty array if the second argument is larger than the length of the array', () => {
    assert.deepEqual(dropRight([1,2,3], 5), []);
  });

  it('should return the whole array if the second argument equals to 0', () => {
    assert.deepEqual(dropRight([1,2,3], 0),[1,2,3]);
  });
});

describe('take()', () => {
  it('shouold take the first element in the array if no second argument is provided', () => {
    assert.deepEqual(take([1,2,3]), [1]);
  });

  it('should take elements in array equal to the amount of the second argument', () => {
    assert.deepEqual(take([1,2,3], 2), [1,2]);
  });

  it('should take all the elements if the second argument is larger than the arrays length', () => {
    assert.deepEqual(take([1,2,3], 5), [1,2,3]);
  });

  it('should return an emtpy array if the second argument equals to 0', () => {
    assert.deepEqual(take([1,2,3], 0), []);
  });
});