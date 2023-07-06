const mergeAlternately = function(word1, word2) {
  let wordLoop = 0;
  let mergedString = "";
  
  // Compare and find the longest word to loop through
  if (word1.length >= word2.length) {
    wordLoop = word1.length;
  } else {
    wordLoop = word2.length;
  }

  for (let i = 0; i < wordLoop; i++) {
    if (word2[i] === undefined) {
      mergedString += word1[i];
    } else if (word1[i] === undefined) {
      mergedString += word2[i];
    } else {
      mergedString += word1[i];
      mergedString += word2[i];
    }
  }
  return mergedString;
};


// Test ----> Expected output = "msetrrgiengs"
console.log(mergeAlternately("merge", "strings"));