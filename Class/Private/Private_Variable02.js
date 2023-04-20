
class Circle{
    #radius; // private variable

    constructor(value){
        this.#radius = value;
    }

    get get_radius(){
        return this.#radius;
    }

    set set_Radius(value){
        if(value === 'number' && value > 0){
            this.#radius = value;
        }else{
            throw ' Radius must be POSITIVE NUMBER'
        }
    }

    get area(){
        return Math.PI * Math.pow(this.#radius, 2);
    }
}

let circle = new Circle(10);
let radius = circle.get_radius;
console.log('Radius is : '+radius);
let areaOfCircle = circle.area;
console.log('Area of Circle : '+areaOfCircle.toFixed(2)); // 314.16
circle.set_Radius(5);

radius = circle.get_radius;
console.log('Radius is : '+radius);
areaOfCircle = circle.area;
console.log('Area of Circle : '+areaOfCircle.toFixed(2));

