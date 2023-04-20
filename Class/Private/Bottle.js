class Bottle{
    #waterLevel = 0;

    /*
    setWaterLevel(value){
        this.#waterLevel = value;
    }

    getWaterLevel(){
        return this.#waterLevel;
    }
    */

    set setWaterLevel(value){
        this.#waterLevel = value;
    }

    get getWaterLevel(){
        return this.#waterLevel;
    }

}

let newbottle = new Bottle();
console.log(newbottle.getWaterLevel);  //0
newbottle.setWaterLevel = 1500;
console.log(newbottle.getWaterLevel); //1500
// to access getter and setters  :  newbottle.getWaterLevel , newbottle.setWaterLevel = 1500;

/*
newbottle.setWaterLevel(1000);
console.log(newbottle.getWaterLevel());
//newbottle.#waterLevel = 1500;  // Cannot directly access the private variable
*/