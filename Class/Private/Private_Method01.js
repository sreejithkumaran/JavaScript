
//  Private instance method example
class Person{
  #firstName;
  #lastName;

  constructor(firstName, lastName){
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  #firstLast(){
    return `${this.#firstName} ${this.#lastName}`;
  }

  #LastFirst(){
    return `${this.#lastName} ${this.#firstName} `;
  }

  getFullName(format = true){
    return format ? this.#firstLast() : this.#LastFirst();
  }

}

let person = new Person('Alice', 'Dew');
console.log(person.getFullName());   // Alice Dew

console.log(person.getFullName()); 