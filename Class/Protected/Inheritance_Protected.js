class Bottle {
    _waterLevel = 0;

    _setWaterLevel(value){
        this._waterLevel = value;
    }

    _getWaterLevel(){
        console.log(`Water level is ${this._waterLevel}`);
    }
}

class Mitlon extends Bottle{
    display(){
        console.log('I am Milton Bottle');
    }
}

let milton = new Mitlon();

/*
console.log(milton._getWaterLevel);  // [Function: _getWaterLevel]
milton._setWaterLevel = 1500;
console.log(milton._getWaterLevel);  // [Function: _getWaterLevel]
*/

console.log(milton._getWaterLevel());  // [Function: _getWaterLevel]
milton.setWaterLevel = 1500;
console.log(milton._getWaterLevel());  // [Function: _getWaterLevel]

/*
milton.#getWaterLevel();  // Private field '#getWaterLevel' must be declared in an enclosing class
milton.#setWaterLevel = 1500;
*/