// const head = require('../head');
// const assertEqual = require('../assertEqual');

// assertEqual(head([5,6,7]), 5);  
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'Hello' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
});

