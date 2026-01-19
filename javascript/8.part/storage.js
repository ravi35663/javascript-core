// ======================= LOCAL STORAGE =======================

// ======================= SET ITEM =======================
/*
    - setItem(key, value) is used to store data
    - Values are always stored as strings
*/

let user_name = "Ravi";
window.localStorage.setItem("name", user_name);

// ======================= GET ITEM =======================
/*
    - getItem(key) retrieves stored value
*/
var value = localStorage.getItem("name");
console.log("Value is", value);

// ======================= STORE OBJECT IN LOCAL STORAGE =======================
/*
    - Objects must be converted to string using JSON.stringify()
    - Convert back using JSON.parse()
*/

var person = { name: "ravi", email: "ravi@getnada.com" };
localStorage.setItem("person", JSON.stringify(person));

var str_person = localStorage.getItem("person");
var obj_person = JSON.parse(str_person);

console.log("str_person", str_person);
console.log("Original person", obj_person);

// ======================= REMOVE ITEM =======================
/*
    - removeItem(key) removes a specific key
*/
localStorage.removeItem("name");

// ======================= STORAGE LENGTH =======================
/*
    - length returns total number of keys
*/
console.log(localStorage.length);
// ======================= CLEAR LOCAL STORAGE =======================
/*
    - clear() removes all stored data
*/
localStorage.clear();
// ======================= IMPORTANT NOTES =======================
/*
    1) Local and Session Storage store only string values
    2) Minimum localStorage capacity is ~5MB (device dependent)
    3) Storage is shared by same origin (protocol + host + port)
    4) Session storage max size is ~5MB
    5) Session storage data is cleared when tab/browser is closed
    6) Local storage data never expires unless manually removed
    7) Session storage data is not sent with network requests like cookies
    8) Session starts when user visits app and ends when user leaves
    9) localStorage returns key-value pair object
    10) Local and Session storage APIs work the same way
*/
