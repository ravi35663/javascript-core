// function area({ length = 10, width = 20 }) {
//     console.log(length * width);
// } 
// area();
/*
    If you leave out the right-hand side assignment for the destructuring object, the function 
    will look for at least one argument to be supplied when invoked. 
    Otherwise you will receive an error Error: Cannot read property 'length' of undefined as 
    mentioned above.
*/

/*
    You can avoid the error with either of the below changes,
*/

function area({length=10,width=20}){
    console.log("Length and width ",{length,width})
    return length * width;
}
console.log(area("My name is "))
/*
    220 because in javascript everything is an object hence object length has value 11 of 
    string "My name is"
*/
console.log(area({})) //200
// console.log(area(null)) // TypeError: Cannot read properties of null (reading 'length')
console.log(area(60));// 200


// Assign empty object
/*
    function area({ length = 10, width = 20 } = {}) {
        console.log(length * width);
    }
    console.log(area());
*/

const props = [
    { id: 1, name: "John" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Tom" },
];
  
const [, , { name }] = props;
console.log(name);
// Tom
/*
    It is possible to combine Array and Object destructuring. In this case, the third element in 
    the array props accessed first followed by name property in the object.
*/
function checkType(num = 1) {
    console.log(typeof num);
}
  
checkType(); // number
checkType(undefined); // number
checkType(""); // string
checkType(null); // object
// number, number, string, object
/*
    If the function argument is set implicitly(not passing argument) or explicitly to undefined, 
    the value of the argument is the default parameter. Whereas for other falsy values('' or null), 
    the value of the argument is passed as a parameter.

    *Hence, the result of function calls categorized as below,
    The first two function calls logs number type since the type of default value is number
    The type of '' and null values are string and object type respectively.
*/

function add(item, items = []) {
    items.push(item);
    return items;
}
  
console.log(add("Orange"));
console.log(add("Apple"));
// ['Orange'], ['Apple']

/*
    Since the default argument is evaluated at call time, a new object is created each time the 
    function is called. So in this case, the new array is created and an element pushed to the 
    default empty array.
*/

function greet(greeting, name, message = greeting + " " + name) {
    console.log([greeting, name, message]);
}
  
greet("Hello", "John"); // ["Hello","John","Hello John"]
greet("Hello", "John", "Good morning!");// ["Hello","John","Good Morning"]
/*
    Since parameters defined earlier are available to later default parameters, this code 
    snippet doesn't throw any error.
*/


/*
    function outer(f = inner()) {
        function inner() {
        return "Inner";
        }
    }
    outer(); //ReferenceError: inner is not defined
*/

function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
  }
  
myFun(1, 2, 3, 4, 5); // [3,4,5]
myFun(1, 2); // []

/*

    const obj = { key: "value" };
    const array = [...obj];
    console.log(array); //TypeError: obj is not iterable

    Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, 
    but they become iterable when used in an Array, or with iterating functions such as map(), 
    reduce(), and assign(). 
    If you still try to do it, it still throws TypeError: obj is not iterable.
*/