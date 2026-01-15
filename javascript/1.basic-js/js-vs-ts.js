/* ===================== TYPESCRIPT =====================
    - TypeScript is a typed superset of JavaScript by Microsoft
    - Adds static types, classes, async/await, etc.
    - Compiles to plain JavaScript
    - Angular is built using TypeScript
    - Install: npm install -g typescript
*/

function greeting(name: string): string {
    return "Hello, " + name;
}
let user = "Ravi";
console.log(greeting(user));


/* ===================== JAVASCRIPT vs TYPESCRIPT =====================
    - TypeScript → OOP, static typing, interfaces, modules
    - JavaScript → scripting language, dynamic typing
*/
/* ===================== ADVANTAGES OF TYPESCRIPT =====================
    - Compile-time error detection
    - Strong/static typing
    - Compiles to older JS versions (ES3, ES5)
*/

/* ===================== OBFUSCATION =====================
    - Makes JS code hard to read for humans
    - Machine can still execute it
*/
function greeting() {
    console.log("Hello, welcome to JS world");
}
// After obfuscation → unreadable but executable

/* ===================== WHY OBFUSCATION =====================
    - Reduces file size
    - Hides business logic
    - Prevents reverse engineering
    - Faster downloads
*/

/* ===================== MINIFICATION =====================
    - Removes spaces, renames variables
    - Keeps functionality same
*/

/* ===================== OBFUSCATION vs ENCRYPTION =====================
    - Obfuscation → no key needed, readable by machine
    - Encryption → key required to decode
*/

/* ===================== MINIFICATION TOOLS =====================
    - Google Closure Compiler
    - UglifyJS
    - jsmin
    - Online minifiers
*/

/* ===================== FORM VALIDATION (JS) ===================== */
function validateForm() {
    var x = document.forms["myForm"]["uname"].value;
    if (!x) {
        alert("User name cannot be empty");
        return false;
    }
}
/* ===================== FORM VALIDATION (HTML) ===================== */
<form>
    <input type="text" required />
</form>


/* ===================== CONSTRAINT VALIDATION METHODS =====================
    - checkValidity()
    - setCustomValidity()
*/

/* ===================== VALIDATION PROPERTIES =====================
    - validity
    - validationMessage
    - willValidate
*/

/* ===================== VALIDITY STATES =====================
- valueMissing, typeMismatch, rangeOverflow, valid, etc.
*/

/* ===================== RANGE OVERFLOW EXAMPLE ===================== */
function myOverflowFunction() {
    if (document.getElementById("age").validity.rangeOverflow) {
        alert("Age not allowed");
    }
}

/* ===================== ENUMS =====================
    - JavaScript: no native enums
    - TypeScript: built-in enums
*/
var DaysEnum = Object.freeze({ monday: 1, tuesday: 2, wednesday: 3 });

/* ===================== OBJECT PROPERTIES ===================== */
var newObject = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(newObject));

/* ===================== PROPERTY DESCRIPTORS ===================== */
const descriptors = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptors.a.writable);


/* ===================== PROPERTY DESCRIPTOR ATTRIBUTES =====================
    - value, writable, enumerable, configurable, get, set
*/

/* ===================== MODIFY URL WITHOUT RELOAD ===================== */
window.history.pushState("page2", "Title", "/page2.html");

/* ===================== GET QUERY PARAMS ===================== */
let url = new URL("http://site.com?a=1&b=2");
console.log(url.searchParams.get("b"));

/* ===================== THOUSAND SEPARATOR ===================== */
console.log((12345.678).toLocaleString());

/* ===================== NAMESPACE PROBLEM ===================== */
function func1() { console.log("First"); }
function func1() { console.log("Second"); }
func1();

/* ===================== NAMESPACE USING OBJECT ===================== */
var ns1 = { func: () => console.log("First") };
var ns2 = { func: () => console.log("Second") };


/* ===================== NAMESPACE USING IIFE ===================== */
(function () {
    function fun() { console.log("First"); }
    fun();
})();


/* ===================== BLOCK SCOPE NAMESPACE ===================== */
{
    let myFunc = () => console.log("Scoped");
    myFunc();
}

/* ===================== IFRAME COMMUNICATION ===================== */
document.getElementById("frame").contentWindow.targetFunction();

/* ===================== TIMEZONE OFFSET ===================== */
console.log(new Date().getTimezoneOffset());

/* ===================== LOAD CSS / JS DYNAMICALLY ===================== */
function loadAssets(file, type) {
    let el = type === "css"
        ? document.createElement("link")
        : document.createElement("script");
    document.head.appendChild(el);
}

/* ===================== DOM ELEMENT SELECTION =====================
    - getElementById
    - getElementsByTagName
    - getElementsByClassName
*/

/* ===================== JQUERY =====================
    - Cross-browser JS library
    - Simplifies DOM, events, AJAX
*/
$(document).ready(function () {
    alert("Welcome to jQuery");
});

/* ===================== V8 ENGINE =====================
    - High-performance JS engine by Google
    - Used in Chrome and Node.js
*/

/* ===================== JS AS DYNAMIC LANGUAGE ===================== */
let age = 50;
age = "old";
age = true;

/* ===================== VOID OPERATOR =====================
    - Evaluates expression and returns undefined
*/
void alert("Welcome");

/* ===================== SET CURSOR TO WAIT ===================== */
document.body.style.cursor = "wait";