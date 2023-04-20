class Circle {
  #radius = 0;  // private variable
  static #count = 0;   // static variables

  constructor(radius) {
    this.radius = radius;
    Circle.#count++;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  
  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value;
    } else {
      throw 'The radius must be a positive number';
    }
  }
  get radius() {
    return this.#radius;
  }
  static hasRadius(circle) {
    return #radius in circle;
  }
  static getCount() {
    return Circle.#count;
  }
}

let circles = [new Circle(10), new Circle(20), new Circle(30)];

console.log(Circle.getCount());

/*
    Prefix the field name with # sign to make it private.
    Private fields are accessible only inside the class, not from outside of the class or subclasses.
    Use the in operator to check if an object has a private field.
*/