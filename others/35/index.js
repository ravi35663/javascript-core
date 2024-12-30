//What is the output of below for loops
for(var i=0;i<4;i++){
    // Global scope
    setTimeout(()=>{process.stdout.write(`${i} `)})
}// 4 4 4 4

for(let i=0;i<4;i++){
    // Local scope
    setTimeout(()=>{process.stdout.write(`${i} `)})
} // 0 1 2 3


//List down some of the features of ES6
/*
    *Below are the list of some new features of ES6,
    1)  Support for constants or immutable variables
    2)  Block-scope support for variables, constants and functions
    3)  Arrow functions
    4)  Default parameters
    5)  Rest and Spread Parameters
    6)  Template Literals
    7)  Multi-line Strings
    8)  Destructuring Assignment
    9)  Enhanced Object Literals
    10) Promises
    11) Classes
    12) Modules
*/
// Multi-line string
var myName = 'ravi\
kumar sharma\
'
console.log("myName is ",myName);

//What is ES6
/*
    ES6 is the sixth edition of the javascript language and it was released in June 2015. 
    It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. 
    Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, 
    like Babel.js etc.
*/

//Can I redeclare let and const variables
/*
    No, you cannot redeclare let and const variables. If you do, it throws below error.
    *Uncaught SyntaxError: Identifier 'someVariable' has already been declared
*/

/*
    console.log("Email in line 50.",email); // not defined
    function person(){
        var email = 'ravikr@getnada.com'
    }
    console.log("Email in line 54 ",email); // not defined
    person();
*/
/*
    var email = "amitkr@getnada.com";
    console.log("Email above the function ",email); // amitkr@getnada.com
    function person(){
        var email = 'ravikr@getnada.com'
        console.log("Email inside function ",email); //ravikr@getnada.com
    }
    person();
    console.log("Email below the function ",email); // amitkr@getnada.com
*/


//Is const variable makes the value immutable
/*
    No, the const variable doesn't make the value immutable. But it disallows subsequent 
    assignments(i.e, You can declare with assignment but can't assign another value later)
*/
const userList = [];
userList.push("John"); // Can mutate even though it can't re-assign
console.log(userList); // ['John']


//What are default parameters
/*
    In ES5, we need to depend on logical OR operators to handle default values of function parameters. 
    Whereas in ES6, Default function parameters feature allows parameters to be initialized with 
    default values if no value or undefined is passed. 
    Let's compare the behavior with an examples,
*/
//With ES5
//ES5
var calculateArea = function (height, width) {
    height = height || 50;
    width = width || 60;
  
    return width * height;
};
console.log(calculateArea()); //300

//The default parameters makes the initialization more simpler
//ES6
var calculateArea = function (height = 50, width = 60) {
    return width * height;
};
console.log(calculateArea()); //300


//What are template literals
/*
    Template literals or template strings are string literals allowing embedded expressions. 
    These are enclosed by the back-tick (`) character instead of double or single quotes. 
    In ES6, this feature enables using dynamic expressions as below,

    Note: You can use multi-line strings and string interpolation features with template literals.
*/
//In ES6
var firstName = "Ravi";
var lastName = "Kumar";
var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
console.log(greeting);

//In ES5, you need break string like below,
var greeting = 'Welcome to JS World, Mr. '+firstName+" "+lastName;

//How do you write multi-line strings in template literals
/*
    In ES5, you would have to use newline escape characters('\n') and concatenation symbols(+) in 
    order to get multi-line strings.
*/
console.log("This is string sentence 1\n" + "This is string sentence 2");

//Whereas in ES6, You don't need to mention any newline sequence character,

console.log(`This is string sentence
'This is string sentence 2`);

//What are nesting templates
/*
    The nesting template is a feature supported within template literals syntax to allow inner 
    backticks inside a placeholder ${ } within the template. 
    For example, the below nesting template is used to display the number expression based on 
    case.
*/

const number = `number ${10>12?"10 is greater than 12":`10 is less than ${12}`}`;
console.log(number);

//What are tagged templates
/*
    Tagged templates are the advanced form of templates in which tags allow you to parse template 
    literals with a function. The tag function accepts the first parameter as an array of strings 
    and remaining parameters as expressions. 
    This function can also return manipulated strings based on parameters. 
    Let's see the usage of this tagged template behavior of an IT professional skill set in an 
    organization,
*/

