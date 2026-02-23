// ======================= PROTOTYPES IN JAVASCRIPT =======================
// 1) What is Prototype
/*
    - When you create a function, array, object, or class, JavaScript automatically
      attaches hidden properties and methods to it.
    - These hidden methods and properties are called prototypes.
    - Everything in JavaScript is an object, directly or indirectly.
*/
// 2) Example with Array
/*
let arr = [10, 20, 30, 40, 50];
- arr.push, arr.pop, arr.length etc. come from Array prototype
- You can inspect them using arr.__proto__
- arr.__proto__ === Array.prototype
*/

// 3) Prototype Object
/*
    - Prototype is an object that contains methods and properties
    for a specific data type, function, or class.
    - arr.__proto__ is an object
    - arr.__proto__.__proto__ is also an object
    - This continues until the prototype becomes null
*/

// 4) Object Prototype
/*
let obj = { name: "Ravi", city: "Motihari" };
    - obj.__proto__ === Object.prototype
    - obj.__proto__.__proto__ === null
    - Object.prototype is the top-level prototype in JavaScript
*/
// 5) Why Everything Is an Object
/*
    - If you keep checking prototypes, everything finally ends at Object.prototype
    - That’s why everything in JavaScript behaves like an object
*/

// 6) Function Prototype
/*
function fun() {}
    - fun.__proto__ === Function.prototype
    - Function.prototype.__proto__ === Object.prototype
*/
// 7) Why __proto__ Name
/*
    - __proto__ is intentionally unusual
    - This avoids accidental naming conflicts in user code
*/

// 8) Internal Prototype Link
/*
    - Every JavaScript object has an internal [[Prototype]] property
    - This property points to another object (usually Object.prototype)
*/

// 9) Object.prototype
/*
    - Object.prototype is the top-most prototype
    - Provides common methods:
    -> toString()
    -> hasOwnProperty()
    -> valueOf()
    - These methods are accessible to all objects via prototype chain
*/

// ======================= PROTOTYPE CHAINING =======================
/*
    - Prototype chaining is how JavaScript looks up properties
    - If a property is not found on the object:
    -> JS looks in its prototype
    -> Then prototype’s prototype
    -> Continues until null is reached
*/

// ======================= PROTOTYPAL INHERITANCE =======================
/*
    - One object can inherit properties from another via prototype
    - This is called prototypal inheritance
    - Not recommended to modify __proto__ directly due to performance issues
*/

// ======================= CONSTRUCTOR FUNCTION & PROTOTYPE =======================
function Person(name) {
  this.name = name;
}

// Methods added to prototype are shared by all instances
Person.prototype.sayHello = function () {
  console.log("Hello, My name is", this.name);
};

// Creating instances
var person1 = new Person("Alice");
var person2 = new Person("Bob");

person1.sayHello(); // Hello, My name is Alice
person2.sayHello(); // Hello, My name is Bob

// ======================= PROTOTYPE CHAIN (DEFINITION) =======================
/*
    - Prototype chain builds new objects from existing ones
    - Similar to inheritance in class-based languages
    - Instance prototype is accessed using:
    -> __proto__ or Object.getPrototypeOf(object)
    - Constructor prototype is accessed using:
    -> Constructor.prototype
    - Chain ends when prototype is null
*/
// ======================= STANDARD WAY TO ACCESS PROTOTYPE =======================
/*
    - __proto__ is widely supported but not standard
    - Object.getPrototypeOf(object) is the standard method
*/
const person = { name: "Ravi" };
person.__proto__.__proto__; // Prototype chaining example
// Object.getPrototypeOf(person);

// ======================= __proto__ vs prototype =======================
/*
1) Difference between __proto__ and prototype
    - __proto__ is the actual internal object used in the prototype lookup chain
    - prototype is a property of constructor functions used to build __proto__ when using `new`

Examples:
    new Employee().__proto__ === Employee.prototype
    new Employee().prototype === undefined

Differences:
    Feature        | prototype                                  | __proto__
    Access         | Available on constructor functions         | Available on all objects
    Purpose        | Used to share methods & reduce memory      | Used in lookup chain
    ECMAScript     | ES6                                        | ES5
    Usage          | Frequently used                             | Rarely used
*/

// ======================= SEMICOLON USE CASE =======================
/*
2) Why semicolon is required sometimes
    - Missing semicolon can cause runtime errors due to automatic semicolon insertion

    Example problem:
    var fn = (function () {
    console.log("Top function");
    })(
    function () {}
    )();

    - JS treats second function as an argument to first function
    - Results in "... is not a function" runtime error
*/

// ======================= Detect Browser Language =======================
/*
5) Detect browser language preference
*/
var language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

console.log(language);

// ======================= Detect JavaScript Disabled =======================
/*
6) Detect JavaScript disabled
    - Use <noscript> tag
    - Code inside <noscript> runs when JS is disabled
*/
