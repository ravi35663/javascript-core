// ======================= DEFAULT PARAMETERS =======================
/*
1) Default Parameter
    - Allows function parameters to have default values
    - Used when no argument or undefined is passed
*/
function greetings(gr = "hi") {
  console.log(gr);
}
greetings();        // hi
greetings("hello"); // hello

// ======================= SPREAD OPERATOR =======================
/*
2) Spread Operator (...)
    - Expands elements of an iterable
    - Works with arrays, strings, and objects
*/

let a = [1, 2, 3, 4];
let b = [10, 20, 30];

function test() {
  console.log(a, b); // logs both arrays
}
test();

let arr = [10, 20, 30];
console.log(arr);      // [10, 20, 30]
console.log(...arr);   // 10 20 30

// ======================= STRING TO ARRAY USING SPREAD =======================

/*
3) Convert string to array
    - Spread breaks string into individual characters
*/

let name = "Ravi";
let lastName = "Kumar";
let arrFullName = [...name, ...lastName];
// ['R','a','v','i','K','u','m','a','r']

/*
Note:
- Spread creates a new array (deep copy for primitive values)
*/

// ======================= SPREAD WITH OBJECTS =======================

/*
4) Spread operator with objects
- Used for cloning and merging objects
*/

const obj = {
  name: "Sumit",
  age: 25,
  email: "sumit@getnada.com"
};

const obj2 = { ...obj }; // clone object

const newObj = { roll_no: 123, ...obj2 };

/*
Note:
    - If properties clash, the last spread wins
*/

// ======================= SPREAD vs REST OPERATOR =======================
/*
5) Spread vs Rest
    - Both use same syntax (...)
    - Spread expands elements
    - Rest collects elements into an array
*/

function doSum(...items) { // rest operator
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  console.log(sum);
}

doSum(1);               // 1
doSum(1, 2, 3, 4, 5, 6); // 21

/*
Note:
    - Rest parameter must be the last parameter in a function
*/