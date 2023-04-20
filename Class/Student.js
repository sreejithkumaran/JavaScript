class Student{

    // The constructor() method inside a class gets called automatically each time an object is created.
    constructor(s_fname, s_lname ,s_id, s_score){
        this.firstName = s_fname;
        this.lastName = s_lname;
        this.id = s_id;
        this.score = s_score;
    }

    get getStudentFirstName(){
        return this.firstName;
    }

    get getStudentLastName(){
        return this.lastName;
    }

    get getStudentId(){
        return this.id;
    }

    get getStudentScore(){
        return this.score;
    }

    set setStudentFirstName(_fname){
        this.firstName = _fname;
    }

    set setStudentLastName(_lname){
        this.lastName = _lname;
    }

    set setStudentId(_id){
        this.id = _id;
    }

    set setScore(_score){
        this.score = _score;
    }
}

console.log(typeof Student)  // function

const student01 = new Student('john','david',1,555);
console.log(student01.getStudentFirstName);
console.log(student01.getStudentLastName);
console.log(student01.getStudentId);
console.log(student01.getStudentScore);
console.log(student01);

student01.setScore = 600;
console.log(student01.getStudentScore);
console.log(student01);

// Class in not Hoisted

