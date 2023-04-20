class Applicant{
    constructor(f_name,l_name,_age){
        this.firstName = f_name;
        this.lastName = l_name;
        this.age = _age;
    }

    get getApplicantFirstName(){
        return this.firstName;
    }

    get getApplicantLastName(){
        return this.lastName;
    }

    get getApplicantAge(){
        return this.age;
    }

    set setApplicantFirstName(_firstName){
        this.firstName = _firstName;
    }

    set setApplicantLastName(_lastName){
        this.lastName = _lastName;
    }

    set setApplicantAge(_age){
        this.age = _age;
    }

}