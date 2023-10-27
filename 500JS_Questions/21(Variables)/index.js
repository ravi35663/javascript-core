//What is isNaN
/*
 The isNaN() function is used to determine whether a value is an illegal number 
 (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. 
 Otherwise it returns false.
*/
console.log(isNaN("Hello World")); // true
console.log(isNaN("12")); // false
console.log(isNaN(22)); // false

//What are global variables
/*
 Global variables are those that are available throughout the length of the code 
 without any scope. The 'var' keyword is used to declare a local variable but if 
 you omit it then it will become global variable
*/
msg = "Hello"; // var is missing, it becomes global variable
console.log("Message: ",msg);
var name;

function myName(){
    var name = "Ravi"; // here scope of the variable is inside the function
    console.log("My name is :",name);
}
console.log("Name before calling myName function: ",name); 
// undefined if name declared above otherwise not defined error
myName();
console.log("Name after calling myName function: ",name); // 
// undefined if name declared above otherwise not defined error

//What are the problems with global variables
/*
 The problem with global variables is the conflict of variable names of local and 
 global scope. It is also difficult to debug and test the code that relies on global 
 variables.
*/

//What is NaN property
/*
 The NaN property is a global property that represents "Not-a-Number" value. 
 i.e, It indicates that a value is not a legal number. 
 It is very rare to use NaN in a program but it can be used as return value for few 
 cases
*/
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("Hello")); // NaN


// What is the purpose of isFinite function
/*
 The isFinite() function is used to determine whether a number is a finite, legal number. 
 It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), 
 otherwise it returns true.
*/

console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)) // false
console.log(isFinite(-Infinity))// false
console.log(isFinite(101)) //false
