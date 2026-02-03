/* ===================== ABSTRACT CLASSES & METHODS (TypeScript) =====================
=> Abstract Class:
    - Cannot be instantiated directly
    - Used as a base class
    - Can contain:
        → Abstract methods (no implementation)
        → Concrete methods (with implementation)
    - Enforces a structure for derived classes


=> Abstract Method:
    - Declared without implementation
    - Must be implemented by child classes
    - Acts like a contract for subclasses
*/

/* ===================== BASIC EXAMPLE ===================== */
export abstract class Animal {
    // Abstract method (no implementation)
    abstract sound(): void;

    // Concrete method (implemented)
    move(): void {
        console.log("I can move");
    }
}

export class Dog extends Animal {
    // Mandatory implementation of abstract method
    sound(): void {
        console.log("Bark");
    }
}

const myDog = new Dog();
myDog.sound(); // Bark
myDog.move();  // I can move


/* ===================== KEY POINTS =====================
Abstract Class:
    - Cannot create object directly
    - Can have abstract + concrete methods

Abstract Method:
    - No body in abstract class
    - Must be implemented by subclasses

Concrete Method:
    - Fully implemented in abstract class
    - Inherited by child classes
*/

/* ===================== MULTIPLE ABSTRACT METHODS EXAMPLE ===================== */
abstract class Vehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;

    // Concrete method
    fuelType(): string {
        return "Diesel";
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started");
    }

    stopEngine(): void {
        console.log("Car engine stopped");
    }
}

const car = new Car();
console.log(car.fuelType()); // Diesel
car.startEngine();           // Car engine started
car.stopEngine();            // Car engine stopped

/* ===================== KEY BENEFITS =====================
    - Defines a clear base structure
    - Forces consistent implementation
    - Allows shared functionality
    - Improves maintainability and scalability
*/