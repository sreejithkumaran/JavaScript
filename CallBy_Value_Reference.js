// https://dmitripavlutin.com/value-vs-reference-javascript/

// Values vs Reference
/*
JavaScript provides 2 categories of data types: primitives and objects.

The primitives are numbers, booleans, strings, symbols, and special values null and undefined

The simple rule of passing by value is that all primitive values in JavaScript are passed by value. Simple as that.

Passing by value means that every time you assign a value to a variable, a copy of that value is created. Every single time
*/

let a = 1;
let b = a;
b = b + 2;
console.log(a); // 1
console.log(b); // 3

/*
The pass by reference, however, manifests itself differently.

When creating an object you're given a reference to that object. If 2 variables hold the same reference, then changing the object reflects in both variables.
*/
let x = [1];
let y = x;
y.push(2);
console.log(x); // [1, 2]
console.log(y); // [1, 2]
//Note: for simplicity, I say that variables hold references to objects. But strictly saying variables in JavaScript hold values that are references to objects.

const one = 1;
const oneCopy = 1;
console.log(one === oneCopy); // true
console.log(one === 1);       // true
console.log(one === one);     // true

// ar1 and ar2 hold references to different array instance:
const ar1 = [1];
const ar2 = [1];
console.log(ar1 === ar2); // false
console.log(ar1 === [1]);  // false
const ar11 = ar1;
console.log(ar1 === ar11); // true
console.log(ar1 === ar1);  // true