//What is the purpose of double exclamation (!!)
/*
 The double exclamation or negation(!!) ensures the resulting type is a boolean. 
 If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, 
 it will be true. For example, you can test IE version using this expression as below,

    let isIE8 = false;
    isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
*/

/*
    #If you don't use this expression then it returns the original value.
    console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null
*/
//Note: The expression !! is not an operator, but it is just twice of ! operator.

//What is the purpose of the delete operator
/*
    *The delete keyword is used to delete the property as well as its value.
    
    var user = { name: "John", age: 20 };
    delete user.age;
    console.log(user); // {name: "John"}

*/

// What is typeof operator
/*
 You can use the JavaScript typeof operator to find the type of a JavaScript 
 variable. It returns the type of a variable or an expression.
*/

typeof "John Abraham"; // Returns "string"
typeof (1 + 2); // Returns "number"
typeof [1, 2, 3]; // Returns "object" because all arrays are also objects

//What is undefined property
/*
    The undefined property indicates that a variable has not been assigned a value, or 
    declared but not initialized at all. The type of undefined value is undefined too.
*/

var user; // Value is undefined, type is undefined
console.log(typeof user); //undefined

// Any variable can be emptied by setting the value to undefined.
user = undefined;

//What is null value
/*
 The value null represents the intentional absence of any object value. It is one 
 of JavaScript's primitive values. The type of null value is object. You can empty 
 the variable by setting the value to null.
*/

var user = null;
console.log(typeof user); //object

//What is the difference between null and undefined
/*
*undefined: 
    1) It is not an assignment value where a variable has been declared but has not yet been assigned a value.
    2) Type of undefined is undefined
    3) The undefined value is a primitive value used when a variable has not been assigned a value.
    4) Indicates absence of variable itself
    5) Converted to NaN while performing primitive operations
*/

/*
*null:
    1) It is an assignment value which indicates that variable points to no object.
    2) Type of null is object 
    3) The null value is a primitive value that represents the null, empty, or non-existent reference.
    4) Indicates the absence of a value for a variable
    5) Converted to zero (0) while performing primitive operations
*/

// What is eval
/*
    The eval() function evaluates JavaScript code represented as a string. The string 
    can be a JavaScript expression, variable, statement, or sequence of statements.
*/
console.log(eval("1 + 2")); //  3
let a = 10;
let b = 20;
console.log(eval("a+b")); // 30
