// ======================= THIS KEYWORD IN JAVASCRIPT =======================

// Strict mode is assumed
// ======================= 1) this IN GLOBAL SCOPE =======================
/*
    - In global scope, `this` refers to the global object
    - Global object depends on the runtime environment
    -> Browser: window
    -> Node.js: global
    -> Other devices: their own global object
*/

var a = 10;
console.log(this); // window (browser) | global (Node)

// ======================= 2) this IN FUNCTION SCOPE =======================
/*
    - Value of `this` depends on how the function is called
    - In non-strict mode:
    -> this defaults to global object if undefined or null
    - In strict mode:
    -> this remains undefined
*/

function x() {
  console.log(this);
}

x();        // undefined (strict mode)
window.x(); // window (called with reference)

// ======================= 3) this INSIDE OBJECT METHODS =======================
/*
    - Inside an object method, `this` refers to the object itself
    - Works same in strict and non-strict mode
*/

const student1 = {
  name: "Ravi Kumar Sharma",
  info: function () {
    console.log("this inside object:", this);
  }
};

const student2 = {
  name: "Kartike"
};

// ======================= call / apply / bind =======================
/*
    - call, apply, bind are used to explicitly set the value of `this`
    - Used for method sharing between objects
*/

student1.info.call(student2); // this → student2

// ======================= 4) this IN ARROW FUNCTIONS =======================
/*
    - Arrow functions do NOT have their own `this`
    - They inherit `this` from their lexical (enclosing) scope
*/

const obj = {
  full_name: "Ravi Kumar",
  obj2: {
    info: () => {
      console.log("Arrow function this:", this);
      // inherited from global scope
    }
  },
  info2: () => {
    console.log("Arrow function this 2:", this);
    // inherited from global scope
  },
  info: function () {
    console.log("Normal function this:", this);
    // refers to obj
  },
  value: this // refers to global object
};
console.log(obj.info2());

// ======================= ARROW FUNCTION INSIDE NORMAL FUNCTION =======================
const newObj = {
  full_name: "Ravi Kumar",
  x: function () {
    console.log("this inside function x:", this);

    const y = () => {
      console.log("this inside arrow y:", this);
      // inherits this from x → newObj
    };

    y();
  }
};

newObj.x();

// ======================= this IN DOM =======================
/*
    - In DOM event handlers, `this` refers to the HTML element
    - Represents the element on which the event occurred
*/

// ======================= this IN CLASSES =======================
/*
    - `this` inside classes refers to the instance of the class
    - Behavior is different from normal functions
*/

// ======================= THIS KEYWORD (ARROW FUNCTION CASE) =======================

// Global scope
this.hobbies = ["chess", "cricket"];

const person = {
  name: "Ravi",
  age: 25,
  getInfo: () => {
    /*
    - Arrow functions do NOT have their own `this`
    - `this` is taken from the outer (lexical) scope
    - Here, outer scope is global scope
    */
    console.log("My name is", this.name); // undefined
    console.log("This is this keyword", this);
    // { hobbies: ['chess', 'cricket'] }
  }
};

person.getInfo();
console.log("Again this is", this); // { hobbies: ['chess', 'cricket'] }

// ======================= KEY POINTS ABOUT `this` =======================

/*
1) `this` is a keyword, not a variable
   -> Its value cannot be reassigned

2) `this` always refers to an object

3) Value of `this` depends on where and how it is used

4) In arrow functions:
   -> `this` is inherited from lexical scope
   -> Does NOT refer to the calling object

5) In normal functions:
   -> `this` refers to the object calling the function

6) In strict mode:
   -> `this` is undefined in standalone functions
*/

// ======================= NORMAL FUNCTION EXAMPLE =======================

const person2 = {
  name: "sumit",
  age: 25,
  getThis: function () {
    console.log("This", this); // refers to person2
  }
};

// Global assignment
this.name = "Amit";
console.log(this); // global object (browser) | empty in Node

console.log(person2.getThis());

/*
Output:
Global Object:
{
  name: "Amit"
}

"This":
{
  name: "sumit",
  age: 25,
  getThis: function () {}
}
*/