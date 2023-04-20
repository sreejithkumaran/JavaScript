
//  Private instance method example
class Person{
  #firstName;
  #lastName;

  constructor(firstName, lastName){
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get get_FirstName(){
    return this.#firstName;
  }

  get get_LastName(){
    return this.#lastName;
  }

  generateEmailID(firstName,lastName){
    return this.#firstName + "." +this.#lastName+"@email.com";
  }

}

let person = new Person('Alice', 'Dew');
console.log(person.generateEmailID());   
console.log('First Name : '+get_FirstName());
console.log('Last Name : '+get_LastName());