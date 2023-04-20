/*
The spread operator is a new addition to the features available in the JavaScript ES6 version.
The spread operator ... is used to expand or spread an iterable or an array
*/

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// Copy Array Using Spread Operator
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]

// Clone Array Using Spread Operator
let array1 = [ 1, 2, 3];
let array2 = arr1;

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

// append an item to the array
array1.push(4);

console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4]

let array01 = [ 1, 2, 3];

// copy using spread syntax
let array02 = [...array01];

console.log(array01); // [1, 2, 3]
console.log(array02); // [1, 2, 3]

// append an item to the array
array01.push(4);

console.log(array01); // [1, 2, 3, 4]
console.log(array02); // [1, 2, 3]


// When the spread operator is used as a parameter, it is known as the rest parameter.
let func = function(...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6]