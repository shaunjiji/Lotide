// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

function eqArrays(array1, array2) {
//loop through each element of array and see if elements are identical
// if any are not equal, break out and return false
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false); 
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), false); 
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); 

