// Purpose of double exclamation (!!)
/*
The double exclamation (!!) converts any value to a boolean.
- Falsy values → false
- Truthy values → true
*/

let isIE8 = false;
isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
console.log(isIE8); // true or false

// Without !!
console.log(navigator.userAgent.match(/MSIE 8.0/)); // Array or null
// Note: !! is not a special operator, just two ! operators

// Purpose of delete operator: The delete operator removes a property and its value from an object.
var user = { name: "John", age: 20 };
delete user.age;
console.log(user); // { name: "John" }


// typeof operator: Used to find the data type of a variable or expression.
typeof "John Abraham"; // "string"
typeof (1 + 2);        // "number"
typeof [1, 2, 3];      // "object"


// undefined: A variable declared but not assigned a value is undefined.
var user;
console.log(typeof user); // "undefined"
user = undefined;


// null: null represents an intentional absence of value.
var user = null;
console.log(typeof user); // "object"


/*
undefined:
    - Variable declared but not assigned
    - Type is undefined
    - Indicates absence of variable itself
    - Converted to NaN in operations

null:
    - Explicitly assigned
    - Type is object
    - Indicates absence of value
    - Converted to 0 in operations
*/

// eval: eval() executes JavaScript code represented as a string.
console.log(eval("1 + 2")); // 3
var a = 10;
var b = 20;
console.log(eval("a+b")); // 30


// Rest parameter: Allows handling an indefinite number of arguments as an array.
function sum(...args) {
  let total = 0;
  for (const i of args) {
    total += i;
  }
  return total;
}

console.log(sum(1, 2));             // 3
console.log(sum(1, 2, 3));          // 6
console.log(sum(1, 2, 3, 4));       // 10
console.log(sum(1, 2, 3, 4, 5));    // 15

// Note: Rest parameter must be the last argument


// Spread operator: Expands arrays/objects/strings into individual elements.
function calculateSum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(calculateSum(...numbers)); // 6

// Unary operator (+): Converts a value to a number.
var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN


// Comma operator: Evaluates multiple expressions and returns the last one.
var x = 1;
x = (x++, x);
console.log(x); // 2

x = (x++, x + 2);
console.log(x); // 5


// Advantage of comma operator: Used where a single expression is expected but multiple operations are needed.
for (var a = 0, b = 10; a <= 10; a++, b--);

function incrementValue(value) {
  return (value += 10), value;
}
console.log(incrementValue(10)); // 20