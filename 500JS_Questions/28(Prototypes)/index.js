//What is the difference between proto and prototype
/*
    The '__proto__' object is the actual object that is used in the lookup chain to resolve methods, 
    etc. Whereas 'prototype' is the object that is used to build '__proto__' when you create an object 
    with new.
    
    new Employee().__proto__ === Employee.prototype;
    new Employee().prototype === undefined;

    *There are few more differences,
    *Feature	 Prototype	                                                  proto
    Access	    All the function constructors have prototype properties.	  All the objects have __proto__ property
    Purpose	    Used to reduce memory wastage with a single copy of function  Used in lookup chain to resolve methods, constructors etc.
    ECMAScript  Introduced in ES6	                                          Introduced in ES5
    Usage	    Frequently used	                                              Rarely used

*/

//Give an example where do you really need semicolon
/*
    It is recommended to use semicolons after every statement in JavaScript. 
    For example, in the below case it throws an error ".. is not a function" at runtime due to 
    missing semicolon.

    define a function
    var fn = (function () {
        console.log("Top function");
    })(
        semicolon missing at this line
        
        then execute some code inside a closure
        function () {
        ...
        }
    )();
    and it will be interpreted as
    var fn = (function () {
            ...
        })(function () {
            ...
        })();

    In this case, we are passing the second function as an argument to the first function and then 
    trying to call the result of the first function call as a function. Hence, the second function 
    will fail with a "... is not a function" error at runtime.
*/

//What is a freeze method
/*
    The freeze() method is used to freeze an object. Freezing an object does not allow adding new 
    properties to an object,prevents from removing and prevents changing the enumerability, 
    configurability, or writability of existing properties. 
    i.e, It returns the passed object and does not create a frozen copy.
*/
const obj = {prop: 100};
Object.freeze(obj);
obj.prop = 200; // Throws an error in strict mode
console.log(obj.prop); //100

/*
    Remember freezing is only applied to the top-level properties in objects but not for nested 
    objects. For example, let's try to freeze user object which has employment details as nested 
    object and observe that details have been changed.
*/

const user = {name:"ravi",mobile:"12345678",more_Info:{designation:"sde",company:"kiwitech"}};
Object.freeze(user);
// Object.freeze(user.more_Info); // you can also freeze entire object.
user.name="Aditya"
user.more_Info.company = 'hestabit';
console.log("User data is ",user);

//What is the purpose of freeze method
/*
    *Below are the main benefits of using freeze method,
    1) It is used for freezing objects and arrays.
    2) It is used to make an object immutable.
*/

//Why do I need to use freeze method
/*
    In the Object-oriented paradigm, an existing API contains certain elements that are not intended 
    to be extended, modified, or re-used outside of their current context. Hence it works as the 
    final keyword which is used in various languages.
*/

//How do you detect a browser language preference
/*
    You can use navigator object to detect a browser language preference as below,
    var language =
    (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
    navigator.language || // All browsers
    navigator.userLanguage; // IE <= 10

    console.log(language);
*/

//How do you detect javascript disabled in the page
/*
    You can use the <noscript> tag to detect javascript disabled or not. The code block inside 
    <noscript> gets executed when JavaScript is disabled, and is typically used to display alternative 
    content when the page generated in JavaScript.
    <script type="javascript">
        * some javascript code
    </script>
    <noscript>
        <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
    </noscript>
*/

//How do you determine whether object is frozen or not
/*
    Object.isFrozen() method is used to determine if an object is frozen or not.An object is frozen 
    if all of the below conditions hold true
    1) If it is not extensible.
    2) If all of its properties are non-configurable.
    3) If all its data properties are non-writable. The usage is going to be as follows,
*/
const object = {
    property: "Welcome JS world",
};
Object.freeze(object);
console.log(Object.isFrozen(object));

//How do you determine two values same or not using object
/*
    The Object.is() method determines whether two values are the same value. For example, the usage 
    with different types of values would be,
    Object.is([], []); // false
    Object.is("hello","hello") // true
    Object.is(window,window) // true

*/
//Two values are the same if one of the following holds:
/*
    1) both undefined
    2) both null
    3) both true or both false
    4) both strings of the same length with the same characters in the same order
    5) both the same object (means both object have same reference)
    6) both numbers and both +0 both -0 both NaN both non-zero and both not NaN and both have the same value.
*/

//What is the purpose of using object 'is' method?
/*
    *Some of the applications of Object's is method are follows,
    1) It is used for comparison of two strings.
    2) It is used for comparison of two numbers.
    3) It is used for comparing the polarity of two numbers.
    4) It is used for comparison of two objects.
*/

