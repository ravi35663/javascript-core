/* ===================== TYPESCRIPT DATA TYPES (SHORT & POINT-WISE) =====================
=> Primitive Types:
    1) string   → Represents textual data
    2) number   → Represents numeric values (integer & float)
    3) boolean  → Represents true / false
    4) null     → Intentional absence of value
    5) undefined→ Variable declared but not assigned
    6) symbol   → Unique and immutable value
    7) bigint   → Large integers beyond number safe limit

=> Other Types:
1) any
   - Can hold any type
   - Disables type checking (not recommended)

2) unknown
   - Can hold any type
   - Safer than any (type check required before use)

3) never
   - Represents values that never occur
   - Used for functions that never return or always throw errors

4) void
   - Represents absence of return value
   - Mostly used for functions that don’t return anything

// ==> Use of 'any'
let data: any;
data = 42;
data = "Hello";
data = true;

function log(data: any): void {
    // Function returns nothing → void
    console.log("Data", data);
}


// Use of 'unknown'
let unknownData: unknown;
unknownData = 10;
unknownData = "Hello";

function processData(value: unknown): void {
    // Type checking is required
    if (typeof value === "string") {
        console.log("Safe to use string methods");
    } else if (typeof value === "number") {
        console.log("Safe to use number methods");
    }
}
processData(unknownData);

// never
function throwError(message: string): never {
    throw new Error(message); // Never returns
}

function infiniteLoop(): never {
    while (true) {}
}

//void
function logMessage(message: string): void {
    console.log(message);
}
const result: void = logMessage("Hello World");

/* ===================== ARRAYS & TUPLES =====================
    - Array  → Collection of same type elements (size not fixed)
    - Tuple  → Collection of same or different types (fixed size)
*/

// Array examples
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ravi", "Sumit", "Amit"];

// Tuple examples
let person: [string, number] = ["Ravi", 26];
let coordinates: [number, number] = [10, 10];

/* ===================== ENUMS =====================
    - Used to define a set of named constants
*/
// Numeric enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let move: Direction = Direction.Down;
console.log("Move is:", move); // 1 (index of Down)

// Enum with custom values
enum Status {
    open = 1,
    inprogress = 2,
    completed = 3
}

let currentStatus: Status = Status.open;
console.log(currentStatus); // 1

/* ===================== TYPE INFERENCE =====================
    - TypeScript automatically infers types
*/
// Variable inference
let message = "Hello World"; // inferred as string

// Function return inference
function add(a: number, b: number) {
    return a + b; // inferred as number
}

// Array inference
const arr = [1, 2, 3, 4, 5]; // inferred as number[]

/* ===================== TYPE ASSERTIONS (CASTING) =====================
    - Used when TypeScript cannot infer the exact type
    - Tells compiler the specific type
*/
const msg: unknown = "Hello World";
// Using 'as'
const length1: number = (msg as string).length;
// Using angle-bracket syntax
const length2: number = (<string>msg).length;