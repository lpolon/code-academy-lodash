const _ = {
  clamp(number, lowerBound, upperBound) {
    const lowerClampedValue = Math.max(number, lowerBound);
    const clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },

  inRange(number, startValue, endValue) {
    if (typeof endValue === 'undefined') {
      endValue = startValue;
      startValue = 0;
    }
    if (startValue > endValue) {
      const startValueArg = startValue;
      const endValueArg = endValue;
      startValue = endValueArg;
      endValue = startValueArg;
    }
    return number >= startValue && number < endValue;
  },
  words(sentence) {
    return sentence.split(' ');
  },

  pad(string, length) {
    const spacesToAdd = length - string.length;
    if (spacesToAdd <= 0) return string;
    if (spacesToAdd % 2 === 0) {
      const halfNumber = spacesToAdd / 2;
      const halfString = ' '.repeat(halfNumber);
      return `${halfString}${string}${halfString}`;
    }
    if (spacesToAdd % 2 === 1) {
      const halfNumber = (spacesToAdd - 1) / 2;
      const halfString = ' '.repeat(halfNumber);
      return `${halfString}${string}${halfString} `;
    }
  },
  has(object, key) {
    if (typeof object[key] !== 'undefined') {
      return true;
    }
    return false;
  },

  invert(object) {
    const newObj = {};
    for (key in object) {
      const value = object[key];
      newObj[value] = key;
    }
    return newObj;
  },

  findKey(object, predicate) {
    const predicateReturnValueArray = Object.keys(object).filter((key) => {
      return predicate(object[key]);
    });
    if (predicateReturnValueArray.length > 0) {
      return predicateReturnValueArray[0];
    }
    return undefined;
  },

  drop(array, dropNum = 1) {
    const [...arrayCopy] = array;
    arrayCopy.splice(0, dropNum);
    return arrayCopy;
  },

  dropWhile(array, predicate) {
    const index = array.findIndex((e, i) => !predicate(e, i, array));
    return this.drop(array, index);
  },

  /*

  */
  chunk(array, size = 1) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(array[i-1], array[i+size-1])
      chunkedArr.push(chunk);
    }
    return chunkedArr;
  },
};

console.log(_.chunk([1, 2, 3, 4, 5], 2));

// Do not write or modify code below this line.
module.exports = _;
