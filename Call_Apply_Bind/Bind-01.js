/*
Bind( )

The bind method creates a new function and sets the this keyword to the specified object.
Syntax:

function.bind(thisArg, optionalArguments)
*/

let person1 = {
    firstName : 'joe',
    lastName : 'danel',
    city : 'new york',
}

let person2 = {
    firstName : 'susan',
    lastName : 'thomas',
    city : 'paris',
}

let printDetails = function(country,currency){
    console.log(`${this.firstName} ${this.lastName} ${this.city} ${country} ${currency}`);
}


let myFun = printDetails.bind(person1,'USA','Dollar');
console.log(myFun); // [Function: bound printDetails]

myFun(); //joe danel new york USA Dollar





