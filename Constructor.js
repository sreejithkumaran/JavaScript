function Car(_name, _compay, _color){
    this.name = _name;
    this.company = _compay;
    this.color = _color;
    this.drive = function(){
        console.log(`I have ${this.name} car , manufactured by ${this.company} and color is ${this.color}`);
    }
}

let car1 = new Car('A4','Audi','White');
let car2 = new Car('B4','BMW','Red');

car1.drive();