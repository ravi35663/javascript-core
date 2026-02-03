/* ===================== CLASSES WITH INTERFACES (TypeScript) =====================
===> Class with Single Interface:
    - An interface defines a contract (properties + method signatures)
    - A class that implements an interface must implement all its members
    - Interfaces contain no implementation, only structure
*/

// Defining an interface
interface AnimalInterface {
    name: string;
    age: number;

    // Method signature (no implementation)
    makeSound(): void;
}

// Class implementing the interface
class DogClass implements AnimalInterface {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Mandatory implementation of interface method
    makeSound(): void {
        console.log("Bark!");
    }
}

// Creating an instance
const myDog = new DogClass("Buddy", 3);
console.log(myDog.name); // Buddy
myDog.makeSound();      // Bark!

/* ===================== CLASS WITH MULTIPLE INTERFACES =====================
    - TypeScript allows a class to implement multiple interfaces
    - This helps combine different behaviors into one class
*/

// Interface for flying behavior
interface CanFly {
    fly(): void;
}

// Interface for swimming behavior
interface CanSwim {
    swim(): void;
}

// Class implementing multiple interfaces
class Bird implements CanFly, CanSwim {
    fly(): void {
        console.log("Bird can fly");
    }

    swim(): void {
        console.log("Bird cannot swim");
    }
}

const b1 = new Bird();
b1.fly();   // Bird can fly
b1.swim();  // Bird cannot swim

/* ===================== KEY BENEFITS =====================
1) Separation of Concerns
   - Different behaviors are defined in separate interfaces

2) Flexibility
   - A class can implement multiple interfaces

3) Clean Design
   - Promotes loose coupling and better maintainability
*/
