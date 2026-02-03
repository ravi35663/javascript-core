/* ===================== INTERFACES (TypeScript) =====================
=> Interface:
    - Defines the structure of an object
    - Enforces type safety
    - Contains only property and method declarations
    - Does NOT provide implementation
*/

interface Animal {
    name: string;
    makeSound(): void;
    breed?: string; // Optional property
}

// Class implementing the interface
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    // Mandatory implementation
    makeSound(): void {
        console.log("Bark");
    }
}

const dogName: string = "scooby";
const dog = new Dog(dogName);
dog.makeSound(); // Bark

/* ===================== IMPORTANT NOTES =====================
1) Polymorphism
   - Different classes can implement the same interface
   - Each class can have different behavior

2) Interface Extension
   - Interfaces can extend other interfaces
   - Promotes flexible and reusable design
*/

/* ===================== INTERFACE EXTENSION ===================== */
// Extending Animal interface
interface Mammal extends Animal {
    // Inherits all Animal properties
    furColor: string;
}

// Base interface
interface Person {
    name: string;
    age: number;
}

// Extended interface
interface Employee extends Person {
    employeeId: string;
    position: string;
}

const employee: Employee = {
    name: "Ravi",
    age: 27,
    employeeId: "1234567",
    position: "SDE",
};

/*
Note:
    -   Interfaces can extend multiple interfaces
*/
// Multiple interface extension
interface Manager extends Employee, Person {
    department: string;
}