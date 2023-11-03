function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk()); // window in browser and this in node

let run = Person.run;
console.log(run());// window in browser and this in node

/*
    When a regular or prototype method is called without a value for this, the methods return an 
    initial this value if the value is not undefined. Otherwise global window object will be 
    returned. In our case, the initial this value is undefined so both methods return window 
    objects.
*/


class Vehicle {
    constructor(name) {
      this.name = name;
    }
  
    start() {
      console.log(`${this.name} vehicle started`);
    }
}
  
class Car extends Vehicle {
    start() {
        console.log(`${this.name} car started`);
        super.start();
    }
}
  
const car = new Car("BMW");
console.log(car.start());
// BMW car started
// BMW vehicle started
/*
    The super keyword is used to call methods of a superclass. Unlike other languages the super 
    invocation doesn't need to be a first statement. i.e, The statements will be executed in the 
    same order of code.
*/

console.log("🙂" === "🙂"); // true
/*
    Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparission 
    of same emojies is equivalent to string comparison. Hence, 
    the output is always true.
*/

console.log(typeof typeof typeof true); //string
/*
    The typeof operator on any primitive returns a string value. So even if you apply the chain 
    of typeof operators on the return value, it is always string.
*/

let zero = new Number(0);
if (zero) {
  console.log("If",zero); //If [Number: 0]
} else {
  console.log("Else");
}
/*
    *The type of operator on new Number always returns object. i.e, 
    typeof new Number(0) --> object.
    Objects are always truthy in if block
    Hence the above code block always goes to if section.
*/

let msg = "Good morning!!";
msg.name = "John";
console.log(msg.name);
/*
    It returns undefined for non-strict mode and returns Error for strict mode. 
    In non-strict mode, the wrapper object is going to be created and get the mentioned property. 
    But the object get disappeared after accessing the property in next line.
*/


let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();
/*
    Output:
        11
        10
*/
/*
    11 and 10 is logged to the console.
    The innerFunc is a closure which captures the count variable from the outerscope. 
    i.e, 10. But the conditional has another local variable count which overwrites the outer 
    count variable. So the first console.log displays value 11. Whereas the second console.log 
    logs 10 by capturing the count variable from outerscope.
*/

console.log(true && 'hi'); // hi
console.log(true && 'hi' && 1); // 1
console.log(true && '' && 0); // ''

let arr = [1, 2, 3];
let str = "1,2,3";
console.log(arr == str); // true
console.log(arr === str); // false
/*
    Arrays have their own implementation of toString method that returns a comma-separated list 
    of elements. So the above code snippet returns true. In order to avoid conversion of array 
    type, we should use === for comparison.

*/
