const tail = function(arr) {
  let output = [];
  for (let i = 1; i < arr.length; i ++) {
    output.push(arr[i]);
  }
  return output;
};

module.exports = tail;