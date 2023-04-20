class Person{
    static name = 'john';
    static height = 160;

    static getUserInfo(){
        console.log(`Name ${this.name} age ${this.height}`);
    }

    static set setUserName(value){
        this.name = value;
    }

    static set setUserHeight(value){
        this.height = value;
    }

    static get getUserName(){
        return this.name;
    }

    static get getUserHeight(){
        return this.height;
    }

}

Person.getUserInfo();

Person.setUserName = 'David';
Person.setUserHeight = 177;

Person.getUserInfo();
