const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]

const array2 = [0, 1, 2, 3, 4]; 
const output = array2.reduceRight(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
    10,
  );
  
  
console.log(output);  // 20
 
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"
