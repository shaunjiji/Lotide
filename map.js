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

  const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
 return results;
  }

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0])
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.toUpperCase());

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);




