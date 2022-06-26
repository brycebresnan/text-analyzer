Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


Describe: censor()

Test: "It should omit nothing for an empty string."
Code:
const text = "";
const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
censor(badWords, text);
Expected Output: "";

Test: "It should omit nothing for a string of text."
Code: 
const text = "The quick brown fox jumps over the lazy dog";
const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
censor(badWords, text);
Expected Output: "The quick brown fox jumps over the lazy dog";

Test: "It should omit a single word string when it matches one given in an array and return an empty string."
Code:
const text = "zoinks";
const badWords = ["zoinks"];
censor(badWords, text);
Expected Output: ""

Test: "It should omit a word that matches a single word in a given array no matter how many times it appears, replacing it with '****' "
Code:
const text = "zoinks zoinks zoinks";
const badWords = ["zoinks"];
censor(badWords, text);
Expected Output: "**** **** ****"

Test: "It shoudl not replace non matching words."
Code:
const text = "The quick brown fox jumps over the lazy dog";
const badWords = ["zoinks"];
censor(badWords, text);
Expected Output: "The quick brown fox jumps over the lazy dog"

Test: "It should replace a word that matches a single word given in an array surrounded by not matching words."
Code:
const text = "The quick brown fox jumps over the zoinks dog";
const badWords = ["zoinks"];
censor(badWords, text);
Expected Output: "The quick brown fox jumps over the **** dog"

Test: "It should omit either of two words given in an array"
Code:
const text = "zoinks muppeteer"
const badWords = ["zoinks","muppeteer"]
censor(badWords, text);
Expected Output = "**** ****"

Test: "It should omit either of two words given in an array with other words"
Code:
const text = "The quick zoinks fox jumps over the muppeteer dog"
const badWords = ["zoinks","muppeteer"]
censor(badWords, text);
Expected Output = "The quick **** fox jumps over the **** dog"