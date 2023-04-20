// Example: How to define Private Methods in JavaScript

class Employee {
  #name;
  #designation;

  constructor(name, designation){
    this.#name  = name;
    this.#designation = designation;
  }

  #employeeName(){
    return`${this.#name}`;
  }

  #employeeDesignation(){
    return`${this.#designation}`;
  }

  // public function added in our Employee class which will invoke the private methods
  showInfo(format = true){
    console.log('--- Inside showInfo() ---');
    console.log(this.#employeeName(), this.#employeeDesignation());
  }
  
}

let employee = new Employee('Sreejith', 'SDET');
employee.showInfo();

employee = new Employee(null , 'SDET');
employee.showInfo();   // No method invocation

employee = new Employee();