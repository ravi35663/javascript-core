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

//What Is Obfuscation in javascript
/*
    Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) 
    that is difficult for humans to understand. It is something similar to encryption, but a machine 
    can understand the code and execute it. 
    Let's see the below function before Obfuscation,
*/

function greeting() {
    console.log("Hello, welcome to JS world");
}

//And after the code Obfuscation, it would be appeared as below,
eval(
    (function (p, a, c, k, e, d) {
      e = function (c) {
        return c;
      };
      if (!"".replace(/^/, String)) {
        while (c--) {
          d[c] = k[c] || c;
        }
        k = [
          function (e) {
            return d[e];
          },
        ];
        e = function () {
          return "\\w+";
        };
        c = 1;
      }
      while (c--) {
        if (k[c]) {
          p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
      }
      return p;
    })(
      "2 1(){0.3('4, 7 6 5 8')}",
      9,
      9,
      "console|greeting|function|log|Hello|JS|to|welcome|world".split("|"),
      0,
      {}
    )
);

//Why do you need Obfuscation
/*
    Below are the few reasons for Obfuscation,

    1) The Code size will be reduced. So data transfers between server and client will be fast.
    2) It hides the business logic from outside world and protects the code from others
    3) Reverse engineering is highly difficult
    4) The download time will be reduced
*/

//What is Minification
/*
    Minification is the process of removing all unnecessary characters(empty spaces are removed) and 
    variables will be renamed without changing it's functionality. It is also a type of obfuscation.
*/

//What are the advantages of minification
/*
    Normally it is recommended to use minification for heavy traffic and intensive requirements of 
    resources. It reduces file sizes with below benefits,

    1) Decreases loading times of a web page
    2) Saves bandwidth usages
*/

//What are the differences between Obfuscation and Encryption
/*
    *Below are the main differences between Obfuscation and Encryption,
    Obfuscation :-
        -> Changing the form of any data in any other form
        -> It can be decoded without any key
        -> It will be converted to a complex form

    Encryption :-
        -> Changing the form of information to an unreadable format by using a key
        -> key is required to decode encrypted information
        -> Converted into an unreadable format
*/

//What are the common tools used for minification
/*
    *There are many online/offline tools to minify the javascript files,
    1) Google's Closure Compiler
    2) UglifyJS2
    3) jsmin
    4) javascript-minifier.com/
    5) prettydiff.com
*/

//How do you perform form validation using javascript (Browser)
/*
    JavaScript can be used to perform HTML form validation. For example, if the form field is empty, 
    the function needs to notify, and return false, to prevent the form being submitted. 
    Lets' perform user login in an html form,

    <form name='myForm' onsubmit='return validateForm()' method='post'>
    User name: <input type="text" name="uname"> </input>
    <input type='submit' value='Submit'></input>
    </form>

    function validateForm(){
        var x = document.forms["myFrom"]["uname"].value
        if(x){
            alert("User name cannot be empty");
            return false;
        }
    }
*/

//How do you perform form validation without javascript
/*
    You can perform HTML form validation automatically without using javascript. The validation 
    enabled by applying the required attribute to prevent form submission when the input is empty.
    <form method="post">
        <input type="text" name="username" required>
        <input type="submit" value="submit">
    </form>
    *Note: Automatic form validation does not work in Internet Explorer 9 or earlier.
*/

//What are the DOM methods available for constraint validation
/*
    The below DOM methods are available for constraint validation on an invalid input,

    1) checkValidity(): It returns true if an input element contains valid data.
    2) setCustomValidity(): It is used to set the validationMessage property of an input element. 
    
    *Let's take an user login form with DOM validations
    function myFunction(){
        var username = document.getElementById("uname");
        if(userName.checkValidity()){
            document.getElementById('message').innerHTML = "Entered a valid username"
        }else{
            document.getElementById("message").innerHTML = userName.validationMessage;
        }
    }
*/


//What are the available constraint validation DOM properties
/*
    *Below are the list of some of the constraint validation DOM properties available,
    1) validity: It provides a list of boolean properties related to the validity of an input element.
    2) validationMessage: It displays the message when the validity is false.
    3) willValidate: It indicates if an input element will be validated or not.
*/ 

//What are the list of validity properties
/*
    *The validity property of an input element provides a set of properties related to the validity of data.

    1) customError: It returns true, if a custom validity message is set.
    2) patternMismatch: It returns true, if an element's value does not match its pattern attribute.
    3) rangeOverflow: It returns true, if an element's value is greater than its max attribute.
    4) rangeUnderflow: It returns true, if an element's value is less than its min attribute.
    5) stepMismatch: It returns true, if an element's value is invalid according to step attribute.
    6) tooLong: It returns true, if an element's value exceeds its maxLength attribute.
    7) typeMismatch: It returns true, if an element's value is invalid according to type attribute.
    8) valueMissing: It returns true, if an element with a required attribute has no value.
    9) valid: It returns true, if an element's value is valid.
*/

//Give an example usage of rangeOverflow property
/*
    If an element's value is greater than its max attribute then rangeOverflow property returns true. 
    For example, the below form submission throws an error if the value is more than 100,
    e.g.
    <input id="age" type="number" max="100" />
    <button onclick="myOverflowFunction()">OK</button>

    function myOverflowFunction() {
        if (document.getElementById("age").validity.rangeOverflow) {
            alert("The mentioned age is not allowed");
        }
    }
*/

//Is enums feature available in javascript
/*
    No, javascript does not natively support enums. But there are different kinds of solutions to 
    simulate them even though they may not provide exact equivalents. 
    For example, you can use freeze or seal on object,
    var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
*/
var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3})

