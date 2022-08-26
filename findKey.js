
const findKey = function(object, callback) {
  //loop over each object[property][stars][property]
  // conditional -> callBACK(item) is true?
  // return that property
  
  for (const property in object){
    if(callback(object[property])){
      return property;
    }
}
}

















console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"