var user1 = "John";
var skill1 = "JavaScript";
var experience1 = 15;

var user2 = "Kane";
var skill2 = "JavaScript";
var experience2 = 5;

function myInfoTag(strings, userExp, experienceExp, skillExp) {
  var str0 = strings[0]; // "Mr/Ms. "
  var str1 = strings[1]; // " is a/an "
  var str2 = strings[2]; // "in"

  var expertiseStr;
  if (experienceExp > 10) {
    expertiseStr = "expert developer";
  } else if (skillExp > 5 && skillExp <= 10) {
    expertiseStr = "senior developer";
  } else {
    expertiseStr = "junior developer";
  }

  return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
}

var output1 = myInfoTag`Mr/Ms. ${user1} is a/an ${experience1} in ${skill1}`;
var output2 = myInfoTag`Mr/Ms. ${user2} is a/an ${experience2} in ${skill2}`;
console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript
console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript

//What are raw strings
/*
    ES6 provides a raw strings feature using the String.raw() method which is used to get the raw 
    string form of template strings. This feature allows you to access the raw strings as they 
    were entered, without processing escape sequences. 
    For example, the usage would be as below,
*/

var calculateStr = String.raw`sum of number is\n ${ 1 + 2 + 3 + 4 + 5 }`;
console.log("calculateStr  :",calculateStr);

/*
    If you don't use raw strings, the newline character sequence will be processed by displaying 
    the output in multiple lines
*/

var calculationString = `The sum of numbers is \n${1 + 2 + 3 + 4}!`;
console.log(calculationString);
// The sum of numbers is
// 10!


//What is destructuring assignment
/*
    The destructuring assignment is a JavaScript expression that makes it possible to unpack values 
    from arrays or properties from objects into distinct variables. 
    Let's get the month values from an array using destructuring assignment
*/
var [one, two, three] = ["JAN", "FEB", "MARCH"];
console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"

//and you can get user properties of an object using destructuring assignment,
var { name, age } = { name: "John", age: 32 };
console.log(name); // John
console.log(age); // 32

//What are default values in destructuring assignment
/*
    A variable can be assigned a default value when the value unpacked from the array or object 
    is undefined during destructuring assignment. It helps to avoid setting default values 
    separately for each assignment. 
    Let's take an example for both arrays and object use cases,
*/

var [x=2,y=3,z=4] = [10]
console.log(`x:${x}, y:${y} and z:${z}`); //x:10, y:3 and z:4

//Objects destructuring:

var {x=2,y=3,z=4} = {x:12};
console.log(`x:${x}, y:${y} and z:${z}`) //x:12, y:3 and z:4

//How do you swap variables in destructuring assignment
var x = 10;
var y = 20;
console.log(`x:${x} and y:${y} before swapping`); //x:10 and y:20 before swapping
[y,x] = [x,y];
console.log(`x:${x} and y:${y} after swapping`); //x:20 and y:10 after swapping

//What are enhanced object literals
/*
    Object literals make it easy to quickly create objects with properties inside the curly braces. 
    For example, it provides shorter syntax for common object property definition as below.
*/

//ES6
var x = 10,y = 20;
obj = { x, y };
console.log(obj); // {x: 10, y:20}
//ES5
var x = 10,y = 20;
obj = { x: x, y: y };
console.log(obj); // {x: 10, y:20}

//What are dynamic imports
/*
    The dynamic imports using import() function syntax allows us to load modules on demand by 
    using promises or the async/await syntax. Currently this feature is in stage4 proposal. 
    The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload 
    response of our requests and overall improvements in the user experience. 
    The syntax of dynamic imports would be as below,
    *import("./Module").then((Module) => Module.method());
*/

//What are the use cases for dynamic imports
/*
    Below are some of the use cases of using dynamic imports over static imports,

    1) Import a module on-demand or conditionally. For example, if you want to load a polyfill 
       on legacy browser
        if (isLegacyBrowser()) {
            import(···)
            .then(···);
        }
    2) Compute the module specifier at runtime. For example, you can use it for internationalization.
        import(`messages_${getLocale()}.js`).then(···);
    Import a module from within a regular script instead a module.
*/

