const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// true

const array2 = [1, 30, 39, 29, 50, 13];


console.log(array2.every(isBelowThreshold));
// False