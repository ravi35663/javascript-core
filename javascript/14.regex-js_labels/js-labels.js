// ======================= JAVASCRIPT LABELS =======================

/*
1) What are JS labels
- Labels allow you to name loops or blocks
- They are mainly used with break and continue
- Useful for controlling nested loops
*/

var i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === j) {
      continue loop1; // jumps to next iteration of loop1
    }
    console.log(`i:${i} and j:${j}`);
  }
}

// Output:
// i:1 and j:0
// i:2 and j:0
// i:2 and j:1

// ======================= DECLARATIONS AT THE TOP =======================

/*
2) Benefits of keeping declarations at the top
- Cleaner and more readable code
- Single place to track local variables
- Helps avoid accidental global variables
- Reduces re-declaration issues
*/

// ======================= INITIALIZING VARIABLES =======================

/*
3) Benefits of initializing variables
- Cleaner code
- One place for initialization
- Prevents undefined values
*/

// ======================= OBJECT CREATION BEST PRACTICES =======================

/*
4) Recommended ways to create objects
- Avoid using constructors like new Object()
- Prefer literal syntax
*/

var v1 = {};            // instead of new Object()
var v2 = "";            // instead of new String()
var v3 = 0;             // instead of new Number()
var v4 = false;         // instead of new Boolean()
var v5 = [];            // instead of new Array()
var v6 = /()/;          // instead of new RegExp()
var v7 = function () {}; // instead of new Function()

// ======================= JSON ARRAYS =======================

/*
5) Defining JSON arrays
- Written using square brackets
- Can contain multiple objects
*/

const jsonData = {
  users: [
    { firstName: "John", lastName: "Abrahm" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Shane", lastName: "Warn" }
  ]
};

// ======================= RANDOM INTEGERS =======================

/*
6) Generating random integers
- Math.random() gives value between 0 (inclusive) and 1 (exclusive)
*/

Math.floor(Math.random() * 10) + 1;   // 1 to 10 (10 excluded)
Math.floor(Math.random() * 100) + 1;  // 1 to 100 (100 excluded)

// Random number within a range
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ======================= TREE SHAKING =======================

/*
7) What is tree shaking
- Dead code elimination technique
- Removes unused code from final bundle
- Works with ES2015 module syntax (import/export)
- Popularized by Rollup, supported by Webpack
*/

// ======================= NEED FOR TREE SHAKING =======================

/*
8) Why tree shaking is needed
- Reduces bundle size
- Improves application performance
- Less code sent over the network
- Converts MBs into few hundred KBs
*/

// ======================= eval() USAGE =======================

/*
9) Is eval recommended?
- No
- It executes arbitrary code
- Causes serious security risks
- Should be avoided in almost all cases
*/