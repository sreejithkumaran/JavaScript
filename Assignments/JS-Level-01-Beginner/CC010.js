/*
Write a program that takes two arrays of integers and returns a new array containing only the elements that appear in both arrays.
*/

let array01 = [10, 3, 4, 15, 9, 80];
let array02 = [2, 3, 4, 15, 6, 90];

let commonArray = array01.filter(element => array02.includes(element));
console.log(commonArray);