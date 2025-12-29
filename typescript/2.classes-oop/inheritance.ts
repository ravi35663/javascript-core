/*
==> Inheritance and Extending Classes in TypeScript:
    ->  Inheritance is a key feature in object-oriented programming, where a class 
        (child or subclass) inherits properties and methods from another class 
        (parent or superclass). In TypeScript, this is done using the 'extends' keyword.
    
    => Benefits of Inheritance:
        1) Code reuse: 
            Shared functionality can be defined once in the parent class and reused in child classes.
        2) Hierarchical relationships: 
            Helps create a structured class hierarchy.
*/

class Parent{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    greet():string{
        return `Hello my name is: ${this.name}`;
    }
}

class Child extends Parent{
    age:number;
    constructor(name:string,age:number){
        super(name); // Calls the parent constructor to initialize 'name'
        this.age = age;
    }

    // Method specific to Child class
    introduce(): string{
        return `${this.greet()} and I am ${this.age} years old.`
    }
}

const john = new Child('John',25);
john.introduce();

/*
==> Key concepts to remember:
    1)  extends keyword used to inherit parent class
    2)  you can override the methods of parent class by defining the same methods in child class
    3)  super() Calls the parent class’s constructor. It is necessary when initializing properties of 
        the parent class in the child class constructor. 
*/

/*
    Example of Method Overriding:
*/

class Animal{
    sound():string{
        return 'some generic animal sound'
    }
}

class Dog extends Animal{
    sound():string{
        return 'bark'
    }
}

const dog = new Dog();
dog.sound() // bark

/*
==> Key Points to know:
    1) Inheritance allows a class to use methods and properties of another class, making code reusable.
    2) The super() function is required to call the constructor of the parent class.
    3) Methods from the parent class can be overridden to provide specific behavior in the child class.
*/