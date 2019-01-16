/**
 * returns true if the number is negative or odd
 * ex: isNegativeOrOdd(1); -> true
 * ex: isNegativeOrOdd(-2); -> true
 * ex: isNegativeOrOdd(2); -> false
 */
function isNegativeOrOdd(value) {
  if (value % 2 === 1 || value < 0) {
    return true;
  }
  return false;
}

/**
 * repeats the given string count times
 * repeat('abc',3); -> 'abcabcabc'
 * repeat('*', 2); -> '**'
 * repeat('abc',0); -> ''
 */
function repeat(string, count) {
  let result = '';
  for (let i = count; i > 0; i -= 1) {
    result += string;
  }
  return result;
}

/**
 * returns a string that is the reverse of the inputted string
 * assume only strings are inputted
 * reverseString('hello'); -> 'olleh'
 * reverseString('will'); -> 'lliw'
 */
function reverseString(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }
  return result;
}

/**
 * accepts an object and returns an object with key and values switched
 * ex: reverseObject({"a":1,b:"c","d":4}); -> {1:"a",c:"b",4:"d"}
 */
function reverseObject(object) {
  const myObject = {};
  for (const key in object) {
    myObject[object[key]] = key;
  }
  return myObject;
}

/**
 * Returns boolean of whether argument is classified as a Number object
 * isNumber(5); → true
 * isNumber('hi'); → false
 */
function isNumber(value) {
  if (typeof value === 'number') {
    return true;
  }
  return false;
}

/**
 * Returns boolean of whether argument is classified as an Array object
 * isArray(5); → false
 * isArray([1,2,3]); → true
 */
function isArray(value) {
  if (Array.isArray(value)) {
    return true;
  }
  return false;
}

/**
 * Returns boolean of whether argument is classified as an Object
 * isObject(5); → false
 * isObject([1,2,3]); → true
 */
function isObject(value) {
  if (typeof value === 'object') {
    return true;
  }
  return false;
}

/**
 * return boolean of whether argument is classified as null
 * isNull(null); -> true
 * isNull(5); -> false
 */
function isNull(value) {
  if (value === null) {
    return true;
  }
  return false;
}

/**
 * Creates a clone of an object.
 * var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * var shallowClone = clone(users);
 * shallowClone === users -> false
 * shallowClone[0] === users[0] → true
 * DO NOT USE THE BUILT-IN Object.assign FUNCTION
 */
function clone(value) {
  if (typeof value === 'object' && !Array.isArray(value)) {
    const shallowClone = JSON.parse(JSON.stringify(value));
    return shallowClone;
  } else if (Array.isArray(value)) {
    const shallowClone = value.slice();
    return shallowClone;
  }
  return 'Argument must be an array or object';
}

/**
 * Return the size of collection.
 * If the argument passed is an array, then return the length of the array.
 * If the argument passed is an object, then return the number of key/value properties.
 * size([1,2,3]); → 3
 * size({a: 1, b: 2}); → 2
 */
function size(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  }
  let count = 0;
  for (const key in collection) {
    count += 1;
  }
  return count;
}

/**
 * Gets the index at which the first occurrence of value is found in array
 * Returns -1 if element is not in array
 * DO NOT USE THE BUILT-IN INDEXOF function
 * indexOf([11,22,33], 11); → 0
 * indexOf([11,22,33], 5); → -1
 */
