const array1 = [5, 11, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3"

const getFirstEven = array1.findIndex(element => element % 2 == 0);
