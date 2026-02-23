/*
=>  call, apply and bind
    - In JavaScript, functions are objects and they have methods like call(), 
      apply(), and bind().

=>  These methods are used to:
    - Explicitly set the value of `this`
    - Borrow functions from other objects
    - Control how and when a function is executed
*/
// Base object and function:
const person = {
  name: "Ravi",
  email: "ravi@getnada.com",
  address: "India",
};

function greet(message, punctuation) {
  console.log(`Hello ${this.name}, ${message}${punctuation}`);
}
/*
=>  call():
    - Invokes the function immediately
    - First argument is the `this` context
    - Remaining arguments are passed individually
    - Useful when you know arguments explicitly
*/
greet.call(person, "How are you", "?");
// Output: Hello Ravi, How are you?

// Example: Function borrowing using call
const person2 = { name: "Sumit" };
greet.call(person2, "Good morning", "!");
// Output: Hello Sumit, Good morning!


// Example: call with inheritance-like behavior
const user = {
  name: "Admin",
};

function printRole(role) {
  console.log(`${this.name} has role ${role}`);
}

printRole.call(user, "SuperUser");
// Output: Admin has role SuperUser

/*
=>  apply():
    - Invokes the function immediately
    - First argument is the `this` context
    - Second argument is an array of arguments
    - Best when arguments are already in an array
*/
greet.apply(person, ["How are you", "?"]);
// Output: Hello Ravi, How are you?

// Example: apply with Math.max
const numbers = [10, 20, 30, 40];
const maxValue = Math.max.apply(null, numbers);
console.log(maxValue); // 40

// Example: dynamic arguments
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum.apply(null, [1, 2, 3])); // 6

/*
=>  bind():
    - Does NOT execute the function immediately
    - Returns a new function with bound `this`
    - Allows partial application (currying)
    - Useful for callbacks, event handlers, async code
*/
const boundGreet = greet.bind(person);
boundGreet("Nice to meet you", "!");
// Output: Hello Ravi, Nice to meet you!

// Example: Partial arguments with bind
const greetWithMessage = greet.bind(person, "How are you");
greetWithMessage("?");
// Output: Hello Ravi, How are you?

// ===============================
// Real-world Example: Event Handler
// ===============================
/*
Without bind, `this` would refer to the button element
With bind, `this` refers to the object we want
*/

const buttonHandler = {
  name: "Ravi",
  handleClick: function () {
    console.log("Clicked by", this.name);
  },
};

// Simulating event callback
const clickFn = buttonHandler.handleClick.bind(buttonHandler);
clickFn();
// Output: Clicked by Ravi

// ===============================
// call vs apply vs bind
// ===============================
/*
Feature        call            apply              bind
---------------------------------------------------------
Execution      Immediate       Immediate           Deferred
Arguments      Comma-separated Array               Partial / later
Return Value   Function result Function result     New function
Use case       Known args      Args in array       Callbacks, async
*/

/*
=>  As a Lead Software Engineer, you can explain:

    -  `call` is used when you want to invoke a function immediately with a
        specific `this` context and known arguments.

    - `apply` is similar to call but is preferred when arguments are dynamic
       or already available as an array.

    - `bind` is used when you want to create a reusable function with a fixed `this` 
       context, especially in callbacks, event handlers,and asynchronous flows.

=>  In modern React / JS apps:
    - `bind` prevents `this` loss in callbacks
    - `call/apply` are used for utility functions and function borrowing
*/
