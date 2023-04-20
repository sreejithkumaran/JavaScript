// https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/

// 1. Using parseInt() 
let myStr = '129';
console.log(typeof myStr); // String

let myNo = parseInt(myStr);
console.log(typeof myNo);  // Number

// 2. Using Number() 
myStr = '129';
console.log(typeof myStr); // String

myNo = Number(myStr);
console.log(typeof myNo);  // Number

// 3. Using Unary Operator (+) 
const x = '25';
console.log(typeof x);  // String

const y = '-20';
console.log(typeof y);  // String

myNo = +x;
console.log(typeof myNo); // Number

myNo = +y;
console.log(typeof myNo);  // Number

// 4. Using parseFloat() 
let a = '10';
let b = parseFloat(a);
console.log(typeof b); // Number


// toString()
var num = 24;
var str = num.toString();

console.log(num+" "+typeof num); // number
console.log(str+" "+typeof str); // string

// you can convert an array type into its string representation
var arr = [ "Nathan", "Jack" ];
var str = arr.toString();

console.log(str); // "Nathan,Jack"

// Floating number

a = 1.1;
b = 1.3;
let sum = a+b;
console.log(sum+' '+typeof sum);  // 2.4000000000000004

let bool = (a+b) === 2.4 ? true : false;  // false
console.log(`${a}`+" + "+`${b}`+" === "+`${sum}` +" || "+bool);

let d = (1.1 + 1.3).toFixed(2);
console.log('(1.1 + 1.3).toFixed(2) '+d+" || "+typeof d);

bool = ((1.1 + 1.3).toFixed(2) === 2.4) ? true : false;
(' (1.1 + 1.3).toFixed(2) === 2.4) ' +console.log(bool)); // 2.40 || string


d = +(1.1 + 1.3).toFixed(2);
console.log('+(1.1 + 1.3).toFixed(2) '+d+" || "+typeof d);

bool = (+(1.1 + 1.3).toFixed(2) === 2.4) ? true : false;
(' +(1.1 + 1.3).toFixed(2) === 2.4) ' +console.log(bool));


// Equality Operator
let a1 = 10;
let a2 = -10;
let a3 = '10';

console.log(' Loose Comparsions == ');
console.log(`${a1}` +' ==  '+ `${a1}`+" => "+(+a1==a1));
console.log(`${a1}` +' ==  '+ `${a2}`+" => "+(+a1==a2));
console.log(`${a1}` +' ==  '+ `${a3}`+" => "+(+a1==a3));

console.log(' Strict Comparsions === ');
console.log(`${a1}` +' ===  '+ `${a1}`+" => "+(+a1===a1));
console.log(`${a1}` +' ===  '+ `${a2}`+" => "+(+a1===a2));
console.log(`${a1}` +' ===  '+ `${a3}`+" => "+(+a1===a3));