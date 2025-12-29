/*
    console.log(getMessage); // undefined
    getMessage();
    var getMessage = () => {
    console.log("Good morning");
    };
    TypeError: getMessage is not a function

    Hoisting will move variables and functions to be the top of scope. 
    Even though getMessage is an arrow function the above function will considered as a variable 
    due to it's variable declaration or assignment. 
    So the variables will have undefined value in memory phase and throws an error 'getMessage is 
    not a function' at the code execution phase.
*/


let quickPromise = Promise.resolve();
quickPromise.then(() => console.log("promise finished"));
console.log("program finished");
/*
    program finished
    promise finished
*/

/*
    Even though a promise is resolved immediately, it won't be executed immediately because its 
    .then/catch/finally handlers or callbacks(aka task) are pushed into the queue. 
    Whenever the JavaScript engine becomes free from the current program, it pulls a task from 
    the queue and executes it. 
    This is the reason why last statement is printed first before the log of promise handler.
    
    Note: We call the above queue as "MicroTask Queue"
*/

/*
    console.log("First line")
    [("a", "b", "c")].forEach((element) => console.log(element));
    console.log("Third line");
    //Cannot read properties of undefined

    When JavaScript encounters a line break without a semicolon, the JavaScript parser will 
    automatically add a semicolon based on a set of rules called 'Automatic Semicolon Insertion' 
    which determines whether line break as end of statement or not to insert semicolon. 
    But it does not assume a semicolon before square brackets [...]. So the first two lines 
    considered as a single statement as below.

    Hence, there will be cannot read properties of undefined error while applying the array 
    square bracket on log function.
*/

var of = ["of"];
for (var of of of) {
  console.log(of);
}
// of
/*
    In JavaScript, of is not considered as a reserved keyword. So the variable declaration with 
    of is accepted and prints the array value of using for..of loop.
*/

/*
    But if you use reserved keyword such as in then there will be a syntax error saying 
    SyntaxError: Unexpected token in,
    
    var in = ['in'];
    for(var in in in) {
        console.log(in[in]);
    }
*/

const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(numbers); // [11,18,200,23,25,31,35]
/*
    By default, the sort method sorts elements alphabetically. This is because elemented converted 
    to strings and strings compared in UTF-16 code units order. 
    Hence, you will see the above numbers not sorted as expected. 
    In order to sort numerically just supply a comparator function which handles numeric sorts.

    const numbers = [11, 25, 31, 23, 33, 18, 200];
    numbers.sort((a, b) => a - b);
    console.log(numbers);

    *Note: Sort() method changes the original array.
*/

setTimeout(() => {
    console.log("1");
}, 0);
Promise.resolve("hello").then(() => console.log("2"));
console.log("3");
/*
    Output:
    3
    2
    1
    When the JavaScript engine parses the above code, the first two statements are asynchronous 
    which will be executed later and third statement is synchronous statement which will be moved 
    to callstack, executed and prints the number 3 in the console. 
    Next, Promise is native in ES6 and it will be moved to Job queue which has high priority 
    than callback queue in the execution order. 
    At last, since setTimeout is part of WebAPI the callback function moved to callback queue 
    and executed. Hence, you will see number 2 printed first followed by 1.
*/


console.log(name);
// console.log(message());
var name = "John";
(function message() {
  console.log("Hello John: Welcome");
});
message()
/*
    *Output:
        undefined, Reference error: message is not defined
    IIFE(Immediately Invoked Function Expression) is just like any other function expression 
    which won't be hoisted. 
    Hence, there will be a reference error for message call. 
    The behavior would be the same with below function expression of message1,
*/