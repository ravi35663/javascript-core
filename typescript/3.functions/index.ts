/* ===================== FUNCTION TYPES & SIGNATURES (TypeScript) =====================
=> Function Types:
    - Define the structure of a function
    - Specify parameter types and return type
*/

// Basic function type (declaration)
let greet: (name: string) => void;
// greet takes a string and returns nothing
greet = function (name: string): void {
    console.log("name is:", name);
};
// Function type with return value
let add: (a: number, b: number) => number;
add = function (a: number, b: number): number {
    return a + b;
};

/* ===================== FUNCTION SIGNATURES ===================== */
// Function signature via function declaration
function multiply(a: number, b: number): number {
    return a * b;
}
// Function signature using interface
interface Calculator {
    (a: number, b: number): number;
}

let divide: Calculator;
divide = function (a: number, b: number): number {
    return a / b;
};

/*
Note:
- Function types and signatures ensure correct arguments and return values
*/
/* ===================== OPTIONAL & DEFAULT PARAMETERS ===================== */
// Optional parameter using '?'
function greets(name: string, greetings?: string): string {
    return `${greetings || "Hello"}, ${name}`;
}
greets("Ravi");          // Hello, Ravi
greets("Ravi", "Hey");   // Hey, Ravi

// Default parameter
function greetings(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}
greetings("Ravi");        // Hello, Ravi
greetings("Ravi", "Hey"); // Hey, Ravi

// Combining default + optional parameters
function greet2(
    name: string,
    greeting: string = "Hello",
    punctuation?: string
): string {
    return `${greeting}, ${name}${punctuation || ""}`;
}
greet2("Alice");            // Hello, Alice
greet2("Bob", "Hi", "!");   // Hi, Bob!


/* ===================== REST PARAMETERS ===================== */
// Rest parameter allows variable number of arguments
function numSum(...nums: number[]): number {
    return nums.reduce((total, item) => total + item, 0);
}

console.log(numSum(1, 2, 3));        // 6
console.log(numSum(4, 5, 6, 7));     // 22
/* ===================== FUNCTION OVERLOADING =====================
    - Multiple function signatures
    - Single implementation handles all cases
*/

// Overload signatures
function addItems(a: number, b: number): number;
function addItems(a: string, b: string): string;

// Implementation
function addItems(a: any, b: any): any {
    return a + b;
}

let result1 = addItems(5, 10);                    // 15
let result2 = addItems("Hello, ", "World!");      // "Hello, World!"
/* ===================== KEY NOTES =====================
    1) Overloads define multiple valid signatures
    2) One implementation handles all overloads
    3) Compiler enforces type safety at usage time
*/