function indexOf(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

/**
 * Creates a slice of array with n elements dropped from the beginning. n defaults to 1
 * drop([1, 2, 3]); → [2, 3]
 * drop([1, 2, 3], 2); → [3]
 * drop([1, 2, 3], 5); → []
 * drop([1, 2, 3], 0); → [1, 2, 3]
 */
function drop(array, n) {
  const myArray = [...array];
  if (n === 0) {
    return myArray;
  }
  if (typeof n === 'undefined') {
    n = 1;
  }
  myArray.splice(0, n);
  return myArray;
}

/**
 * Creates a slice of array with n elements dropped from the end. n defaults to 1
 * dropRight([1, 2, 3]); → [1, 2]
 * dropRight([1, 2, 3], 2); → [1]
 * dropRight([1, 2, 3], 5); → []
 * dropRight([1, 2, 3], 0); → [1, 2, 3]
 */
function dropRight(array, n) {
  const myArray = [...array];
  if (n === 0) {
    return myArray;
  }
  if (typeof n === 'undefined') {
    n = 1;
  }
  myArray.reverse();
  myArray.splice(0, n);
  return myArray.reverse();
}

/**
 * Creates a slice of array containing n elements taken from the beginning. n defaults to 1
 * take([1, 2, 3]); → [1]
 * take([1, 2, 3], 2); → [1, 2]
 * take([1, 2, 3], 5); → [1, 2, 3]
 * take([1, 2, 3], 0); → []
 */
function take(array, n) {
  const myArray = [];
  if (typeof n === 'undefined') {
    return [array[0]];
  }
  if (n === 0) {
    return [];
  }
  if (n > array.length) {
    return [...array];
  }
  for (let i = 0; i < n; i += 1) {
    myArray.push(array[i]);
  }
  return myArray;
}

/**
 * Returns an array containing the elements from array1 that are not in array2
 * difference([0,1,2,3,4,5],[3,5]); -> [0,1,2,4]
 */
function difference(array1, array2) {
  const myArray1 = [...array1];
  const myArray2 = [...array2];

  for (let i = 0; i < myArray1.length; i += 1) {
    for (let k = 0; k < myArray2.length; k += 1) {
      if (myArray1[i] === myArray2[k]) {
        myArray1.splice(i, 1);
      } else {
        continue;
      }
    }
  }

  return myArray1;
}

/**
 * Iterates over elements of an array invoking callback for each element.
 * The callback should be passed the element, the current index, and the entire array.
 * var callback = function(element, index, array) {
 *   console.log(element + "," + index + "," + array);
 * }
 * forEach(['a','b','c'], callback); → prints a,0,[a,b,c] b,1,[a,b,c] c,2,[a,b,c]
 * For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
 */
function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

// Iterates over elements of array in reverse invoking callback for each element.
// The callback should be passed the element, the current index, and the entire array.
//  var helper = function(element, index, array) {
//    console.log(element + "," + index + "," + array);
//  }

function forEachRight(array, callback) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    callback(array[i], i, array);
  }
}

// forEachRight(['a','b','c'], helper); // → prints c,2,[a,b,c] b,1,[a,b,c] a,0,[a,b,c]

/**
 * Creates an array of values by running each element in array through callback
 * The callback should be passed the element, the current index, and the entire array.
 * map([1,2,3], function(element, index, array) {
 *  return element * 3;
 * }); -> [3,6,9]
 * BONUS: use the forEach method you use to create map
 */

function map(array, callback) {
  const mapped = [];
  forEach(array, (element, index, arr) => {
    const updated = callback(element);
    mapped.push(updated);
  });
  return mapped;
}

/**
 * Iterates over elements of collection returning an array of all the elements callback returns truthy for.
 * filter([1,2,3,4], function(element, index, array) {
 *  return element % 2 === 0;
 * }); → [2,4]
 * filter({a: 1, b: 2,c: 3,d: 4}, function(value, key, collection) {
 *  return element % 2 !== 0;
 * }); → {a: 1, c: 3}
 */
function filter(collection, callback) {
  if (Array.isArray(collection)) {
    const passed = [];
    for (const value of collection) {
      if (callback(value)) {
        passed.push(value);
      }
    }
    return passed;
  }

  if (typeof collection === 'object' && !Array.isArray(collection)) {
    const passed = {};
    for (const key in collection) {
      if (callback(collection[key])) {
        passed[key] = collection[key];
      }
    }
    return passed;
  }
  return 'First argument must be an object or array';
}
module.exports = {
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
};
