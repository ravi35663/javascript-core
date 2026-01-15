/* ===================== JSON =====================
    - JSON (JavaScript Object Notation) is a lightweight, text-based data format
    - Follows JavaScript object syntax
    - Popularized by Douglas Crockford
    - Used mainly for data transfer over a network
    - File extension: .json
    - MIME type: application/json
*/
/* ===================== PARSING =====================
    - Converts JSON string → JavaScript object
    - Input must be valid JSON
*/
JSON.parse(text);

/* ===================== STRINGIFICATION =====================
    - Converts JavaScript object → JSON string
    - Used before sending data over network
*/
JSON.stringify(object);

/* ===================== EXAMPLE ===================== */
const obj = { name: "ravi", age: 25 };

// Convert object to JSON string
const stringifyJson = JSON.stringify(obj);
console.log(stringifyJson);      // {"name":"ravi","age":25}
console.log(stringifyJson[0]);  // '{'

// Convert JSON string back to object
const parsedObj = JSON.parse(stringifyJson);
console.log("parsedObj", parsedObj); // { name: "ravi", age: 25 }
console.log(parsedObj.name);         // ravi


/* ===================== WHAT IS JSON =====================
    - Lightweight data-interchange format
    - Based on subset of JavaScript object syntax
*/
/* ===================== WHY JSON IS NEEDED =====================
    - Data exchanged between browser and server must be text
    - JSON is text-based, lightweight, and language-independent
    - Easily used by any programming language
*/