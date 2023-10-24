//What is typescript
/*
    TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, 
    async/await, and many other features, and compiles to plain JavaScript. 
    Angular built entirely in TypeScript and used as a primary language. You can install it globally as
    'npm install -g typescript'

    // Let's see a simple example of TypeScript usage,
    function greeting(name: string): string {
        return "Hello, " + name;
    }
    
    let user = "Ravi";  
    console.log(greeting(user));
    // The greeting method allows only string type as argument.
*/

//What are the differences between javascript and typescript
/*
    Below are the list of differences between javascript and typescript,
    feature	                    typescript	                            javascript
    Language paradigm	        Object oriented programming language	Scripting language
    Typing support	            Supports static typing	                It has dynamic typing
    Modules	                    Supported	                            Not supported
    Interface	                It has interfaces concept	            Doesn't support interfaces
    Optional parameters	        Functions support optional parameters	No support of optional parameters for functions
*/

//What are the advantages of typescript over javascript
/*
    Below are some of the advantages of typescript over javascript,
    1) TypeScript is able to find compile time errors at the development time only and it makes sures less 
       runtime errors. Whereas javascript is an interpreted language.
    
    2) TypeScript is strongly-typed or supports static typing which allows for checking type correctness at 
       compile time. This is not available in javascript.

    3) TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 unlike ES6 features of javascript 
       which may not be supported in some browsers.
*/

//What is an object initializer
/*
    An object initializer is an expression that describes the initialization of an Object. The syntax for 
    this expression is represented as a comma-delimited list of zero or more pairs of property names and 
    associated values of an object, enclosed in curly braces ({}). 
    This is also known as literal notation. It is one of the ways to create an object.
*/

var initObject = { a: "John", b: 50, c: {} };
console.log(initObject.a); // John
