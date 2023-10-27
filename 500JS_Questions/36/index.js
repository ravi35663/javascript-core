//What is for...of statement
/*
    The for...of statement creates a loop iterating over iterable objects or elements such as 
    built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, 
    and user-defined iterables. 
    The basic usage of for...of statement on arrays would be as below,
*/
// let arrayIterable = [10, 20, 30, 40, 50];
let arrayIterable = "123456789"
for (let value of arrayIterable) {
//   value++;
  process.stdout.write(`${value} `);
}  
// 11 21 31 41 51 for array
//2 3 4 5 6 7 8 9 10 for string


//What is the output of below spread operator array
const emailData = [..."ravi@g.com"]; 
console.log(emailData); //['r', 'a', 'v', 'i','@', 'g', '.', 'c','o', 'm']

//Is PostMessage secure
/*
    Yes, postMessages can be considered very secure as long as the programmer/developer is careful 
    about checking the origin and source of an arriving message. But if you try to send/receive a 
    message without verifying its source will create cross-site scripting attacks.
*/

//What are the problems with postmessage target origin as wildcard
/*
    The second argument of postMessage method specifies which origin is allowed to receive the 
    message. If you use the wildcard “*” as an argument then any origin is allowed to receive the 
    message. In this case, there is no way for the sender window to know if the target window is 
    at the target origin when sending the message. If the target window has been navigated to 
    another origin, the other origin would receive the data. 
    Hence, this may lead to XSS vulnerabilities.

    *targetWindow.postMessage(message, "*");
*/

//How do you avoid receiving postMessages from attackers
/*
    Since the listener listens for any message, an attacker can trick the application by sending a 
    message from the attacker’s origin, which gives an impression that the receiver received the 
    message from the actual sender’s window. 
    You can avoid this issue by validating the origin of the message on the receiver's end using 
    the “message.origin” attribute. 
    For examples, 
    let's check the sender's origin http://www.some-sender.com on receiver side www.some-receiver.com,

    *Listener on http://www.some-receiver.com/
    window.addEventListener("message", function(message){
        if(/^http://www\.some-sender\.com$/.test(message.origin)){
            console.log('You received the data from valid sender', message.data);
    }
    });
*/

//Can I avoid using postMessages completely
/*
    You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t 
    use postMessage considering the risks, a lot of third party scripts use postMessage to 
    communicate with the third party service. 
    So your application might be using postMessage without your knowledge.
*/

//Is postMessages synchronous
/*
    The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all 
    other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).
    Due to this asynchronous behavior, we use a callback mechanism when the postMessage is 
    returned.
*/

//What paradigm is Javascript
/*
    JavaScript is a multi-paradigm language, supporting imperative/procedural programming, 
    Object-Oriented Programming and functional programming. 
    JavaScript supports Object-Oriented Programming with prototypical inheritance.
*/

//What is the difference between internal and external javascript
/*
    1)  Internal JavaScript: It is the source code within the script tag. 
    2)  External JavaScript: The source code is stored in an external file(stored with .js extension) 
        and referred with in the tag.
*/

//Is JavaScript faster than server side script
/*
    Yes, JavaScript is faster than server side scripts. 
    Because JavaScript is a client-side script it does not require any web server’s help for its 
    computation or calculation. 
    So JavaScript is always faster than any server-side script like ASP, PHP, etc.
*/

//How do you get the status of a checkbox
/*
    You can apply the 'checked' property on the selected checkbox in the DOM. 
    If the value is true it means the checkbox is checked, otherwise it is unchecked. 
    For example, the below HTML checkbox element can be access using javascript as below:

    <input type="checkbox" id="checkboxname" value="Agree" /> Agree the conditions<br />
    console.log(document.getElementById("checkboxname").checked) // true or false
*/

//What is the purpose of double tilde operator
/*
    The double tilde operator(~~) is known as double NOT bitwise operator. 
    This operator is a slightly quicker substitute for Math.floor().
*/

//How do you convert character to ASCII code
/*
    You can use the String.prototype.charCodeAt() method to convert string characters to ASCII 
    numbers. For example, 
    let's find ASCII code for the first letter of 'ABC' string,
*/
var char = "ABC";
char.charCodeAt(0); // returns 65

