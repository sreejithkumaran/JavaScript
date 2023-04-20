/*
Write a program that takes an array of integers and returns a new array containing only the unique elements from the original array.
*/

let array01 = [10,20,10,20,30,40,40,30,50];

let unique = new Set(array01);
console.log(unique);  // Set(5) { 10, 20, 30, 40, 50 }

let uniqueArray = Array.from(unique);
console.log(uniqueArray);  // [ 10, 20, 30, 40, 50 ]