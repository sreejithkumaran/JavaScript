
/*
    ES2022 allows you to define private fields for a class. 
    To define a private field, you prefix the field name with the # sign.
    
    First, define the private field #radius in the class body.
    Second, initialize the #radius field in the constructor with an argument.
    Third, calculate the area of the circle by accessing the #radius private field in the getter method.
*/

class Circle{
    #radius; // private variable

    constructor(value){
        this.#radius = value;
    }

    get area(){
        return Math.PI * Math.pow(this.#radius, 2);

    }
}

let circle = new Circle(10);
const areaOfCircle = circle.area;
console.log(areaOfCircle);  // 314.1592653589793
console.log(+areaOfCircle.toFixed(2)); // 314.16

/*
console.log(circle.#radius);
// Property '#radius' is not accessible outside class 'Circle' because it has a private identifier.ts(18013)
*/