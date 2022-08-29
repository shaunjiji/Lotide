// ASSERT EQUAL FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const property in object1) {
      for (const property in object2) {
        if (object1[property] !== object2[property]) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "3", b: "2", a: "1" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(abc, cba), true); // => true
