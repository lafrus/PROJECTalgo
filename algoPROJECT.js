function analyzeSentence(sentence) {
    var length = 0;
    var wordCount = 0;
    var vowelCount = 0;
  
    for (var i = 0; i < sentence.length; i++) {
      var character = sentence.charAt(i);
      if (character !== ' ') {
        length++;
        if (character.match(/[aeiou]/i)) {
          vowelCount++;
        }
      }
      if (character === ' ' || i === sentence.length - 1) {
        wordCount++;
      }
    }
  
    // Display the results
    console.log("Length: " + length);
    console.log("Number of words: " + wordCount);
    console.log("Number of vowels: " + vowelCount);
  }
  
  // Example usage
  var inputSentence = "This is a sample sentence.";
  analyzeSentence(inputSentence);
  