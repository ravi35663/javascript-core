//How do you print the contents of web page
/*
    The window object provided a print() method which is used to print the contents of the current 
    window. 
    It opens a Print dialog box which lets you choose between various printing options. 
    Let's see the usage of print method in an example,
    *<input type="button" value="Print" onclick="window.print()" />
    Note: In most browsers, it will block while the print dialog is open.
*/

//What is the difference between uneval and eval
/*
The uneval function returns the source of a given object; whereas the eval function does the opposite, 
by evaluating that source code in a different memory area. 
Let's see an example to clarify the difference,
*/

// var msg = uneval(function greeting() {
//     return "Hello, Good morning";
// });
// var greeting = eval(msg);
// greeting(); // returns "Hello, Good morning"

//What is an anonymous function
/*
    An anonymous function is a function without a name! Anonymous functions are commonly assigned to 
    a variable name or used as a callback function. 
    The syntax would be as below,

    function(optionalParameters) {
        do something
    }

    const myFunction = function(){ //Anonymous function assigned to a variable
    do something
    };

    [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
    do something
    });

*/


//Let's see the above anonymous function in an example,
var x = function (a, b) {
    return a * b;
};
var z = x(5, 10);
console.log(z); // 50

//What is the precedence order between local and global variables
/*
    A local variable takes precedence over a global variable with the same name. 
    Let's see this behavior in an example.
*/
var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg); // Good Evening
}
greeting();

//What are javascript accessors
/*
    ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. 
    Getters uses the 'get' keyword whereas Setters uses the 'set' keyword.
*/
var user = {
    firstName:"Ravi",
    lastName:"Kumar",
    language:"En",
    get lang(){
        // console.log("Language is :",this.language)
        return this.language;
    },
    set lang(l){
        this.language = l;
    }
}
console.log(user.lang); // getter access lang as en
user.lang = "fr";
console.log(user.lang); // setter used to set lang as fr

//How do you define property on Object constructor
/*
    The Object.defineProperty() static method is used to define a new property directly on an object, or 
    modify an existing property on an object, and returns the object. 
    Let's see an example to know how to define property,
*/

var newObj = {};
Object.defineProperty(newObj,"newProp",{
    value:100,
    writable:false// you can only read the value of the property 
})
console.log(newObj.newProp); // 100
newObj.newProp = 200; // It throws an error in strict mode due to writable setting
console.log("New props: ", newObj.newProp); // 100

//What is the difference between get and defineProperty
/*
    Both have similar results until unless you use classes. If you use get the property will be defined on 
    the prototype of the object whereas using Object.defineProperty() the property will be defined on the 
    instance it is applied to.
*/

//What are the advantages of Getters and Setters
/*
    Below are the list of benefits of Getters and Setters,
    1) They provide simpler syntax
    2) They are used for defining computed properties, or accessors in JS.
    3) Useful to provide equivalence relation between properties and methods
    4) They can provide better data quality
    5) Useful for doing things behind the scenes with the encapsulated logic.
*/

//Can I add getters and setters using defineProperty method
/*
    Yes, You can use the Object.defineProperty() method to add Getters and Setters. 
    For example, the below counter object uses increment, decrement, add and subtract properties,
*/
var obj = {counter:0}
// Increment function
Object.defineProperty(obj,'increment',{
    get:function(){
        return this.counter++;
    }
});
// decrement function
Object.defineProperty(obj,'decrement',{
    get:function(){
        return this.counter--
    }
})

//add value
Object.defineProperty(obj,'add',{
    set :function (value){
        this.counter +=value;
    }
});

// Subtract value
Object.defineProperty(obj,'subtract',{
    set :function(value){
        this.counter -= value;
    }
})
obj.add = 10
obj.subtract = 9
obj.increment
console.log("Getter and setter in define Property");
console.log(obj.increment); // 2
console.log(obj.decrement)// 3 because first incremented the previous increment function then return result then decremented
console.log(obj.decrement)

//What is the purpose of switch-case
/*
    The switch case statement in JavaScript is used for decision making purposes. In a few cases, using the 
    switch case statement is going to be more convenient than if-else statements. 
    The syntax would be as below,
    switch(choice){
        case value1:{
            //code
            statement1;
            break; // or return;
        }
        case value2:{
            statement2;
            break;// or return;
        }
        default:{
            // default statement 
        }
    }
    Note: if you missed break or return in any of the cases, then other case will executed
*/

//What are the conventions to be followed for the usage of switch case
/*
    *Below are the list of conventions should be taken care,
    
    1) The expression can be of type either 'number' or 'string'.
    2) Duplicate values are not allowed for the expression.
    3) The default statement is optional. If the expression passed to switch does not match with any case value then the statement within default case will be executed.
    4) The break statement is used inside the switch to terminate a statement sequence.
    5) The break statement is optional. But if it is omitted/left, the execution will continue on into the next case.
*/

//What is an error object
/*
    An error object is a built in error object that provides error information when an error occurs. 
    It has two properties: name and message. For example, the below function logs error details,
    e.g.
    try{
        test("name")
    }catch(err){
        console.log("Error is ",err);
    }

*/ 

//When you get a syntax error
/*
    A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing 
    quote for the function parameter throws a syntax errors.
    try {
       console.log('Name is"); // Missing ' will produce an error
    } catch (err) {
        console.log(err.name);
    }
*/

//What are the different error names from error object
/*
    There are 6 different types of error names returned from error object,

    Error Name	Description
    1) EvalError : An error has occurred in the eval() function
    2) RangeError: An error has occurred with a number "out of range"
    3) ReferenceError: An error due to an illegal reference
    4) SyntaxError:	An error due to a syntax error
    5) TypeError: An error due to a type error
    6) URIError: An error due to encodeURI()
*/

//What are the various statements in error handling
/*
    * Below are the list of statements used in an error handling,
    1) try: This statement is used to test a block of code for errors
    2) catch: This statement is used to handle the error
    3) throw: This statement is used to create custom errors.
    4) finally: This statement is used to execute code after try and catch regardless of the result.
*/
//What are the two types of loops in javascript
/*
1) Entry Controlled loops: 
    In this kind of loop type, the test condition is tested before entering the loop body. For example, 
    For Loop and While Loop comes under this category.
2) Exit Controlled Loops: 
    In this kind of loop type, the test condition is tested or evaluated at the end of the loop body. 
    i.e, the loop body will execute at least once irrespective of test condition true or false. 
    For example, do-while loop comes under this category.
*/
