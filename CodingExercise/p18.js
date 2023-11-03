/*
    function* myGenFunc() {
        yield 1;
        yield 2;
        yield 3;
    }
    var myGenObj = new myGenFunc();
    console.log(myGenObj.next().value);

    Generators are not constructible type. But if you still proceed to do, there will be an error 
    saying "TypeError: myGenFunc is not a constructor"
*/

// Still you want to implement generator you can use this way.
function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
var myGenObj = myGenFunc();
console.log(myGenObj.next().value); //1
console.log(myGenObj.next().value);  //2



function* yieldAndReturn() {
    yield 1;
    return 2;
    yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
/*

    { value: 1, done: false }
    { value: 2, done: true }
    { value: undefined, done: true }
*/

/*
    Explanation:
       A return statement in a generator function will make the generator finish. If a value is 
       returned, it will be set as the value property of the object and done property to true. 
       When a generator is finished, subsequent next() calls return an object of this 
       form: {value: undefined, done: true}.
*/

const myGenerator = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();
for (const value of myGenerator) {
    console.log(value);
    break;
}
  
for (const value of myGenerator) {
    console.log("Inside second for loop")
    console.log(value);
}

//1
/*
    The generator should not be re-used once the iterator is closed. i.e, Upon exiting a 
    loop(on completion or using break & return), the generator is closed and trying to iterate 
    over it again does not yield any more results. Hence, the second loop doesn't print any 
    value.
*/

/*
    const num = 0o38;
    console.log(num);
    If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will 
    throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.
*/


const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
// ReferenceError: Cannot access 'Square' before initialization
/*
    Unlike function declarations, class declarations are not hoisted. 
    i.e, First You need to declare your class and then access it, otherwise it will throw a 
    ReferenceError "Uncaught ReferenceError: Square is not defined".

    Note: Class expressions also applies to the same hoisting restrictions of class declarations.

*/