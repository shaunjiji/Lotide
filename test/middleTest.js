// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');




// //TEST CODE
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([]), []);

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]),[4, 5] );
  });
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); 
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []); 
  });

});

