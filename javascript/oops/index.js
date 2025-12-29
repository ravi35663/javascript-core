/*
==> Object Oriented Programming in javascript:
*/
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age; 
    } // Called whenever a new object is being created using this class.

    getPersonDetails(){
        return {name:this.name,age:this.age};
    }
}

const person = new Person("Sumit",26);
console.log(person.getPersonDetails());

// Classes and Inheritance :- 

class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static countUser(){
        console.log("In count user function")
    } // Static function is a common function for all objects of a particular class

    register(){
        console.log("Register function called and user name is: ",this.name," and age is: ",this.age);
    }
}

const bob = new User("bob",25);
User.countUser(); // Static function is called
bob.register();

// Inheritance:
class Member extends User{ // Here Member is a child and User is parent class
    constructor(name,age,email){
        super(name,age); // addition of User class 
        this.email = email;
    }
    getEmail(){
        console.log(this.email);
    }
}

let mike = new Member("Mike",35,"mike@getnada.com")
mike.getEmail();
/*
==> Note: 
    ->  Classes in javascript only extend one class
    ->  To Achieve multiple inheritance use below technique.
*/ 

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getPersonInfo(){
        console.log("Person info is: ",this);
    }
}

// Inheritance:
class Doctor extends Person{
    constructor(name,age,gender,specialization){
        super(name,age,gender);
        this.specialization = specialization;
    }
}

// Inheritance:
class SpecialDoctor extends Doctor{
    constructor(name,age,gender,specialization,type){
        super(name,age,gender,specialization);
        this.type = type;
    }

    getDoctorType(){
        console.log("Doctor type is: ",this.type);
    }
}
const specialDoctor = new SpecialDoctor("sumit",25,"Male","fitness and diet","human");
specialDoctor.getDoctorType()
