/*
 *What is the purpose of the let keyword?
-> The let statement declares a block scope local variable. Hence the variables 
   defined with let keyword are limited in scope to the block, statement, or 
   expression on which it is used. Whereas variables declared with the var keyword 
   used to define a variable globally, or locally to an entire function regardless 
   of block scope.

   * Let's take an example to demonstrate the usage,
    let counter = 30;
    if (counter === 30) {
        let counter = 31;
        console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
*/

/*
 *What is the difference between let and var
    var:-
        -> It has been available from the beginning of JavaScript
        -> It has function scope or program scope
        -> Variables will be hoisted (and initialized with undefined) 
           (means available before initialization)

    let:-
        -> Introduced as part of ES6
        -> It has block scope
        -> Hoisted but not initialized

    *function userDetails(username) {
        if (username) {
            console.log(salary); // undefined due to hoisting
            console.log(age); // ReferenceError: Cannot access 'age' before initialization
            let age = 30;
            var salary = 10000;
        }
    console.log(salary); //10000 (accessible due to function scope)
    console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails("John");
*/

/*
 *How do you redeclare variables in a switch block without an error
 -> If you try to redeclare variables in a switch block then it will cause errors 
    because there is only one block. For example, the below code block throws a 
    syntax error as below:

    let counter = 1;
    switch (x) {
    case 0:
        let name;
        break;

    case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    *=> To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.
    let counter = 1;
    switch (x) {
        case 0: {
            let name;
            break;
        }
        case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
        }
    }
*/

/*
*What is the Temporal Dead Zone?
-> The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring 
   a variable with the let and const keywords, but not with var. 
   In ECMAScript 6, accessing a let or const variable before its declaration 
   (within its scope) causes a ReferenceError. 
   The time span when that happens, between the creation of a variable’s binding 
   and its declaration, is called the temporal dead zone.
   * for instance:
    function somemethod() {
        console.log(counter1); // undefined
        console.log(counter2); // ReferenceError
        var counter1 = 1;
        let counter2 = 2;
    }
*/

/*
 *What is an IIFE (Immediately Invoked Function Expression)
 -> IIFE (Immediately Invoked Function Expression) is a JavaScript function that 
    runs as soon as it is defined. The signature of it would be as below,
    
    (function(){
        /logic here/
    })();

-> The primary reason to use an IIFE is to obtain data privacy because any variables 
   declared within the IIFE cannot be accessed by the outside world. 
   i.e, If you try to access variables from the IIFE then it throws an error as 
   below,

   (function () {
    var message = "IIFE";
    console.log(message);
    })();
    console.log(message); //Error: message is not defined
*/

/*
 *What is Hoisting
 -> Hoisting is a JavaScript mechanism where variables, function declarations and 
    classes are moved to the top of their scope before code execution. 
    Remember that JavaScript only hoists declarations, not initialization. 
    Let's take a simple example of variable hoisting
    
    *Example:1
    console.log(message); //output : undefined
    var message = "The variable Has been hoisted";

    *In the same fashion, function declarations are hoisted too
    message("Good morning"); //Good morning
    function message(name) {
        console.log(name);
    }

    This hoisting makes functions to be safely used in code before they are declared.
*/

/*
===> Hoisting in javascript : -
    ->  undefined   ->    when value does not assigned 
    ->  not defined ->   it is fetal error 
    ->  Before initializing any variable or function, we call them that is known as hoisting in JS.
        Example : 
            console.log(“Get name”,getName()); //show: My name is sumit
            function getName(){
                console.log(“My name is sumit”);
            }

        console.log(getName); // show: function definition
        console.log(getName()); // show: My name is sumit
        console.log(x) // x not defined (because we have not reserved any memory for x)

    ->  Before starting execution of any program, memory assigned to each variable and function as 
        we saw in the execution context (Memory creation phase).
    ->  "not defined" only happens when we have not defined memory for any variable and are  trying to 
        access it .

    Example 2:
        console.log("Get name",getName()); // error getName is not a function . As initial phase it 
        // is treated as variable but after function execution it has function definition 
        getName = ()=>{ // this is known as function expression.
            console.log(“My name is sumit”);
        }
*/

/*
===> Let and const and temporal dead zone :-
    ->  let and const declarations are hoisted (assigning variables, function, class)
    ->  let and const are in a temporal dead zone for the time being .
    ->	console.log(a); // Error : Cannot access before initialization 
        let a = 10;
        var b = 100;

    ->	console.log(b); // undefined (because at the beginning only memory assigned to variable b)
        var b = 100;

    ->  when we use let and const variables in global scope then it has assigned memory in other places in global scope .
    ->  Hoisting means assigning undefined (assign place to identifiers) by JS-Engine.
*/

/*
==> Temporal dead zone (TDZ) :- 
    ->  Temporal dead zone is a time between any variable is hoisted and any value is initialized to 
        that variable.
    ->  Time between assigning variables to undefined values.
    ->  Whenever you try to get a variable which is in the temporal dead zone, it gives you an error 
        (reference error, fetal error).
    ->  We cannot redeclare the same variable name with let and const in the same scope but we can 
        declare it with var.
    ->  Must assign value to const while declaring const variable.
    -> * let and const always are in the temporal dead zone.
*/

