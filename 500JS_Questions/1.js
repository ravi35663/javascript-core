// What are the possible ways to create objects in JavaScript

// 1) Object constructor
var obj = new Object();
var obj = Object(); // this and above code is return the same result.

/* 2) Object Create method:- The create method of Object creates a new object 
    by passing the prototype object as a parameter
*/
var obj = Object.create({name:"Ravi"});

/*
3) Object Literal:-
->  The object literal syntax (or object initializer), is a comma-separated 
    set of name-value pairs wrapped in curly braces.
-> this is easiest way to create object.
-> Object literal property values can be of any data type, including array, 
   function, and nested object.
*/

var obj = {
    name:"Ravi",
    email:'ravi@getnada.com'
}



console.log("Object is ",obj);
/***
* Why do we use 'new' keyword?
* 'new' is used to create instances of objects fro constructor functions 
*  and classes
*/



