class Bottle {
    #waterLevel = 0;

    #setWaterLevel(value){
        this.#waterLevel = value;
    }

    #getWaterLevel(){
        console.log(`Water level is ${this.#waterLevel}`);
    }
}

class Mitlon extends Bottle{
    display(){
        console.log('I am Milton Bottle');
    }
}

let milton = new Mitlon();
console.log(milton.getWaterLevel);  // undefined
milton.setWaterLevel = 1500;
console.log(milton.getWaterLevel);  // undefined

/*
milton.#getWaterLevel();  // Private field '#getWaterLevel' must be declared in an enclosing class
milton.#setWaterLevel = 1500;
*/