function Employee(fName, lName, eRole) {
    this.firstName = fName;
    this.lastName = lName;
    this.role = eRole;
}

var empObj1 = new Employee('Adam','David','Dev');
empObj1.salary = 30000;
console.log('empObj1 Salary : '+empObj1.salary); // 30000

var empObj2 = new Employee('Susan','Alex','QA');
console.log('empObj2 Salary : '+empObj2.salary); // undefined

// Add a prototype gender to Employee
Employee.prototype.salary = 100000;
console.log('empObj1 Salary after prototype.salary :  '+ empObj1.salary); // 18
console.log('empObj2 Salary after prototype.salary :  '+ empObj2.salary);  // 18

Employee.prototype.designation = 'Contract';
console.log('empObj1 designation after prototype.designation : '+empObj1.designation); // 22
console.log('empObj2 designation after prototype.designation : '+empObj2.designation); // 22

// Add function info to Employee
Employee.prototype.empInfo =  function () {
    console.log(`${this.firstName} ${this.lastName} ${this.role}`);
};

/*
console.log('Employee 1 : '+empObj1.empInfo()); // 22
console.log('Employee 2 : '+empObj2.empInfo());  // 18
*/
Employee.prototype.age = 25;

let empObj3 = new Employee('David','Villa','DevOps');
console.log(empObj1.age); // 25
console.log(empObj1.age);  // 25
console.log('empObj3 age : '+empObj3.age);  // 25
console.log('empObj3 salary : '+empObj3.salary); // 100000
console.log('empObj3 designation : '+empObj3.designation); // 100000

let empObj4 = new Employee('Sreejith','Kumaran','SDET');
Employee.prototype.age = 30;
Employee.prototype.designation = 'Full Time';
Employee.prototype.salary = 1500000;

console.log('--- After prototype update -----');

console.log('empObj4 age : '+empObj4.age);  
console.log('empObj4 salary : '+empObj4.salary); 
console.log('empObj4 designation : '+empObj4.designation);

console.log('empObj1 age : '+empObj1.age);  
console.log('empObj1 salary : '+empObj1.salary); 
console.log('empObj1 designation : '+empObj1.designation);

console.log('empObj2 age : '+empObj2.age);  
console.log('empObj2 salary : '+empObj2.salary); 
console.log('empObj2 designation : '+empObj2.designation);

console.log('empObj3 age : '+empObj3.age);  
console.log('empObj3 salary : '+empObj3.salary); 
console.log('empObj3 designation : '+empObj3.designation);