//What is an enum
/*
    An enum is a type restricting variables to one value from a predefined set of constants. 
    JavaScript has no enums but typescript provides built-in enum support.
    enum Color {
        RED, GREEN, BLUE
    }
*/

//How do you list all properties of an object
/*
    You can use the Object.getOwnPropertyNames() method which returns an array of all properties 
    found directly in a given object. Let's the usage of it in an example,
*/

var newObject = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(Object.getOwnPropertyNames(newObject));//["a", "b", "c"];

//How do you get property descriptors of an object
/*
    You can use the Object.getOwnPropertyDescriptors() method which returns all own property 
    descriptors of a given object. 
    The example usage of this method is below,
*/
newObject = {
    a: 1,
    b: 2,
    c: 3,
};
const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptorsObject.a.writable); //true
console.log(descriptorsObject.a.configurable); //true
console.log(descriptorsObject.a.enumerable); //true
console.log(descriptorsObject.a.value); // 1

//What are the attributes provided by a property descriptor
/*
    A property descriptor is a record which has the following attributes

    1) value: The value associated with the property
    2) writable: Determines whether the value associated with the property can be changed or not
    3) configurable: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
    4) enumerable: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
    5) set: A function which serves as a setter for the property
    6) get: A function which serves as a getter for the property
*/

//How do I modify the url without reloading the page
/*
    The 'window.location.href' property will be helpful to modify the url but it reloads the page. 
    HTML5 introduced the 'history.pushState()' and 'history.replaceState()' methods, which allow you 
    to add and modify history entries, respectively. 
    For example, you can use pushState as below,

    window.history.pushState("page2", "Title", "/page2.html");
*/

//How to get the value from get parameters
/*
    The 'new URL()' object accepts the url string and 'searchParams' property of this object can be used 
    to access the get parameters. Remember that you may need to use polyfill or 'window.location' to 
    access the URL in older browsers(including IE).
*/
let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
let url = new URL(urlString);
let parameterZ = url.searchParams.get("z");
console.log(parameterZ); // 3

//How do you print numbers with commas as thousand separators
/*
    You can use the 'Number.prototype.toLocaleString()' method which returns a string with a 
    language-sensitive representation such as thousand separator,currency etc of this number.
*/
function convertToThousandFormat(x) {
    return x.toLocaleString(); // 12,345.679
}
console.log(convertToThousandFormat(12345.6789));

//Does JavaScript supports namespace
/*
    JavaScript doesn’t support namespace by default. So if you create any element(function, method, 
    object, variable) then it becomes global and pollutes the global namespace. Let's take an example 
    of defining two functions without any namespace,
*/

function func1() {
    console.log("This is a first definition");
}
function func1() {
    console.log("This is a second definition");
}
func1(); // This is a second definition
/*
    It always calls the second function definition. In this case, namespace will solve the name 
    collision problem.
*/

//How do you declare namespace
/*
    Even though JavaScript lacks namespaces, we can use Objects , IIFE to create namespaces.
*/
/*
    Using Object Literal Notation: 
        Let's wrap variables and functions inside an Object literal which acts as a namespace. 
        After that you can access them using object notation
*/
var namespaceOne = {
    func1:function() {
        console.log("This is a first definition");
    }
}
var namespaceTwo = {
    func1:function() {
        console.log("This is a second definition");
    }
}
namespaceOne.func1(); // This is a first definition
namespaceTwo.func1(); // This is a second definition

