/* ===================== isNaN =====================
- Checks whether a value is NOT a valid number
- Returns true if value evaluates to NaN, else false
*/

console.log(isNaN("Hello World")); // true
console.log(isNaN("12"));          // false
console.log(isNaN(22));            // false


/* ===================== GLOBAL VARIABLES =====================
- Accessible throughout the program
- Missing var / let / const makes variable global
*/

msg = "Hello"; // Becomes global (bad practice)
console.log("Message:", msg);

var name;

function myName() {
    var name = "Ravi"; // Function-scoped variable
    console.log("My name is:", name);
}

console.log("Name before calling myName:", name); 
// undefined (declared but not assigned)

myName();

console.log("Name after calling myName:", name);  
// undefined (function scope not leaked)


/* ===================== PROBLEMS WITH GLOBAL VARIABLES =====================
    - Name conflicts between global & local variables
    - Harder debugging and testing
    - Unexpected side effects
*/


/* ===================== NaN PROPERTY =====================
    - Global property representing "Not-a-Number"
    - Indicates invalid numeric result
*/

console.log(Math.sqrt(-1));     // NaN
console.log(parseInt("Hello"));// NaN


/* ===================== isFinite =====================
    - Checks if value is a finite, legal number
    - Returns false for NaN, Infinity, -Infinity
*/

console.log(isFinite(NaN));        // false
console.log(isFinite(Infinity));   // false
console.log(isFinite(-Infinity));  // false
console.log(isFinite(101));        // true
