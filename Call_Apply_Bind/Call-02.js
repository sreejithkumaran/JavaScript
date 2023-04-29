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

let printDetails = function(country){
    console.log(`${this.firstName} ${this.lastName} ${this.city} ${country}`);
}


printDetails.call(person1,'USA'); // joe danel new york
printDetails.call(person2, 'France'); // susan thomas paris





