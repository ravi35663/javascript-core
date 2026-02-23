/* ===================== CLASSES & CONSTRUCTORS (TypeScript) =====================
=> Classes:
    - A class is a blueprint for creating objects
    - It defines properties (data) and methods (behavior)

=> Constructor:
    - Special method called when an object is created
    - Used to initialize class properties
*/

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        // Initializes object properties
        this.name = name;
        this.age = age;
    }

    // Method that returns a greeting message
    greet() {
        return `Hello My name is ${this.name} and my age is ${this.age}`;
    }
}

const person = new Person("Ravi", 27);
person.greet(); // "Hello My name is Ravi and my age is 27"

/* ===================== ACCESS MODIFIERS =====================
- Access modifiers control how class members are accessed
- TypeScript provides:
  1) public
  2) private
  3) protected
  4) readonly
*/
class Employee {
    public name: string;            // Accessible everywhere
    private salary: number;         // Accessible only inside this class
    protected department: string;   // Accessible in class & subclasses
    readonly id: number;            // Assigned once, cannot be changed

    constructor(name: string, salary: number, department: string, id: number) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id; // readonly → can be set only here or at declaration
    }

    // Public method to access private property
    getSalary(): number {
        return this.salary;
    }
}
class Manager extends Employee {
    constructor(name: string, salary: number, department: string, id: number) {
        super(name, salary, department, id);
    }

    getDepartment(): string {
        // Allowed because department is protected
        return this.department;
    }
}
const emp = new Employee("John", 50000, "HR", 101);
console.log(emp.name);        //  public → accessible
console.log(emp.getSalary()); //  access private via method

// emp.salary Error (private)
// emp.id = 102 Error (readonly)

/* ===================== SUMMARY =====================
    Class:
        - Blueprint for objects

    Constructor:
        - Initializes object properties

    public:
        - Accessible everywhere

    private:
        - Accessible only inside the class

    protected:
        - Accessible in class and subclasses

    readonly:
        - Value cannot be changed after initialization
*/