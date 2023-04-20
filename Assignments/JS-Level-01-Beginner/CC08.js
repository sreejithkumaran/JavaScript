/*
Write a program that takes an array of integers and returns a new array containing only the positive numbers
*/

let array = [-1,3,6,-9,-2,-3,5,-5,9,-8];

//  filter
let positiveArray = array.filter((element) => element > 0);
console.log(positiveArray);