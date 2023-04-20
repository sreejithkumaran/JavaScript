// Object
const student = {
    name : 'Adam',
    id : 123,
};

console.log(typeof(student)); // Object
console.log(student);  // { name: 'Adam', id: 123 }
console.log(student.name); // Adam
console.log(student.id); // 123

// Nested Object

const registeredStudent = {
    firstName : 'John',
    lastName : 'david',
    id : 501,
    marks: {
        marks01 : 80,
        marks02 : 90,
        marks03 : 78,
        total: function(){
            let total = this.marks01+this.marks02+this.marks03;
            return total;
        }
    },
    generateEmail : function(){
      console.log(this.firstName+this.lastName+"@e.com");
    }
};

console.log("Marks "+registeredStudent.marks.marks01+" "+registeredStudent.marks.marks02+" "+registeredStudent.marks.marks03);
console.log(registeredStudent.generateEmail());
console.log(registeredStudent.marks.total()); 
console.log(registeredStudent.marks.total); // [Function: total]

/*---Construcor Functions---*/
function Person(){
    this.name = 'john',
    this.age = 22
}

// create an Object
const p1 = new Person();
console.log(p1.name);
console.log(p1.age);

// Constructor Function Parameters
function Person (person_Name, person_Age, person_Gender){
    this.name = person_Name;
    this.age = person_Age;
    this.gender = person_Gender;
}

const person1 = new Person('John', 23, 'male');
const person2 = new Person('lily', 25, 'female');
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);

console.log(person1);

// Changing the attribute value
person1.name ='John Sena';

// Adding a new attribue
person1.role = 'tutor';
console.log(person1);
console.log(person2);

// Adding method
person1.getName = function(){
    console.log(person1.name)
}

console.log(person1);
console.log(person1.getName);
console.log("**"+person1.getName());

// JavaScript Object Prototype
//In JavaScript, every function and object has a property named prototype by default
function Employee (emp_id, emp_firstName, emp_lastName, emp_age) {
    this.id = emp_id,
    this.firstName = emp_firstName,
    this.lastName = emp_lastName,
    this.age = emp_age
}

// creating objects
let employee1 = new Employee(1001,'Jay','Patel',23);
let employee2 = new Employee(1002,'Joe','Matt',21);
let employee3 = new Employee(1003,'Json','Ray',25);

console.log(employee1);
console.log(employee2);
console.log(employee3);

// adding new property to constructor function
Employee.prototype.companyCode = 'ELLUCIAN';

console.log(employee1.companyCode);  // ELLUCIAN
console.log(employee2.companyCode);  // ELLUCIAN
console.log(employee3.companyCode);  // ELLUCIAN

console.log(employee1);  // { id: 1001, firstName: 'Jay', lastName: 'Patel', age: 23 }
console.log(employee2);  // { id: 1002, firstName: 'Joe', lastName: 'Matt', age: 21 }
console.log(employee3);  // { id: 1003, firstName: 'Json', lastName: 'Ray', age: 25 }

// JavaScript Built-in Constructors
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

console.log("Employee Protoype is " +Employee.prototype);  // [object Object]


// Changing Prototype
/*
If a prototype value is changed, then all the new objects will have the changed property value. 
All the previously created objects will have the previous value
*/
function Applicant() {
    this.name = 'John'
}

// add a property
Applicant.prototype.age = 20;

// creating an object
const applicant1 = new Applicant();

console.log(applicant1.age); // 20

// changing the property value of prototype
Applicant.prototype = { age: 50 }

// creating new object
const applicant2 = new Applicant();

console.log(applicant2.age); // 50
console.log(applicant1.age); // 20

/*
JavaScript Prototype Chaining
If an object tries to access the same property that is in the constructor function and the prototype object, 
the object takes the property from the constructor function
*/

function Country() {
    this.name = 'India'
}

// adding property 
Country.prototype.name = 'Bharat';
Country.prototype.code = 'IN';
Country.prototype.currency = 'Rupee';

const country = new Country();

console.log(country.name); // India
console.log(country.code); // IN
console.log(country.currency); // Rupee

/*************** JavaScript Getter and Setter ***************/ 
const student01 = {
    
    // data property
    firstName : 'Joe',

    // accessor property
    get getName(){
        return this.firstName;
    },

    // accessor property
    set changeName(new_Name){
        this.firstName = new_Name;
    }
};

// accessing data property
console.log(student01.firstName); // Monica

// accessing getter methods
console.log(student01.getName); // Monica

/* trying to access as a method
console.log(student.getName()); // error -student01  */

// change(set) object property using a setter
student01.changeName = 'Sarah';

console.log(student01.firstName); // Sarah

/* JavaScript Object.defineProperty() 
    Object.defineProperty() method to add getters and setters
    Object.defineProperty(obj, prop, descriptor)
    obj -> Object Name
    prop -> Name of Property
    descriptor -> describes the property
*/

const student02 = {
    firstName : 'Joe'
}

// getting propery
Object.defineProperty(student02, "getFirstName", {
    get : function(){
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student02,"setName", {
    set : function(value){
        this.firstName = value;
    }
});

console.log("First Name = "+student02.firstName); // Joe

// changing the property value
student02.setName = 'Sarah';

console.log("Updated First Name = "+student02.firstName); // Sarah

