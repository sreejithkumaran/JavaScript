class Applicant{
    constructor(f_name,l_name,_age){
        this.firstName = f_name;
        this.lastName = l_name;
        this.age = _age;
    }

    get getApplicantFirstName(){
        return this.firstName;
    }

    get getApplicantLastName(){
        return this.lastName;
    }

    get getApplicantAge(){
        return this.age;
    }

    set setApplicantFirstName(_firstName){
        this.firstName = _firstName;
    }

    set setApplicantLastName(_lastName){
        this.lastName = _lastName;
    }

    set setApplicantAge(_age){
        this.age = _age;
    }

}

class Employee extends Applicant{
  constructor(firstName, lastName, age,  _id, _department, _shift){
    super(firstName,lastName,age);
    this.id = _id;
    this.department = _department;
    this.shift = _shift;
  }
   
  get getEmployeeId(){
    return this.id;
  }

  get getEmployeeDepartment(){
    return this.department;
  }

  get getEmployeeShift(){
    return this.shift;
  }

  set setEmployeeId(eId){
    this.id = eid;
  }

  set setEmployeeDepartment(edept){
    this.department = edept;
  }

  set setEmployeeShift(eShift){
    this.shift = eShift;
  }
}

const emp01 = new Employee('joe','samuel',27,1,'IT','Regular');
console.log(emp01.getApplicantFirstName); // inherited
console.log(emp01.getApplicantLastName);  // inherited
console.log(emp01.getApplicantAge);  // inherited
console.log(emp01.getEmployeeId);
console.log(emp01.getEmployeeShift);
console.log(emp01.getEmployeeDepartment);

emp01.setApplicantAge = 25;
emp01.setEmployeeShift='Night'
console.log(emp01.getApplicantAge);
console.log(emp01.getEmployeeShift);