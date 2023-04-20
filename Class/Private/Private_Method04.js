// Example: How to define Private Static Methods in JavaScript

class Employee {
  #name;
  #designation;

  constructor(name, designation){
    this.#name  = Employee.#verifyName(name);
    this.#designation = designation;
  }

  static #verifyName(value){
    if(typeof value === 'string'){
     let str = value.trim();

     if(str.length >= 4){
      return str;
     }
    }else{
      throw ' Entered name must be in characters & should be atleast 4 characters long ';
    }
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

/* Error 
employee = new Employee(123456 , 'SDET');
employee.showInfo();   // No method invocation

employee = new Employee();
*/