// Maps

let userRoles = new Map();

console.log(typeof(userRoles));  // object
console.log(userRoles instanceof Map); // true

//Add elements to Map
userRoles.set('john','admin');
userRoles.set('lily', 'editor').set('peter', 'subscriber');

console.log(userRoles);

// Initialize Map with iterable Object

let httpStatusCode = new Map([
    [200,'Ok'], [201,'Created'], [400, 'Bad Request'], [401, 'Unauthorized']
]);

console.log(httpStatusCode);

// Get an element
console.log(userRoles.get('peter'));
console.log(userRoles.get('sam'));  // undefined

//size
console.log(userRoles.size);

// Iterate over map Keys
for(const user_Key of userRoles.keys()){
    console.log(user_Key);
}

// Iterate over map Values
for(const user_Values of userRoles.values()){
    console.log(user_Values);
}

// Iterate over map elements
for(const user_details of userRoles.entries()){
    console.log(user_details[0]+" - - "+user_details[1]);
}

// ForEach
httpStatusCode.forEach((code, value) => console.log(code +" => "+value));

// Delete an Element by Key
//userRoles.delete('value');


// Delete all Element in the Map
//userRoles.clear;
/*
The JavaScript ES6 has introduced two new data structures, i.e Map and WeakMap.

Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key.
*/

class Student{
    constructor(_id, _fname, _lname, _gender, _emailId, _contactNo){
        this.id = _id,
        this.basicDetail = {
            firstName : _fname,
            lastName : _lname,
            gender : _gender
        },
        this.contactDetails = {
            emailId : _emailId,
            contactNo : _contactNo
        }
    };
}

const student01 = new Student(1224, 'Jay', 'Shah', 'M', 'jay.shah@e.com', 9898989000);
console.log(student01.id);
console.log(student01.basicDetail.firstName);
console.log(student01.contactDetails.emailId);

const student02 = new Student(1225, 'Mathew', 'David', 'M', 'mathew.david@e.com', 9898989111);
const student03 = new Student(1226, 'lily', 'Joe', 'F', 'lily.joe@e.com', 9898982222);
const student04 = new Student(1226, 'Smitha', 'Jain', 'F', 'smitha.jain@e.com', 8888989111);

let studentDetails = new Map();;
studentDetails.set(student01.id,{details: student01.basicDetail, contact: student01.contactDetails});
studentDetails.set(student02.id,{details: student02.basicDetail, contact: student02.contactDetails});
studentDetails.set(student03.id,{details: student03.basicDetail, contact: student03.contactDetails});
console.log(studentDetails);

// Size
console.log(' Sizes of Map : '+studentDetails.size);

// Access Map Elements
console.log(studentDetails.get(1225));

// Check Map Elements
console.log(studentDetails.has(1225));

// Removing Element
console.log(studentDetails.delete(1225));
console.log("Map has key 1225 "+ studentDetails.has(1225));

// Iterate though map
// for of
console.log("---------- for of ----------");
for(let [key,value] of studentDetails){
    console.log(key+" - "+value);
}

// forEach
console.log("---------- forEach ----------");
studentDetails.forEach(function(key,value){
    console.log(key+" : "+value)
})

console.log("---------- forEach ----------");
studentDetails.forEach(function(value, key){
    console.log(key+" : "+value)
})

// Iterate Over Map Keys
console.log("---------- Iterate Over Map Keys ----------");
for(let key of studentDetails.keys()){
    console.log(key);
    console.log(key.basicDetail);
}

// Iterate Over Map Values
console.log("---------- Iterate Over Map Values ----------");
for(let value of studentDetails.values()){
    console.log(value);
    //console.log(value.get(details.get(firstName)));
    //console.log(value.get(contact));
}

// Get Key/Values of Map
console.log("---------- Get Key/Values of Map ----------");
for (let element of studentDetails.entries()) {
    console.log(`${element[0]}: ${element[1]}`);
    //console.log(`${element[0]}: ${element[1].get("details")}`);
}

//The clear() method removes all key/value pairs from a Map object.
studentDetails.clear();  // [object Map]
console.log("Map after clear () "+ studentDetails);


// JavaScript Map vs Object - https://www.programiz.com/javascript/map-weakmap
// JavaScript WeakMap - The WeakMap is similar to a Map. However, WeakMap can only contain objects as ke