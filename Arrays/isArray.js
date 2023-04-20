/*
The Array.isArray() static method determines whether the passed value is an Array.
*/

let array = [1, 3, 5];
console.log(Array.isArray(array));  // true

array = 'abc';
console.log(Array.isArray(array)); // false

array = new Array(5)
console.log(Array.isArray(array)); // true

array = new Int16Array([15, 33]);
console.log(Array.isArray(array)); // false