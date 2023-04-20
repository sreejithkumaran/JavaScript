const isBelowThreshold = (currentValue) => currentValue > 35;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.some(isBelowThreshold));
// true

const array2 = [1, 30, 39, 29, 50, 13];


console.log(array2.some(isBelowThreshold));
// False


const array = [1, 5, 7, 9, 11];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
//False 

