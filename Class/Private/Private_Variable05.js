class Circle {
  #radius = 0;
  constructor(radius) {
    this.radius = radius;
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
    return #radius in circle;    // fieldName in objectName
  }
}

let circle = new Circle(10);

console.log(Circle.hasRadius(circle));

/*
The in operator: check private fields exist

To check if an object has a private field inside a class, you use the in operator:

fieldName in objectName
*/
