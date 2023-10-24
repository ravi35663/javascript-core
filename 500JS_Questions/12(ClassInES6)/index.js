//What are classes in ES6
/**
 * In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s 
 * existing prototype-based inheritance. For example, the prototype based 
 * inheritance written in function expression as below,
*/
// This is used in earlier javascript (Before ES6)
function Bike(model,color){
    this.model = model;
    this.color = color;
}

Bike.prototype.getInfo = function (){
    return this.model+" bike has "+this.color+" color";
}

// Now in ES6 it described as
class Bike2{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
    getInfo(){
        return this.model+" bike has "+this.color+" color";
    }
}

//What is a constructor method
/*
    The constructor method is a special method for creating and initializing an object created within a class. 
    If you do not specify a constructor method, a default constructor is used. 
    The example usage of constructor would be as below,
*/

class Employee{
    constructor(name){
        this.name = name;
    }
}
const emp = new Employee("Ravi");
console.log("Name is ",emp.name) // Ravi

//What happens if you write constructor more than once in a class
/*
    The "constructor" in a class is a special method and it should be defined only once in a class. 
    i.e, If you write a constructor method more than once in a class it will throw a SyntaxError error.

    class Employee {
        constructor() {
            this.name = "John";
        }
        constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
            this.age = 30;
        }
    }
    var employeeObject = new Employee();
    console.log(employeeObject.name);
*/

//How do you call the constructor of a parent class
/*
    You can use the super keyword to call the constructor of a parent class. Remember that super() must be 
    called before using 'this' reference. Otherwise it will cause a reference error. 
    Let's the usage of it,
*/

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    constructor(name,age,roll_no){
        super(name,age);
        this.roll_no  = roll_no;
    }
}

const student = new Student("Sunny",20,1); 
console.log(student.age,student.name,student.roll_no); // 20 Sunny 1

