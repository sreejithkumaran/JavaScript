import load from 'lodash'
//const _ = require("lodash");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// The === operator is called strict equality operator (and !== is called strictly inequality operator)

// Equality Operator
let a1 = 10;
let a2 = -10;
let a3 = '10';

console.log(' Loose Comparsions == ');
console.log(`${a1}` +' ==  '+ `${a1}`+" => "+(a1==a1));
console.log(`${a1}` +' ==  '+ `${a2}`+" => "+(a1==a2));
console.log(`${a1}` +' ==  '+ `${a3}`+" => "+(a1==a3));

console.log(' Strict Comparsions === ');
console.log(`${a1}` +' ===  '+ `${a1}`+" => "+(a1===a1));
console.log(`${a1}` +' ===  '+ `${a2}`+" => "+(a1===a2));
console.log(`${a1}` +' ===  '+ `${a3}`+" => "+(a1===a3));

let obj01 = new Object("str");
let obj02 = new Object("str");

console.log(`${obj01}` +' ==  '+ `${obj02}`+" => "+(obj01==obj02));
console.log(`${obj01}` +' ===  '+ `${obj02}`+" => "+(obj01===obj02));

console.log(`${obj01}` +' !=  '+ `${obj02}`+" => "+(obj01!=obj02));
console.log(`${obj01}` +' !==  '+ `${obj02}`+" => "+(obj01!==obj02));

let a = { name: 'Dionysia', age: 29};
let b = {name: 'Dionysia', age:29};

console.log(a === b); // false
console.log(a == b); // false

/*
Both a and b are seemingly the same, yet the objects are not equal when I use === or ==.
The difference between primitive and non-primitive data types is that:
    primitive data types are compared by value.
    non-primitive data types are compared by reference.
Both objects have identical keys and values, but the result was false because they are different instances.
*/

a = { name: 'Dionysia', age: 29};
b = a;
console.log(a === b); // true

/*
In the example above, thanks to the line let b = a;, both variables have the same reference and point to the same object instance, so the result is true.
*/

/*
The JSON.stringify() function converts objects into equivalent JSON strings. 
You can then use any of the comparison operators to compare the strings.

*/
a = { name: 'Dionysia', age: 29};
b = { name: 'Dionysia', age: 29};

console.log(JSON.stringify(a) === JSON.stringify(b)); // true
/*
The JSON.stringify() function converted both objects into JSON strings,
 and since both a and b have the same properties and values, the result is true.

But JSON.stringify() isn't always the best solution for comparing objects by value since it has limitations.
First of all, when using JSON.stringify(), the order of the keys matters.
Look at what happens when the keys are in a different order:
*/

a = { age: 29, name: 'Dionysia'};
b = { name: 'Dionysia', age: 29};

console.log(JSON.stringify(a) === JSON.stringify(b)); //false
// JSON.stringify() stringifies the object as it is, so the order of the keys is important. If they are not in the same order, the result will be false.

/* There is also an additional limitation: JSON doesn't represent all types.
Look at what happens when the value of one key is undefined: */

a = { name: 'Dionysia'};
b = { name: 'Dionysia', age: undefined};
console.log(JSON.stringify(a) === JSON.stringify(b)); //true
//In the example above, the result is unexpected. 
//The result should have been false but returned as true because JSON ignores keys whose values are undefined


// Lodash _.isEqual()
/*
An elegant and sophisticated solution for comparing objects by their value is to use the well-tested JavaScript library Lodash and its _.isEqual() method.
*/

a = { age: 29, name: 'Dionysia'};
b = { name: 'Dionysia', age: 29};

const comp = load.isEqual(a, b);
console.log(' _.isEqual(a, b) = '+comp);


console.log(Object.is(a,b)); // False

// https://dmitripavlutin.com/value-vs-reference-javascript/