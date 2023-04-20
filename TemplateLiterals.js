/*
Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks ``. For example,
Note: Template literal was introduced in 2015 (also known as ECMAScript 6 or ES6 or ECMAScript 2015). Some browsers may not support the use of template literals.
*/

//Before JavaScript ES6, you would use the + operator to concatenate variables and expressions in a string. 
const name = 'Jack';
console.log('Hello ' + name); // Hello Jack

const pname = 'Jack';
console.log(`Hello ${pname}!`); // Hello Jack!

// With template literals, it's a bit easier to include variables and expressions inside a string. 
const result = 4 + 5;

// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result}`);

console.log(`${result < 10 ? 'Too low': 'Very high'}`)