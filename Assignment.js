/*
Write a program to print all elements of the following Array, in increasing order of the id field.

[
  { id: 51, name: 'John', age: 30 },
  { id: 13, name: 'Alice', age: 35 },
  { id: 20, name: 'Jane', age: 25 }
]

Hi, my name is Alice, I'm 35 years old.
Hi, my name is Jane, I'm 25 years old.
Hi, my name is John, I'm 30 years old.

*/

const student = [
  { id: 51, name: "John", age: 30 },
  { id: 13, name: "Alice", age: 35 },
  { id: 20, name: "Jane", age: 25 },
];

// Use Array inbuilt Sort() function
console.log("Sort the student in ascending order based on property Id :: ");
student.sort((a, b) => a.id - b.id);
console.log(student);

console.log("Sort the student in descending order based on property Id :: ");
student.sort((a, b) => b.id - a.id);
console.log(student);

// Display Format
student.forEach(displayArray);

function displayArray(arr) {
  console.log(`Hi, my name is ${arr.name}, I'm ${arr.age} years old.`);
}

let x;
function oddEven(value){
  x = (value % 2 == 0) ? 'Even' : 'Odd';
  return x ;
}

const y = oddEven(10);
console.log('Is odd / even : '+y);

const a = 10;

const value = (a) => a % 2 == 0 ? 'Even' : 'Odd';
console.log(value); // [Function: value]
console.log(value(100));

const sumValue = (a,b) => a+b;
console.log(sumValue(10,20));

const greet = () => 'Hello How are you';
const greetName = (name) => `Hello  ${name} how are you`;
console.log(greet());
console.log(greetName('Row'));



