/*
The call() method is a predefined JavaScript method. 
It can be used to invoke (call) a method with an owner object as an argument (parameter). 
With call() , an object can use a method belonging to another object.

Call ( )

The call method sets the this inside the function and immediately executes that function.

The difference between call() and bind() is that 
the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, 
while the bind() creates a copy of that function and sets the this keyword

function.call(thisArg, arg1, agr2, ...)

*/

let person1 = {
    firstName : 'joe',
    lastName : 'danel',
    city : 'new york',
    printDetails : function(){
        console.log(`${this.firstName} ${this.lastName} ${this.city}`);
    }
}

let person2 = {
    firstName : 'susan',
    lastName : 'thomas',
    city : 'paris',
    printDetails : function(){
        console.log(`${this.firstName} ${this.lastName} ${this.city}`);
    }
}


person1.printDetails();
person2.printDetails();





