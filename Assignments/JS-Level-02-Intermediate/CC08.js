/*
Write a program that takes a string and returns a new string with each word reversed, but the order of the words should remain the same.
*/

let testString = "This is Ellucian";

function reverseWords(value) {
  let reverseValue = [], len = 0, eachWord = [];
  eachWord = value.split(" ");
  len = eachWord.length;

  for (let i = eachWord.length - 1; i >= 0; i--) {
    let currentWord;
    currentWord = Array.from(eachWord[i]).reverse().join('') + " ";
    reverseValue += currentWord;
  }
  return reverseValue;
}

console.log('String => '+testString);
let output = reverseWords(testString);
console.log("Result = > " + output);

/*
String => This is Ellucian
Result = > naicullE si sihT
*/