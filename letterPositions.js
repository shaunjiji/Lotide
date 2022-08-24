const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++){
    if (sentence[i] !== " "){
      if (!results[sentence[i]]) {
      results[sentence[i]] = [i]; }
      else {
        results[sentence[i]].push(i);
      }
    }
  }
  

  return results;
};

console.log(letterPositions("lighthouse in the house"));


