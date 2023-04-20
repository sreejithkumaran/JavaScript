/*
The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
*/

const array1 = [1, 2, 1];

const result = array1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]


const arr1 = [1, 2, 3, 4];

const arr_map = arr1.map((x) => [x * 2]);
console.log(arr_map);  // [[2], [4], [6], [8]]

const arr_flatMap01 =arr1.flatMap((x) => [x * 2]);
console.log(arr_flatMap01); // [2, 4, 6, 8]

// only one level is flattened
const arr_flatMap02 = arr1.flatMap((x) => [[x * 2]]);
console.log(arr_flatMap02); // [[2], [4], [6], [8]]


const words = ["it's Sunny in", "", "California"];

const word_01 = words.map((x) => x.split(" "));
console.log(word_01) // [["it's","Sunny","in"],[""],["California"]]

const word_02 =words.flatMap((x) => x.split(" "));
console.log(word_02) // ["it's","Sunny","in", "", "California"]
