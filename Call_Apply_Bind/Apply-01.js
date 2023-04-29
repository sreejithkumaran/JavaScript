/*
Apply ( )

The apply() method is similar to call(). The difference is that the apply() method accepts an array of arguments instead of comma separated values.
Syntax:

function.apply(thisArg, [argumentsArr])
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


printDetails.apply(person1,['USA','Dollar']); // joe danel new york
printDetails.apply(person2, ['France','Euro']); // susan thomas paris





