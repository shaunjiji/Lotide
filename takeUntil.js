const takeUntil = function(array, callback) {
  // maybe declare an accumulator array where a value is stored when item is not "Truthy"
  // iterate over each item in array
  // plug in each item of array into callback function, when callback function returns truthy value
  // takeUntil function should return an array that has all items up until and not including the truthy item
  let output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
    }
    else{
      return output;
    }
  }
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]