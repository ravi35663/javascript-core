/* ===================== LET KEYWORD =====================
    - let declares block-scoped variables
    - Exists only inside {}
    - Prevents accidental overwrites
*/
let counter = 30;
if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
}
console.log(counter); // 30


/* ===================== LET vs VAR =====================
var:
    - Function / global scope
    - Hoisted + initialized with undefined

let:
    - Block scope
    - Hoisted but NOT initialized (TDZ)
*/
function userDetails(username) {
    if (username) {
        console.log(salary); // undefined
        console.log(age);    // ReferenceError

        let age = 30;
        var salary = 10000;
    }
    console.log(salary); // 10000
    console.log(age);    // Error
}
userDetails("John");


/* ===================== SWITCH REDECLARATION =====================
    - switch has one block → let redeclaration causes error
    - Use nested blocks to fix
*/
// Error
switch (x) {
    case 0:
        let name;
        break;
    case 1:
        let name; // SyntaxError
        break;
}

// Correct
switch (x) {
    case 0: {
        let name;
        break;
    }
    case 1: {
        let name;
        break;
    }
}

/* ===================== TEMPORAL DEAD ZONE (TDZ) =====================
    - Applies to let & const
    - Access before initialization → ReferenceError
*/
function someMethod() {
    console.log(a); // undefined
    console.log(b); // ReferenceError

    var a = 1;
    let b = 2;
}


/* ===================== IIFE =====================
    - Immediately invoke function Expression
    - Runs immediately
    - Used for data privacy
*/
(function () {
    var message = "IIFE";
    console.log(message);
})();
console.log(message); // Error


/* ===================== HOISTING =====================
    - Declarations moved to top
    - Initialization NOT hoisted
*/
console.log(msg); // undefined
var msg = "Hoisted";

sayHello("Good morning");
function sayHello(text) {
    console.log(text);
}


/* ===================== UNDEFINED vs NOT DEFINED =====================
    undefined → memory exists, value not assigned
    not defined → no memory allocated
*/
console.log(x); // ReferenceError (not defined)

/* ===================== FUNCTION EXPRESSION HOISTING =====================
    - Function expressions are NOT hoisted
*/
console.log(getName()); // TypeError
var getName = () => {
    console.log("My name is Sumit");
};


/* ===================== LET, CONST & TDZ =====================
    - let/const are hoisted but in TDZ
    - Cannot access before initialization
*/
console.log(p); // ReferenceError
let p = 10;

console.log(q); // undefined
var q = 100;


/* ===================== TDZ RULES =====================
    - Time between hoisting and initialization
    - let/const always in TDZ
    - const must be initialized
*/
// const y; // Error
