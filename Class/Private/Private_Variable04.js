class Cylinder extends Circle {
    #height;
    constructor(radius, height) {
      super(radius);
      this.#height = height;
  
      // cannot access the #radius of the Circle class here
    }
  }

  let cylinder = new Cylinder(10,20);

/*
Private fields and subclasses

Private fields are only accessible inside the class where they’re defined. 
Also, they’re not accessible from the subclasses. 
For example, the following defines the Cylinder class that extends the Circle class

If you attempt to access the #radius private field in the Cylinder class, you’ll get a SyntaxError.

*/