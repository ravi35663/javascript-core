/* ===================== STATIC PROPERTIES & METHODS (TypeScript) =====================
=> Static Members:
    - Belong to the class itself, not to instances
    - Accessed using the class name
    - Shared across all instances
    - Can be public, private, or protected
    - Useful when functionality is not tied to a specific object

=> Key Points:
    1) Static members are shared by all instances
    2) Accessed directly via the class name
    3) Commonly used for utility methods, constants, and counters
*/


/* ===================== BASIC STATIC EXAMPLE ===================== */
class Calculator {
    // Static property (shared constant)
    static PI: number = 3.14;

    // Static method (utility function)
    static add(a: number, b: number): number {
        return a + b;
    }

    // Non-static method (requires instance)
    multiply(a: number, b: number): number {
        return a * b;
    }
}

// Accessing static members via class
console.log(Calculator.PI);          // 3.14
console.log(Calculator.add(5, 10));  // 15

// Accessing non-static method via instance
const calc = new Calculator();
console.log(calc.multiply(5, 10));   // 50


/* ===================== STATIC COUNTER EXAMPLE ===================== */
class User {
    // Static property shared across all instances
    static count: number = 0;

    constructor(public name: string) {
        // Increments when a new object is created
        User.count++;
    }

    // Static method to access static data
    static getUserCount(): number {
        return User.count;
    }
}

const user1 = new User("Ravi");
const user2 = new User("Amit");
console.log(User.count);            // 2
console.log(User.getUserCount());   // 2

/* ===================== KEY USE CASES =====================
    1) Utility methods       → Math.random(), Calculator.add()
    2) Shared constants      → PI value
    3) Global counters/state → Tracking object creation
*/