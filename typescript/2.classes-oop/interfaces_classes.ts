/*
    class with single interface:
*/
// Defining an interface
interface AnimalInterface {
    name: string;
    age: number;
  
    // Method signature: no implementation
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
  
    // Implementing the interface method
    makeSound(): void {
      console.log("Bark!");
    }
}
  
  // Creating an instance
  const myDog = new DogClass('Buddy', 3);
  console.log(myDog.name); // Output: Buddy
  myDog.makeSound();       // Output: Bark!
  
/*
    class with multiple interfaces:
*/

// Interface for flying behavior
interface CanFly {
    fly(): void;
}
  
// Interface for swimming behavior
interface CanSwim {
    swim(): void;
}

class Bird implements CanFly,CanSwim{
    swim(): void {
        console.log("Bird cannot swim")
    }
    fly(): void {
        console.log("Bird can fly")
    }
}

const b1 = new Bird();
b1.fly();
b1.swim()

/*
Key Benefits:
    1)  Separation of concerns: Different functionalities can be defined in different 
        interfaces, and classes can combine them as needed.
    2)  Flexibility: A class can implement multiple interfaces, allowing for more complex 
        behavior.
*/