/*
    Using IIFE (Immediately invoked function expression): 
        The outer pair of parentheses of IIFE creates a local scope for all the code inside of it 
        and makes the anonymous function a function expression. Due to that, you can create the same 
        function in two different function expressions to act as a namespace.
*/
(function () {
    function fun1() {
      console.log("This is a first definition");
    }
    fun1();
})();
  
(function () {
    function fun1() {
        console.log("This is a second definition");
    }
    fun1();
})();

/*
    Using a block and a let/const declaration: 
        In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a 
        variable to a block.
*/

{
    let myFunction = function fun1() {
      console.log("This is a first definition");
    };
    myFunction();
}
  //myFunction(): ReferenceError: myFunction is not defined.
  
{
    let myFunction = function fun1() {
        console.log("This is a second definition");
    };
    myFunction();
}
//myFunction(): ReferenceError: myFunction is not defined.


//How do you invoke javascript code in an iframe from parent page
/*
    Initially iFrame needs to be accessed using either document.getElementBy or window.frames. 
    After that contentWindow property of iFrame gives the access for targetFunction
    e.g.
    document.getElementById("targetFrame").contentWindow.targetFunction();
    window.frames[0].frameElement.contentWindow.targetFunction(); 
    *Accessing iframe this way may not work in latest versions chrome and firefox
*/


//How do get the timezone offset from date
/*
    You can use the 'getTimezoneOffset' method of the date object. This method returns the time zone 
    difference, in minutes, from current locale (host system settings) to UTC
*/
var offset = new Date().getTimezoneOffset();
console.log(offset); // -480

//How do you load CSS and JS files dynamically
/*
    You can create both link and script elements in the DOM and append them as child to head tag. 
    Let's create a function to add script and style resources as below,
*/

function loadAssets(filename, filetype) {
    if (filetype == "css") {
      // External CSS file
      var fileReference = document.createElement("link");
      fileReference.setAttribute("rel", "stylesheet");
      fileReference.setAttribute("type", "text/css");
      fileReference.setAttribute("href", filename);
    } else if (filetype == "js") {
      // External JavaScript file
      var fileReference = document.createElement("script");
      fileReference.setAttribute("type", "text/javascript");
      fileReference.setAttribute("src", filename);
    }
    if (typeof fileReference != "undefined")
      document.getElementsByTagName("head")[0].appendChild(fileReference);
}

//What are the different methods to find HTML elements in DOM
/*
    If you want to access any element in an HTML page, you need to start with accessing the document 
    object. Later you can use any of the below methods to find the HTML element,

    1) document.getElementById(id): It finds an element by Id
    2) document.getElementsByTagName(name): It finds an element by tag name
    3) document.getElementsByClassName(name): It finds an element by class name
*/

//What is jQuery
/*
    jQuery is a popular cross-browser JavaScript library that provides Document Object Model (DOM) 
    traversal, event handling, animations and AJAX interactions by minimizing the discrepancies 
    across browsers. It is widely famous with its philosophy of “Write less, do more”. 
    For example, you can display welcome message on the page load using jQuery as below,

    $(document).ready(function () {
        /It selects the document and apply the function on page load
        alert("Welcome to jQuery world");
    });
*/
//Note: You can download it from jquery's official site or install it from CDNs, like google.

//What is V8 JavaScript engine
/*
    V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, 
    written in C++. It is also being used in the node.js project. It implements ECMAScript and 
    WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, 
    IA-32, ARM, or MIPS processors. 
    Note: It can run standalone, or can be embedded into any C++ application.
*/

//Why do we call javascript as dynamic language
/*
    JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not 
    directly associated with any particular value type, and any variable can be assigned/reassigned 
    with values of all types.
*/

let age = 50; // age is a number now
age = "old"; // age is a string now
age = true; // age is a boolean

//What is a void operator
/*
    The 'void' operator evaluates the given expression and then returns undefined(i.e, without returning 
    value). The syntax would be as below,
*/
void expression;
void expression;
/*
    Let's display a message without any redirection or reload
    <a href="javascript:void(alert('Welcome to JS world'))">
        Click here to see a message
    </a>
*/

//Note: This operator is often used to obtain the undefined primitive value, using "void(0)".


//How to set the cursor to wait
/*
    The cursor can be set to wait in JavaScript by using the property "cursor". 
    Let's perform this behavior on page load using the below function.
    function myFunction() {
        window.document.body.style.cursor = "wait";
    }
    and this function invoked on page load
    <body onload="myFunction()"></body>
*/
