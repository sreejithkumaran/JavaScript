/*
    Write a program that takes an array of integers and returns a new array containing only the even numbers from the original array.
*/

let arrayNo = [5,10,8,7,6,9,3];

const result = arrayNo.filter(x => x % 2 == 0 );

console.log('Even Numbers : '+result)
