

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



function middle(array) {
  let outputArray = [];
  if (array.length <= 2) {
    return outputArray;
  }
  if (array.length % 2 !== 0) {
    outputArray.push(array[Math.floor(array.length / 2)]);
    return outputArray;
  }
  if (array.length % 2 === 0) {
    outputArray.push((array[array.length / 2 - 1]), (array.length / 2 + 1));
    return outputArray;
  }

}

module.exports = middle;



