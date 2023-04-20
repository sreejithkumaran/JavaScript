// Anonymous functions
// An Anonymous function is a function without name.

// Sameple01
let show = function(){
    console.log("Anonymous function")
}

show();

/*In this example, the anonymous function has no name between the function keyword and parentheses ().
    Because we need to call the anonymous function later, we assign the anonymous function to the show variable. */

let add = function(a,b){
    return a+b;
}

let sum = add(10,20);
console.log(sum);

/* Immediately invoked function execution
    If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function
*/
let person = {
    firstName : 'john',
    lastName : 'doe'
};

let generateEmail = function(object){
    return object.firstName + "."+ object.lastName+"@e.com";
}

let email01 = generateEmail(person);
console.log(email01);

(function () {
    console.log(person.firstName+" "+person.lastName);
})(person);

/*
 After defining the function, we can see the trailing parenthesis () followed by the terminator (;) that are used for invoking the defined function as shown below:
*/
(function() {  
    console.log('Hello');  
})();  