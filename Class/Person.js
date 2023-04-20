//Classes are one of the features introduced in the ES6 version of JavaScript.
// Instead of using the function keyword, you use the class keyword for creating JS classes.

class Person{
    // The constructor() method inside a class gets called automatically each time an object is created.
    constructor(f_name,l_name,_age){
        this.firstName = f_name;
        this.lastName = l_name;
        this.age = _age;
    }
}

const person_1 = new Person('john','david',22);
console.log(person_1.firstName);
console.log(person_1.lastName);
console.log(person_1.age);

