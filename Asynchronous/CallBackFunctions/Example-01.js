
let isEven = (x) => x%2==0;

let printResult = (evenFn, number) => {
const result = isEven(number);
console.log(`Number ${number} is Even ${result}`);
};

printResult(isEven, 10);
printResult(isEven, 5);