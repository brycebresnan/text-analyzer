// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;w
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function censor(badWords, text) {
  let textArray = text.split(" ");
  let indexCounter = 0
  // let badIndexCounter = 0
  textArray.forEach(function(element) {
    badWords.forEach(function(badElement){
      if (badElement === element) {
        console.log(badElement, element, indexCounter);
        textArray.splice(indexCounter,1,"****");
        console.log(textArray);
    }})
    indexCounter++;
  })
  return textArray.join(" ");
}