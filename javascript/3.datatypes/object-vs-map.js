/* ===================== OBJECTS vs MAPS =====================
    - Both store dynamic key–value pairs
*/
/* ===================== 1) CREATION ===================== */
// Object
const gameObj = {
    1: "SUDOKU",
    2: "CHESS"
};
console.log(gameObj);

// Map
const gamesMap = new Map([
    [1, "SUDOKU"],
    [2, "CHESS"]
]);
console.log(gamesMap);

/* ===================== 2) KEY TYPES =====================
    - Object keys are always strings
    - Map keys can be of any type
*/
console.log(gameObj[1], gameObj["1"]); // same
console.log(gamesMap.get(1), gamesMap.get("1")); // different
/*
Note:
    - Keys are unique in both Object and Map
*/
/* ===================== 3) PROTOTYPE KEYS =====================
    - Objects inherit properties from Object.prototype
    - Maps do NOT inherit unwanted keys
*/
const obj = {};
console.log(obj["toString"]); // inherited

const cleanObj = Object.create(null);
console.log(cleanObj["toString"]); // undefined

/*
    - {} → has Object.prototype
    - Object.create(null) → no prototype
*/

/* ===================== 4) ORDER PRESERVATION =====================
    - Objects sort keys (string-based)
    - Maps preserve insertion order
*/

// Object
const gamesObj = { 2: "Tzolkin", 1: "Citadels" };
console.log(Object.keys(gamesObj)); // ["1", "2"]

// Map
const gameMap = new Map([
    [2, "Tzolkin"],
    [1, "Citadels"]
]);
gameMap.set(3, "HongKong");
gameMap.set(4, "Delhi");

for (let key of gameMap.keys()) {
    console.log(key);
}
/* ===================== 5) ACCESS & OPERATIONS ===================== */
// Get value
gamesObj[1];
gamesMap.get(1);

// Check key
gamesMap.has(1);
gamesObj.hasOwnProperty(1);

// Add
gamesMap.set(3, "Catan");
gamesObj[3] = "Catan";

// Delete
gamesMap.delete(1);
delete gamesObj[1];

// Size
console.log(gamesMap.size);
Object.entries(gamesObj).length;


/* ===================== 6) ITERATION ===================== */
// Map iteration
gamesMap.forEach((value, key) => {
    console.log(`${key} - ${value}`);
});
// Object iteration
Object.entries(gamesObj).forEach(([key, value]) => {
    console.log(`${key} - ${value}`);
});

/* ===================== 7) JSON SUPPORT =====================
    - JSON supports Objects
    - JSON does NOT support Maps
*/

JSON.stringify({ 1: "Citadels" }); // works
JSON.stringify(new Map([[1, "Citadels"]])); // {}

/* ===================== FINAL THOUGHTS =====================
    - Objects and Maps both provide O(1) access time
    - Both are used for fast lookups
    - Maps offer cleaner APIs for add/remove operations
    - Prefer Map when keys are dynamic or non-string
*/
/* ===================== CHECK IF KEY EXISTS ===================== */
// Way 1
if ("key" in obj) {}

// Way 2
obj.hasOwnProperty("key");

// Way 3
if (obj.key !== undefined) {}

/* ===================== LOOP THROUGH OBJECT ===================== */
for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key);
    }
}
/* ===================== CHECK EMPTY OBJECT ===================== */
// ES7
Object.entries(obj).length === 0;

// ES5
Object.keys(obj).length === 0;

/* ===================== ARGUMENTS OBJECT =====================
    - Array-like object inside functions
    - Holds passed arguments
*/
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(10, 20, 30, 40));
/* ===================== GET PROTOTYPE ===================== */
const proto = {};
const obj1 = Object.create(proto);
console.log(Object.getPrototypeOf(obj1) === proto);
/* ===================== PROTOTYPE WITH STRING =====================
    - ES5 → TypeError
    - ES2015 → coerced to object
*/
/* ===================== SET PROTOTYPE ===================== */
Object.setPrototypeOf({}, null);

/* ===================== EXTENSIBLE OBJECT ===================== */
const personObj = { name: "Ravi" };
console.log(Object.isExtensible(personObj));

Object.preventExtensions(personObj);
personObj.age = 25; // not added


/* ===================== MAKE OBJECT NON-EXTENSIBLE ===================== */
Object.preventExtensions({});
Object.seal({});
Object.freeze({});


/* ===================== DEFINE MULTIPLE PROPERTIES ===================== */
const newObject2 = {};
Object.defineProperties(newObject2, {
    newProperty1: { value: "John", writable: true },
    newProperty2: {}
});

/* ===================== OBJECT INITIALIZER =====================
    - Also called object literal
*/
const initObject = { a: "John", b: 50, c: {} };
console.log(initObject.a);