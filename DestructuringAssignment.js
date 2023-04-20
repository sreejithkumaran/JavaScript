/*
The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables
: The order of the name does not matter in object destructuring.
When destructuring objects, you should use the same name for the variable as the corresponding object key.
*/

// assigning object attributes to variables

// Before ES6
var person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

var name = person.name;
var age = person.age;
var gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

//From ES6:

// destructuring assignment
var { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

var {name1, age, gender} = person;
console.log(name1); // undefined

// destructuring assignment
// using different variable names
var { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female

// Array Destructuring
var arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x1, y1, z1] = arrValue;

console.log(x1); // one
console.log(y1); // two
console.log(z1); // three

// Assign Default Values
/*
var arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log(x); // 10
console.log(y); // 7
*/
var person = {
    name: 'Jack',
}

// assign default value 26 to age if undefined
var { name, age = 26} = person;

console.log(name); // Jack
console.log(age); // 26

// program to swap variables

var x = 4;
var y = 7;

// swapping variables
[x, y] = [y, x];

console.log(x); // 7
console.log(y); // 4

var arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
var [x, , z] = arrValue;

console.log(x); // one
console.log(z); // three

// Assign Remaining Elements to a Single Variable
var arrValue = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
var [x, ...y] = arrValue;

console.log("x : "+x); // one
console.log("y : "+y); // ["two", "three", "four"]


var person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
var { name, ...rest } = person;

console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}
console.log(rest.age); //25

// throws an error   const [ ...x, y] = arrValue;

// Nested Destructuring Assignment
// nested array elements
var arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
var [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

var person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
var {name, hobbies: {read, playGame}} = person;

console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true

/*
Note: Destructuring assignment feature was introduced in ES6. Some browsers may not support the use of the destructuring assignment.
*/