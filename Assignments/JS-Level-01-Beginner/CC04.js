/*
    Write a program that takes an array of integers and returns the largest number in the array.
*/

let arrayNo = [10,60,80,5,30,90,20];

// Sort the array
arrayNo.sort((a,b) => b - a);
console.log('Sorted Array : '+arrayNo);

let largestElement = arrayNo.at(0);
console.log('Largest Element : '+largestElement);

// External Reference
arrayNo = [10,60,80,5,30,90,20];
console.log(Math.max.apply(null, arrayNo)); // logs 5
