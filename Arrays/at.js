/*
The at() method takes an integer value and returns the item at that index, 
allowing for positive and negative integers. Negative integers count back from the last item in the array.
*/

const array1 = [5, 12, 8, 130, 44];

let index = 2;
console.log(`Index ${index} : `+ array1.at(index)); // 8

index = -2;
console.log(`Index ${index} : `+ array1.at(index)); // 130

index = 10;
console.log(`Index ${index} : `+ array1.at(index)); // undefined