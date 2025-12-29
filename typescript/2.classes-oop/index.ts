/* 
===> Classes and Constructors in TypeScript: 
    ->  Classes in TypeScript are a blueprint for creating objects. They can contain 
        properties and methods to define the behavior of the objects. 
        
    ->  The constructor is a special method that gets called when an object is created 
        from the class. It’s typically used to initialize object properties.
*/

class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    // method to returns the greetings message 
    greet(){
        return `Hello My name is ${this.name} and my age is ${this.age}`;
    }
}

const person = new Person("Ravi",27)
person.greet();
/*
==> Access Modifiers in typescripts:
    ->  The access modifiers in typescript is used to defined how class members (methods and properties) 
        can be accessed and modified.
    ->  There are 4 access modifiers in typescript which are 'public', 'private', 'protected' and 
        'readonly'.

    => Public(default): 
        -> Accessible anywhere (inside and outside the class).
        -> All members are public by default if no modifier is specified.

    => private:
        ->  Only accessible within the class itself. Not accessible outside of the class or from 
            subclasses.

    => protected:
        -> Accessible within the class and its subclasses. Not accessible outside of these.

    => readonly:
        ->  Marks a property as read-only. It can only be assigned a value during initialization 
            (either in a constructor or when declared), and cannot be changed afterward.
*/

class Employee{
    public name:string;             // Can be accessed and modified anywhere
    private salary: number;         // Only accessible within this class
    protected department: string;   // Accessible within this class and subclasses
    readonly id: number             // Can only be assigned once, cannot be changed

    constructor(name:string,salary:number,department: string,id:number){
        this.name = name
        this.salary = salary;
        this.id = id;       // Can only be set here or at declaration
        this.department = department;
    }

    // Method to get the private properties:
    getSalary():number{
        return this.salary;
    }
}

class Manager extends Employee{
    constructor(name:string,salary:number,department:string,id:number){
        super(name,salary,department,id);
    }

    getDepartment():string{
        return this.department; // accessible due to protected
    }
}

const emp = new Employee('John', 50000, 'HR', 101);
console.log(emp.name);           // Public, so accessible
console.log(emp.getSalary());    // Can access private data via method

// emp.salary is not accessible directly because it is private
// emp.id = 102; // Error: Cannot assign to 'id' because it is a read-only property
  