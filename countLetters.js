// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(string) {
  const results = {};
  for (let char of string){
    if (char !== " "){
    if (results[char]){
      results[char] += 1;
    }
    else {
      results[char] = 1;
    }
  }
}
  return results;
}



console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house").l,1);
