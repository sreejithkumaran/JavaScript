/*
The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. 
*/

let a = Array.of('foo', 2, 'bar', true);
console.log(a);   // [ 'foo', 2, 'bar', true ]
console.log(a.length);  // 7



console.log(Array.of());
// Expected output: Array []


const b = Array.of(7); // [7]
console.log(b);
console.log(b.length); // 1

const c = Array(7); // array of 7 empty slots
console.log(c);
console.log(c.length); // 7

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]