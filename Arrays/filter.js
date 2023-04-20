/*
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided functio
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']


// Modifying each word
let test_words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedtest_words = test_words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log('Eg:01 '+modifiedtest_words);
// Notice there are three test_words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new test_words
test_words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedtest_words = test_words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log('Eg:02 '+appendedtest_words);
// Only three fits the condition even though the `test_words` itself now has a lot more test_words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting test_words
test_words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deletetest_words = test_words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log('Eg:03 '+deletetest_words);
// Notice 'elite' is not even obtained as it's been popped off 'test_words' before filter can even get there
// ["spray" ,"limit"]
