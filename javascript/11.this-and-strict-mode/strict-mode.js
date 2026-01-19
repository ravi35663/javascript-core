// ======================= STRICT MODE IN JAVASCRIPT =======================
// 1) What is Strict Mode
/*
    - Introduced in ECMAScript 5 (ES5)
    - Enables a restricted version of JavaScript
    - Prevents certain unsafe actions
    - Throws more errors instead of silently failing
    - Activated using the literal: "use strict"
*/

// ======================= WHY STRICT MODE =======================
/*
    - Helps write secure and cleaner JavaScript
    - Converts bad syntax into real errors
    - Prevents accidental creation of global variables
    - Throws errors for:
    -> Using undeclared variables
    -> Assigning to read-only properties
    -> Writing to getter-only properties
    -> Using non-existing properties or objects
*/

// ======================= HOW TO DECLARE STRICT MODE =======================
/*
1) Global Strict Mode
    - Declared at the top of a script
    - Applies to the entire file
*/

"use strict";
// x = 3.14; // Error: x is not defined
/*
2) Function-Level Strict Mode
    - Declared inside a function
    - Applies only to that function
*/
x = 3.14; // No error (non-strict)
function myFunction() {
  "use strict";
  // y = 3.14; // Error: y is not defined
}
myFunction();
