/* ===================== INHERITANCE & EXTENDING CLASSES =====================
=> Inheritance:
    -   Inheritance allows a child (subclass) to reuse properties and methods
        of a parent (superclass)
    -   Implemented using the `extends` keyword

=> Benefits of Inheritance:
    1) Code Reuse
        - Common logic written once in parent class

    2) Hierarchical Structure
        - Helps organize related classes clearly
*/

/* ===================== BASIC INHERITANCE EXAMPLE ===================== */
class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): string {
        return `Hello my name is: ${this.name}`;
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name); // Calls parent constructor
        this.age = age;
    }

    // Child-specific method
    introduce(): string {
        // Reuses parent method
        return `${this.greet()} and I am ${this.age} years old.`;
    }
}
const john = new Child("John", 25);
john.introduce();

/* ===================== KEY CONCEPTS =====================
    1) `extends` is used to inherit a parent class
    2) `super()` calls the parent constructor: super() does not require to calls other functions of parent
    3) Child class can add its own methods
*/

/* ===================== METHOD OVERRIDING EXAMPLE ===================== */
class Animal {
    sound(): string {
        return "some generic animal sound";
    }
}

class Dog extends Animal {
    // Overrides parent method
    sound(): string {
        return "bark";
    }
}
const dog = new Dog();
dog.sound(); // bark

/* ===================== IMPORTANT POINTS =====================
    1) Inheritance promotes code reuse
    2) super() is required to initialize parent properties
    3) Parent methods can be overridden for specific behavior
*/