function eqArrays(array1, array2) {
  if (array1.length !== array2.length){
   return false;
  }
  
  for (i = 0; i < array1.length; i++){
    for (i = 0; i < array2.length; i++){
     if (array1[i] !== array2[i]){
      return false;
     }
    }
  }
  return true;
  }

function assertArraysEqual(array1, array2){
if (eqArrays(array1, array2)) {
  console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
}
else {
  console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
}
}

function without(source, itemsToRemove){
  const output = source.filter(item => !itemsToRemove.includes(item));
  return output;
}

const input = [1, 2, 3];
const removeItems = [1];
const expected = [2, 3];
assertArraysEqual(without(input, removeItems), expected);


