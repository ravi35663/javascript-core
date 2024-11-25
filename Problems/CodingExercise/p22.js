
let message = "Hello World!";
message[0] = "J";
console.log(message);

let name = "John";
name = name + " Smith";
console.log(name);
/*
    Output:
        Hello World
        John Smith
*/

/*
    In JavaScript, primitives are immutable i.e. there is no way to change a primitive value once 
    it gets created. So when you try to update the string's first character, there is no change 
    in the string value and prints the same initial value Hello World!. 
    Whereas in the later example, the concatenated value is re-assigned to the same variable 
    which will result into creation of new memory block with the reference pointing to John Smith 
    value and the old memory block value(John) will be garbage collected.
*/

let user1 = {
    name: "Jacob",
    age: 28,
};
  
let user2 = {
    name: "Jacob",
    age: 28,
};
  
console.log(user1 === user2);// false
/*
    In JavaScript, the variables such as objects, arrays and functions comes under pass by 
    reference. When you try to compare two objects with same content, it is going to compare 
    memory address or reference of those variables. 
    These variables always create separate memory blocks hence the comparison is always going 
    to return false value.
*/

function greeting() {
    setTimeout(function () {
      console.log(message);
    }, 5000);
    const message = "Hello, Good morning";
}
greeting();
//Hello, Good morning
/*
    The variable 'message' is still treated as closure(since it has been used in inner function) 
    even though it has been declared after setTimeout function. 
    The function with in setTimeout function will be sent to WebAPI and the variable declaration 
    executed with in 5 seconds with the assigned value. 
    Hence, the text declared for the variable will be displayed.
*/

const a = new Number(10);
const b = 10;
console.log(a === b);// false
/*
    Even though both variables a and b refer a number value, the first declaration is based on 
    constructor function and the type of the variable is going to be object type. 
    Whereas the second declaration is primitive assignment with a number and the type is number 
    type. Hence, the equality operator === will output false value.
*/

function add(a, b) {
    console.log("The input arguments are: ", a, b);
    return a + b;
}

/*
    Even though the above function returns the same result for the same arguments(input) that 
    are passed in the function, the console.log() statement causes a function to have side effects 
    because it affects the state of an external code. 
    i.e, the console object's state and depends on it to perform the job. 
    Hence, the above function considered as impure function.
*/

//Pure Vs Impure function 
/*
    In JavaScript, functions can be categorized as either pure functions or impure functions 
    based on their behavior and characteristics.
*/

// Pure function
/*
    A pure function is a function that, given the same input, will always produce the same output 
    and has no side effects. 
    *Key characteristics of pure functions are:
    1) Deterministic: For the same input, a pure function will always return the same output, 
       making its behavior predictable.

    2) No Side Effects: A pure function does not modify any data outside its scope. 
       It doesn't change the state of external variables, perform I/O operations, or have any 
       observable impact on the system.

    
    3) Stateless: Pure functions rely only on their input parameters and do not depend on or 
       modify any external state. This makes them easier to reason about and test.

    4) Idempotent: Invoking a pure function multiple times with the same input will produce the 
       same result, and it won't affect anything else in the system.
       function add(a, b) {
           return a + b;
        }

    * This add function is pure because it takes two inputs, a and b, and returns their sum 
      without modifying any external state.
*/

//Impure function
/*
    An impure function is a function that can have side effects, or its output may not be solely 
    determined by its input parameters. 
    Impure functions can modify external variables, perform I/O operations, or produce different 
    results for the same input.

    *Characteristics of impure functions:
    1) Non-deterministic: An impure function may produce different outputs for the same input, 
       making its behavior unpredictable.

    2) Side Effects: Impure functions can have side effects, such as modifying global variables, 
       writing to files, making network requests, or interacting with the DOM.
    
    3) Stateful: Impure functions may rely on and modify external state, which can make them 
       harder to reason about and test.

    let total = 0;
    function addToTotal(value) {
        total += value;
        return total;
    }

    *The addToTotal function is impure because it modifies the external variable total, which is 
     a side effect.
*/

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));
// Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));

// Uncaught (in promise)
/*
    The above promises settled at the same time but one of them resolved and other one rejected. 
    When you use .all method on these promises, the result will be short circuted by throwing an 
    error due to rejection in second promise. 
    But If you use '.allSettled' method then result of both the promises will be returned 
    irrespective of resolved or rejected promise status without throwing any error.
*/
/*Correct version of above code*/
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
/*
    [
        { status: 'fulfilled', value: undefined },
        { status: 'rejected', reason: undefined }
    ]
*/


