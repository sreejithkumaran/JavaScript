class Bottle{
    _waterLevel = 0;

/*
    _setWaterLevel(value){
        this._waterLevel = value;
    }

    _getWaterLevel(){
        return this._waterLevel;
    }
*/ 

    
    set setWaterLevel(value){
        this._waterLevel = value;
    }

    get getWaterLevel(){
        return this._waterLevel;
    }
    

}

let newbottle = new Bottle();

console.log(newbottle.getWaterLevel);  //0
newbottle.setWaterLevel = 1200;
console.log(newbottle.getWaterLevel); //1500
// to access getter and setters  :  newbottle.getWaterLevel , newbottle.setWaterLevel = 1500;


/*
//newbottle.setWaterLevel(1000); // TypeError: newbottle.setWaterLevel is not a function
newbottle._setWaterLevel(1000);
console.log(newbottle._getWaterLevel());  //1000
//newbottle.#waterLevel = 1500;  // Cannot directly access the private variable
*/