//Whereas String.fromCharCode() method converts numbers to equal ASCII characters.
const charsFromASCII = String.fromCharCode(65,66,67);
console.log(charsFromASCII);//ABC

//What is ArrayBuffer
/*
    An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. 
    You can create it as below,
    e.g.
    var buff
    let buffer = new ArrayBuffer(16); // create a buffer of length 16
    alert(buffer.byteLength); // 16

    *To manipulate an ArrayBuffer, we need to use a “view” object.
    *Create a DataView referring to the buffer
    let view = new DataView(buffer);
*/

//What is the purpose of Error object
/*
    The Error constructor creates an error object and the instances of error objects are thrown 
    when runtime errors occur. 
    The Error object can also be used as a base object for user-defined exceptions. 
    The syntax of error object would be as below,

    new Error([message[, fileName[, lineNumber]]])
*/
//You can throw user defined exceptions or errors using Error object in try...catch block as below,
try {
    let balance = 1000;
    let withdraw = 2000
    if(withdraw > balance){
        throw new Error('Oops, You don"t have enough money!');
    }
} catch (error) {
    console.log("Error: ",error.message);//Error:  Oops, You don"t have enough money!
}

//What is the purpose of EvalError object
/*
    The EvalError object indicates an error regarding the global eval() function. 
    Even though this exception is not thrown by JavaScript anymore, the EvalError object remains 
    for compatibility. 
    The syntax of this expression would be as below,

    new EvalError([message[, fileName[, lineNumber]]])
*/

//You can throw EvalError with in try...catch block as below,
try {
    throw new EvalError('Eval function error', 'someFile.js', 100);
} catch (e) {
    console.log(e.message, e.name, e.fileName);// "Eval function error", "EvalError", "someFile.js"
}

//Do all objects have prototypes
/*
    No. All objects have prototypes except for the base object which is created by the user, or 
    an object that is created using the new keyword.
*/

//What is the difference between a parameter and an argument
/*
    Parameter is the variable name of a function definition whereas an argument represents the 
    value given to a function when it is invoked. 
    Let's explain this with a simple function
*/

function person(parameter1,parameter2,parameter3){
    console.log(parameter1,parameter2,parameter3);
    return {parameter1,parameter2,parameter3}
}
const [arg1,agr2,agr3] = ['ravi',25,'ravi@getnada.com'];
person(arg1,agr2,agr3);


//What is the purpose of some method in arrays
/*
    The some() method is used to test whether at least one element in the array passes the test 
    implemented by the provided function. 
    The method returns a boolean value. 
    Let's take an example to test for any odd elements,
*/

var arr = [1,2,3,4,5,6,7,8,9];
var someOdd = arr.some(item => item%2!=0);
console.log("someOdd <><>",someOdd);// true

//How do you combine two or more arrays
/*
    The concat() method is used to join two or more arrays by returning a new array containing 
    all the elements. 
    The syntax would be as below,
    let arr = [];
    arr.contact(arr1,arr2,arr3,.......arr);
*/
//Let's take an example of array's concatenation with veggies and fruits arrays,
var veggies = ["Tomato", "Carrot", "Cabbage"];
var fruits = ["Apple", "Orange", "Pears"];
var veggiesAndFruits = veggies.concat(fruits);
console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears



//What is the difference between Shallow and Deep copy
/*
    There are two ways to copy an object,
*/

/*
    Shallow Copy: 
    Shallow copy is a bitwise copy of an object. 
    A new object is created that has an exact copy of the values in the original object. 
    If any of the fields of the object are references to other objects, just the reference 
    addresses are copied i.e., 
    only the memory address is copied.
*/
var empDetails = {
    name: "John",
    age: 25,
    expertise: "Software Developer",
};
// to create a duplicate

var empDetailsShallowCopy = empDetails; //Shallow copying!
//if we change some property value in the duplicate one like this:

empDetailsShallowCopy.name = "Johnson";
console.log("Original empDetails Object: ",empDetails);
console.log("Duplicate empDetails Object: ",empDetailsShallowCopy);
/*
    The above statement will also change the name of empDetails, since we have a shallow copy. 
    That means we're losing the original data as well.
*/