//How do you copy properties from one object to other
/*
    You can use the Object.assign() method which is used to copy the values and properties from one 
    or more source objects to a target object. 
    It returns the target object which has properties and values copied from the source objects. 
    The syntax would be as below,
    * Object.assign(target, ...sources);
*/

//Let's take example with one source and one target object,
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 3, c: 4 }
console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
/*
    As observed in the above code, there is a common property(b) from source to target so it's value 
    has been overwritten.
*/

//What are the applications of assign method
/*
    Below are the some of main applications of Object.assign() method,
    1) It is used for cloning an object.
    2) It is used to merge objects with the same properties.
*/
//What is a proxy object
/*
    The Proxy object is used to define custom behavior for fundamental operations such as property 
    lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows,
    *var p = new Proxy(target, handler);
*/

//Let's take an example of proxy object,
var handler = {
    get: function (obj, prop) {
      return prop in obj ? obj[prop] : 100;
    },
};

var p = new Proxy({}, handler);
p.a = 10;
p.b = null;

console.log(p.a, p.b); // 10, null
console.log("c" in p, p.c); // false, 100

/*
    In the above code, it uses get handler which define the behavior of the proxy when an operation 
    is performed on it
*/

//What is the purpose of seal method
/*
    The Object.seal() method is used to seal an object, by preventing new properties from being added 
    to it and marking all existing properties as non-configurable. But values of present properties 
    can still be changed as long as they are writable. 
    Let's see the below example to understand more about seal() method
    
    *Example-1
    let person = {name:"John",age:24,add:"noida"};
    Object.seal(person);
    person.name = "Amit"
    person["email"] = "john@getnada.com"
    console.log(Object.isSealed(person));
    console.log("Person is ",person);
    
    *Example-2
    const object = {
        property: "Welcome JS world",
    };
    Object.seal(object);
    object.property = "Welcome to object world";
    console.log(Object.isSealed(object)); // true
    delete object.property; // You cannot delete when sealed
    console.log(object.property); //Welcome to object world

*/

//What are the applications of seal method
/*
    Below are the main applications of Object.seal() method,
    1) It is used for sealing objects and arrays.
    2) It is used to make an object immutable.
*/

//What are the differences between freeze and seal methods
/*
    If an object is frozen using the Object.freeze() method then its properties become immutable and 
    no changes can be made in them whereas if an object is sealed using the Object.seal() method 
    then the changes can be made in the existing properties of the object.
*/

//How do you determine if an object is sealed or not
/*
    The Object.isSealed() method is used to determine if an object is sealed or not. 
    *An object is sealed if all of the below conditions hold true
    1) If it is not extensible.
    2) If all of its properties are non-configurable.
    3) If it is not removable (but not necessarily non-writable). Let's see it in the action
    *Example:
    const object = {
        property: "Hello, Good morning",
    };
    Object.seal(object); // Using seal() method to seal the object
    console.log(Object.isSealed(object)); // checking whether the object is sealed or not
*/

//How do you get enumerable key and value pairs
/*
    The Object.entries() method is used to return an array of a given object's own enumerable 
    string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. 
    *Let's see the functionality of object.entries() method in an example,
    const object = {
        a: "Good morning",
        b: 100,
    };

    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`); 
    }
    * Output:
        a: 'Good morning'
        b: 100
*/
//Note: The order is not guaranteed as object defined.
//What is the main difference between Object.values and Object.entries method
/*
    The Object.values() method's behavior is similar to Object.entries() method but it returns an 
    array of values instead [key,value] pairs.
    const object = {
        a: "Good morning",
        b: 100,
        };

    for (let value of Object.values(object)) {
        console.log(`${value}`); // 'Good morning',100;
    }
*/

//How can you get the list of keys of any object
/*
    You can use the Object.keys() method which is used to return an array of a given object's own 
    property names, in the same order as we get with a normal loop. 
    *For example, you can get the keys of a user object,
    const user = {
        name: "John",
        gender: "male",
        age: 40,
    };
    console.log(Object.keys(user)); //['name', 'gender', 'age']
*/

//How do you create an object with prototype
/*
    The Object.create() method is used to create a new object with the specified prototype object and 
    properties. i.e, It uses an existing object as the prototype of the newly created object. 
    It returns a new object with the specified prototype object and properties.
*/
const user = {
    name: "John",
    printInfo: function () {
      console.log(`My name is ${this.name}.`);
    },
};

const admin = Object.create(user);
admin.name = "Nick"; 
// Remember that "name" is a property set on "admin" but not on "user" object
admin.printInfo(); // My name is Nick

