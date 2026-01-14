/* ===================== OBJECT ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT ===================== */
/*
- Class is a blueprint for creating objects
- Constructor runs automatically when object is created
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // Called whenever a new object is created from this class

    getPersonDetails() {
        return { name: this.name, age: this.age };
    }
}
const person = new Person("Sumit", 26);
console.log(person.getPersonDetails());

/* ===================== CLASSES & STATIC METHODS =====================
- Static methods belong to the class, not to objects
*/
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static countUser() {
        console.log("In count user function");
    } // Common for all objects of this class

    register() {
        console.log(
            "Register function called and user name is:",
            this.name,
            "and age is:",
            this.age
        );
    }
}

const bob = new User("bob", 25);
User.countUser();   // Static method call
bob.register();     // Instance method call


/* ===================== INHERITANCE =====================
- Child class inherits properties & methods of parent class
*/

class Member extends User { // Member → child, User → parent
    constructor(name, age, email) {
        super(name, age); // Calls parent constructor
        this.email = email;
    }

    getEmail() {
        console.log(this.email);
    }
}
const mike = new Member("Mike", 35, "mike@getnada.com");
mike.getEmail();


/* ===================== NOTES =====================
- JavaScript supports single inheritance only
- Multiple inheritance is achieved using inheritance chains or composition
*/


/* ===================== MULTI-LEVEL INHERITANCE ===================== */
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getPersonInfo() {
        console.log("Person info is:", this);
    }
}

class Doctor extends Person { // Inherits Person
    constructor(name, age, gender, specialization) {
        super(name, age, gender);
        this.specialization = specialization;
    }
}

class SpecialDoctor extends Doctor { // Inherits Doctor
    constructor(name, age, gender, specialization, type) {
        super(name, age, gender, specialization);
        this.type = type;
    }

    getDoctorType() {
        console.log("Doctor type is:", this.type);
    }
}

const specialDoctor = new SpecialDoctor(
    "Sumit",
    25,
    "Male",
    "fitness and diet",
    "human"
);

specialDoctor.getDoctorType();