/*
    Deep copy: A deep copy copies all fields, and makes copies of dynamically allocated memory 
    pointed to by the fields. 
    A deep copy occurs when an object is copied along with the objects to which it refers.
*/
var empDetails = {
    name: "John",
    age: 25,
    expertise: "Software Developer",
};

//Create a deep copy by using the properties from the original object into new variable
var empDetailsDeepCopy = {
    name: empDetails.name,
    age: empDetails.age,
    expertise: empDetails.expertise,
};
//Now if you change empDetailsDeepCopy.name, it will only affect empDetailsDeepCopy & not empDetails

/*
    Deep cloning in JavaScript involves creating a completely independent copy of an object or 
    data structure, including all nested objects and their properties. 
    There are various ways to achieve deep cloning in JavaScript. 
    Here are some common methods:
*/

//Using JSON.parse and JSON.stringify:
/*
    This is a straightforward and widely used method for deep cloning objects. 
    It works well for simple data structures but has limitations, as it doesn't support all 
    object types, such as functions.
*/
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var originalObj = { a: 1, b: { c: 2 } };
var clonedObj = deepClone(originalObj);

//Using a Recursive Function:
/*
    You can create a recursive function to traverse the object and its nested properties, 
    creating new objects for each level of nesting.
*/
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

var originalObj = { a: 1, b: { c: 2 } };
var clonedObj = deepClone(originalObj);

//Using External Libraries:
/*
    There are external libraries like Lodash that provide a cloneDeep function for deep cloning.

    const _ = require('lodash');
    const originalObj = { a: 1, b: { c: 2 } };
    const clonedObj = _.cloneDeep(originalObj);
*/

//Custom Deep Clone Function:
/*
    You can create a custom deep clone function tailored to your specific needs. 
    This allows you to handle edge cases or custom behavior when cloning objects.
*/
function customDeepClone(obj) {
    // Your custom cloning logic here
}

var originalObj = { a: 1, b: { c: 2 } };
var clonedObj = customDeepClone(originalObj);


/*
    Each of these methods has its advantages and limitations, so choose the one that best fits 
    your use case and requirements. When implementing deep cloning, be cautious about circular 
    references and consider whether certain object types or properties should be handled 
    differently during cloning.
*/

//How do you create specific number of copies of a string
/*
    The repeat() method is used to construct and return a new string which contains the specified 
    number of copies of the string on which it was called, concatenated together. 
    Remember that this method has been added to the ECMAScript 2015 specification. 
    Let's take an example of Hello string to repeat it 4 times,
*/

var str = "Hello";
var re = str.repeat(4);
console.log(re);//HelloHelloHelloHello

//How do you trim a string at the beginning or ending
/*
    The 'trim' method of string prototype is used to trim on both sides of a string. 
    But if you want to trim especially at the beginning or ending of the string then you can use 
    'trimStart'/'trimLeft' and 'trimEnd'/'trimRight' methods. 
    Let's see an example of these methods on a greeting message,
*/

var greeting = "   Hello, Goodmorning!   ";

console.log(greeting); // "   Hello, Goodmorning!   "
console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
console.log(greeting.trimRight()); // "   Hello, Goodmorning!"

//What is the output of below console statement with unary operator
console.log(+"Hello");// NaN
/*
    The output of the above console log statement returns NaN. Because the element is prefixed 
    by the unary operator and the JavaScript interpreter will try to convert that element into a 
    number type. Since the conversion fails, the value of the statement results in NaN value.
*/

//Does javascript uses mixins
/*
    Mixin is a generic object-oriented programming term - is a class containing methods that can 
    be used by other classes without a need to inherit from it. In JavaScript we can only inherit 
    from a single object. ie. There can be only one [[prototype]] for an object.

    But sometimes we require to extend more than one, to overcome this we can use Mixin which 
    helps to copy methods to the prototype of another class.

    Say for instance, we've two classes User and CleanRoom. Suppose we need to add CleanRoom 
    functionality to User, so that user can clean the room at demand. Here's where concept called 
    mixins comes into picture.
*/

// mixin
let cleanRoomMixin = {
    cleanRoom() {
      alert(`Hello ${this.name}, your room is clean now`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    },
};
  
// usage:
class User {
    constructor(name) {
      this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, cleanRoomMixin);

// now User can clean the room
new User("Dude").cleanRoom(); // Hello Dude, your room is clean now!


