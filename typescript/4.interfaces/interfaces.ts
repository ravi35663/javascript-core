/*
==> Interface:
   ->   An interface in TypeScript defines the structure of an object, enforcing type safety 
        by specifying properties and methods that an object or class must have. It doesn't 
        provide any implementation.
*/
interface Animal{
        name: string;
        makeSound(): void;
        bread?:string // optional
}

class Dog implements Animal{
        name:string;
        constructor(name:string){
                this.name = name;
        }
        makeSound(): void {
                console.log("Bark");
        }
}
const dog_name:string = 'scooby'
const dog = new Dog(dog_name);
dog.makeSound();

/*
Note:
1) Polymorphism: Interfaces allow different classes to implement the same interface but 
   behave differently.
2) Extending interfaces: You can extend an interface from another, allowing for flexible 
   design.
*/
/*
==> Interface extension
*/
interface Mammal extends Animal{
        // This mammal will have all properties of Animal
        furColor: string 
}

interface Person{
        name: string;
        age:number
}

interface Employee extends Person{
        employeeId:string;
        position:string
}

const employee: Employee = {
        name:"Ravi",
        age:27,
        employeeId:'1234567',
        position:"SDE"
}
/*
Note:
-> We can extends multiple interfaces all together
*/

interface Manager extends Employee,Person{
        department:string
}