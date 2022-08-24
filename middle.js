function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (i = 0; i < array1.length; i++) {
    for (i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }

}

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

//TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);


