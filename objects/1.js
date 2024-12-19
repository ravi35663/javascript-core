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

/*
4) Function constructor: 
    Create any function and apply the new operator to create object instances,
*/
function Person(name,age){
    this.name = name;
    this.age = age;
}
var peronObj = new Person('Amit',25);
console.log("Object is ",peronObj);

/**
 * 5) Function constructor with prototype:
 * This is similar to function constructor but it uses prototype for their 
 * properties and methods,
 * 
 * This is equivalent to an instance created with an object create method 
 * with a function prototype and then call that function with an instance 
 * and parameters as arguments.
 * 
*/
function Person(){}
Person.prototype.name = 'Ravi';
Person.prototype.age = 25;
var personObj = new Person()
console.log('PersonObj',Person.prototype);// This will show you call object


/**
 * ES6 Class syntax:
 * ES6 introduces class feature to create the objects
 */
class PersonClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
var personObj = new PersonClass('Ravi',25);
console.log('PersonObj',peronObj.name);

/*
 7) Singleton pattern:
 A Singleton is an object which can only be instantiated one time. Repeated 
   calls to its constructor return the same instance and this way one can 
   ensure that they don't accidentally create multiple instances.
*/
var obj = new (function(){
    this.name = 'Ravi'
})();
console.log('Obj ',obj);

/***
* Why do we use 'new' keyword?
* 'new' is used to create instances of objects fro constructor functions 
*  and classes
*/



