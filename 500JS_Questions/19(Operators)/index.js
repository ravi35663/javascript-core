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
var a = 10;
var b = 20;
console.log(eval("a+b")); // 30

//What is a rest parameter
/*
    Rest parameter is an improved way to handle function parameters which allows us to represent an 
    indefinite number of arguments as an array. The syntax would be as below,
    
    function f(a, b, ...theArgs) {
        JS code would be here
    }
*/

//For example, let's take a sum example to calculate on dynamic number of parameters,
function sum(...args) {
    let total = 0;
    for (const i of args) {
      total += i;
    }
    return total;
}

console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //13
console.log(sum(1, 2, 3, 4, 5)); //15
//Note: Rest parameter is added in ES2015 or ES6

//What happens if you do not use rest parameter as a last argument
/*
    The rest parameter should be the last argument, as its job is to collect all the remaining arguments 
    into an array. For example, if you define a function like below it doesn’t make any sense and 
    will throw an error.
    function someFunc(a,…b,c){
        *You code goes here
        return;
    }
*/

//What is a spread operator
/*
    Spread operator allows iterables( arrays / objects / strings ) to be expanded into single 
    arguments/elements. Let's take an example to see this behavior,
*/
function calculateSum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(calculateSum(...numbers)); // 6

//What is an Unary operator
/*
    The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, 
    it will still become a number but with the value NaN. 
    Let's see this behavior in an action.
*/

var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var x = "100";
var y = +x;

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN

//What is a comma operator
/*
    The comma operator is used to evaluate each of its operands from left to right and returns the value of 
    the last operand. This is totally different from comma usage within arrays, objects, and function 
    arguments and parameters. 
    For example, the usage for numeric expressions would be as below,
*/
var x = 1;
x = (x++, x);
console.log(x); // 2
x = (x++, x+2);
console.log(x)// 5

//What is the advantage of a comma operator
/*
    It is normally used to include multiple expressions in a location that requires a single expression. 
    One of the common usages of this comma operator is to supply multiple parameters in a for loop. 
    For example, the below for loop uses multiple expressions in a single location using comma operator,
*/
for (var a = 0, b =10; a <= 10; a++, b--);

//You can also use the comma operator in a return statement where it processes before returning.
function incrementValue(value){
    return (value +=10),value;
}
console.log(incrementValue(10)); // 20