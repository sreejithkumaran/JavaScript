/*
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
*/

let x = 'foo';
console.log(Array.from(x));
// Expected output: Array ["f", "o", "o"]

let array = [1, 2, 3];
console.log(Array.from(array, x => x + x));
// Expected output: Array [2, 4, 6]