/*
=>  What are Closures:
    - A closure is the combination of a function and the lexical environment within 
      which that function was declared.

    - It is an inner function that has access to:
        1) Its own scope
        2) Outer (enclosing) function’s variables
        3) Global variables

    - Function along with its lexical scope forms a closure
    - Created every time a function is created
    - Allows returning functions
    - Function inside another function creates a closure
*/

function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}

var myFunction = Welcome("Ravi");
myFunction("Hello");   // Hello Ravi
myFunction("Welcome"); // Welcome Ravi
/*
The inner function (greetingInfo) retains access to the outer function's
variables even after the outer function has returned.
*/

// Example 1
function x() {
  var a = 10; // lexical scope of y()
  function y() {
    console.log("Value of a:", a);
  }
  y();
}
x();

// Example 2 (reference behavior)
function x() {
  var a = 7;
  function y() {
    console.log(a); // reference to 'a'
  }
  a = 100;
  return y;
}

var z = x();
console.log(z);
z(); // 100
/*
=>  Uses of Closures:
    - Module design
    - Currying
    - Memoization
    - Maintaining state in async operations
    - setTimeout
    - Iterators
*/
// Problem with var in loop
function x() {
  for (var i = 0; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
x();
// Output with var:
// 11 11 11 ... 11 (11 times) because of same reference.

// Solution using let
function x() {
  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
x();
// Output with let: different reference is created for each i
// 0 1 2 3 4 5 6 7 8 9 10

// Solution using closure with var
function x() {
  for (var i = 0; i <= 10; i++) {
    function p(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    }
    p(i);
  }
}
x();
/*
=>  Advantages of Closures:
    - Data hiding and encapsulation
    - Memoization

=>  Disadvantages of Closures:
    - Increased memory usage
    - Potential memory leaks if not handled properly
*/
/*
Key Notes:
  - Closure is a function bundled with its lexical environment
  - Gives access to outer scope variables
  - Variables created without var/let/const are always global
*/