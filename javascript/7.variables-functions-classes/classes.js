/*
=> Classes:
  - In ES6, JavaScript classes are syntactic sugar over JavaScript’s prototype-based 
    inheritance. They provide a cleaner and more readable way to create objects and 
    handle inheritance.
*/
// Prototype-based inheritance (Before ES6)
function Bike(model, color) {
    this.model = model;
    this.color = color;
}
Bike.prototype.getInfo = function () {
    return this.model + " bike has " + this.color + " color";
};
const bike = new Bike();
bike.getInfo();


// ES6 Class syntax
/*
 The same prototype-based behavior can be written using ES6 class syntax,
 which is easier to read and maintain.
*/
class Bike2 {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    getInfo() {
        return this.model + " bike has " + this.color + " color";
    }
}
// What is a constructor method
/*
 The constructor is a special method in a class that runs automatically
 when a new object is created. It is used to initialize object properties.
 If no constructor is defined, JavaScript provides a default one.
*/
class Employee {
    constructor(name) {
        this.name = name;
    }
}
const emp = new Employee("Ravi");
console.log("Name is ", emp.name); // Ravi

// Multiple constructors in a class
/*
 A class can have only ONE constructor.
 Defining more than one constructor will throw a SyntaxError.
*/
 /*
 class Employee {
     constructor() {
         this.name = "John";
     }
     constructor() { // ❌ Error
         this.age = 30;
     }
 }
 */

// Calling parent class constructor (super)
/*
 The super keyword is used to call the constructor of the parent class.
 It must be called before using 'this' inside the child class constructor.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, roll_no) {
        super(name, age); // call parent constructor
        this.roll_no = roll_no;
    }
}

const student = new Student("Sunny", 20, 1);
console.log(student.age, student.name, student.roll_no); // 20 Sunny 1
