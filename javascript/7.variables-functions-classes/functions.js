/* ===================== ARROW / LAMBDA FUNCTIONS =====================
    - Short syntax for function expressions
    - No own this, arguments, super, new.target
    - Cannot be used as constructors
*/
const arr = () => {
    console.log("This is arrow function");
};
/* ===================== FIRST CLASS FUNCTIONS =====================
    - Functions are treated like variables
    - Can be assigned, passed, returned
*/
const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);

/* ===================== FIRST ORDER FUNCTION =====================
    - Does NOT accept or return another function
*/
const firstOrder = () => console.log("I am a first order function!");

/* ===================== HIGHER ORDER FUNCTION =====================
    - Accepts a function OR returns a function
    - map, filter, reduce are examples
*/
const firstOrderFunc = () => {
    console.log("Hello, I am a First order function");
};
const higherOrder = (fn) => fn();
higherOrder(firstOrderFunc);


/* ===================== UNARY FUNCTION =====================
    - Accepts exactly one argument
*/
const unaryFunction = (a) => console.log(a + 10);
unaryFunction(10);

/* ===================== CURRYING FUNCTION =====================
    - Converts multi-argument function into chained unary functions
*/
const multiArgFun = (a, b, c) => a + b + c;
console.log(multiArgFun(10, 20, 30));

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1)(2)(3)); // 6


/* ===================== PURE vs IMPURE FUNCTION =====================
    - Pure: No side effects, same input → same output
    - Impure: Modifies external state
*/
let numberArray = [];

const impureAddNumber = (number) => numberArray.push(number);
const pureAddNumber = (number) => (arr) => arr.concat([number]);
console.log(impureAddNumber(6));      // 1
console.log(numberArray);             // [6]
console.log(pureAddNumber(7)(numberArray)); // [6, 7]
console.log(numberArray);             // [6]


/* ===================== ARRAY SORTING ===================== */
var months = ["Aug", "Sep", "Jan", "June"];
months.sort();
console.log(months);

let numbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a);
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.reverse();


/* ===================== FIND MIN & MAX (Math) ===================== */
var marks = [50, 20, 70, 60, 45, 30, 70];

function findMax(arr) {
    return Math.max.apply(null, arr);
}
function findMin(arr) {
    return Math.min.apply(null, arr);
}

console.log("Max:", findMax(marks));
console.log("Min:", findMin(marks));


/* ===================== FIND MIN & MAX (WITHOUT Math) ===================== */
function findMaxElement(arr) {
    let max = -Infinity;
    let i = 0;
    while (arr[i] !== undefined) {
        if (arr[i] > max) max = arr[i];
        i++;
    }
    return max;
}

function findMinElement(arr) {
    let min = Infinity;
    let i = 0;
    while (arr[i] !== undefined) {
        if (arr[i] < min) min = arr[i];
        i++;
    }
    return min;
}


/* ===================== EMPTY STATEMENT =====================
    - Semicolon represents no operation
    - Useful for loops with empty body
*/
let a = [];
for (let i = 0; i < 10; a[i++] = 0);
console.log(a);

/* ===================== MODULE METADATA =====================
    - import.meta gives module-related info
*/
console.log(import.meta);

/* ===================== TYPES OF FUNCTIONS ===================== */
// Normal Function
function myFun() {}

// Arrow Function
const myArrowFun = () => {};

// Anonymous Function
const greetings = function () {
    console.log("Hello World");
};


/* ===================== CONSTRUCTOR FUNCTION ===================== */
function Counter() {
    var count = 10;

    this.incrementCounter = function () {
        count++;
    };

    this.decrementCounter = function () {
        count--;
    };

    this.displayCounter = function () {
        console.log("Display count", count);
    };
}

var counter_1 = new Counter();
counter_1.decrementCounter();
counter_1.incrementCounter();
counter_1.displayCounter();


/* ===================== FUNCTION STATEMENT vs EXPRESSION ===================== */
function a() {
    console.log("First function");
}

const b = () => {
    console.log("Function Expression");
};

/* ===================== ANONYMOUS FUNCTION ===================== */
const anon = function () {
    console.log("This is Anonymous function");
};


/* ===================== NAMED FUNCTION EXPRESSION ===================== */
let x = function y() {
    console.log("Named function");
};

/* ===================== FIRST CLASS FUNCTION ===================== */
function demo(fn) {
    fn();
    return () => console.log("Hello World");
}

demo(() => console.log("Hi"))();

/* ===================== HIGHER ORDER FUNCTIONS =====================
    - map, filter, forEach, sort, setTimeout
*/

/* ===================== NORMAL vs ARROW FUNCTIONS ===================== */
// Normal function
function reg(x, y) {
    console.log(arguments);
}
reg(10, 20);

// Arrow function (no arguments object)
const arrow = () => {
    console.log(this);
};


/* ===================== THIS IN ARROW FUNCTIONS ===================== */
console.log("This value is", this);

const person = () => {
    this.name = "sumit";
    this.age = 25;
    console.log("Person is called", this);

    const getInfo = () => {
        console.log("get info is called", this);
        const againGetInfo = () => {
            console.log("Again get info is called", this);
        };
        againGetInfo();
    };
    getInfo();
};

person();
console.log("this object in outer function", this);


/* ===================== FUNCTIONS ARE OBJECTS ===================== */
function fn(x) {}
fn.name = "John";
fn.profile = function () {};


/* ===================== FUNCTION LENGTH ===================== */
function sum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
console.log(sum.length); // 4


/* ===================== FUNCTION PROPERTIES ===================== */
function personInfo(name, age, address) {
    console.log(name, age, address);
}
console.log(personInfo.prototype);
console.log(personInfo.name);
console.log(personInfo.length); // 3: Number of parameters
