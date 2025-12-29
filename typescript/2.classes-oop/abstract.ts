/*
===> Abstract Classes and Methods in TypeScript:
    ->  An abstract class in TypeScript is a class that cannot be instantiated directly. 
        It is meant to serve as a base class for other classes, providing common functionality while
        enforcing a certain structure for derived classes. 
        
    ->  Abstract classes can contain both implemented methods and abstract methods 
        (which must be implemented by derived classes).
*/
/*
===> Abstract Methods:
    ->  These are methods declared inside an abstract class without any implementation.
    ->  Derived classes must provide the implementation for these abstract methods.
    ->  Abstract methods are like a contract that any subclass must follow.
*/

export abstract class Animal {
    abstract sound(): void // Abstract method without implementation

    // Concrete method: implemented in the abstract class
    move():void{
        console.log("I can move")
    }
}

export class Dog extends Animal{

    // must provide implementation for the abstract method
    sound():void{
        console.log("Bark");
    }
}
  

const myDog = new Dog();
myDog.sound(); // Bark
myDog.move // I can move

/*
===> Key Points:
    Abstract Class :-
        ->  Cannot be instantiated.
        ->  Can have both abstract (without implementation) and non-abstract (implemented) methods.
    
    Abstract Method :-
        ->  Declared without implementation in the abstract class.
        ->  Must be implemented by any class that extends the abstract class.

    Concrete Methods in Abstract Class :-
        ->  Can be implemented normally in the abstract class and inherited by subclasses.
*/

/*  Example with Multiple Abstract Methods: */
abstract class Vehicle{
    abstract startEngine(): void;
    abstract stopEngine(): void;

    // Concrete method
    fuelType(): string{
        return 'Diesel'
    }
}

class Car extends Vehicle{
    startEngine(): void {
        console.log("Car engine started")
    }

    stopEngine(): void {
        console.log("Car engine stopped");
    }
}

const car = new Car();
console.log(car.fuelType()); // Diesel
car.startEngine() // Car engine started
car.stopEngine() // Car engine stopped


/*
===> Key Benefits:
    ->  Abstract classes provide a structured way to define a base class with certain methods that must 
        be implemented by subclasses.
    ->  You can include some shared functionality directly in the abstract class (like the move() 
        method in the Animal class).
*/