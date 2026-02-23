// ======================= SETS =======================
/*
1) What is a Set:
    - Set is a collection of unique values
    - Introduced in ES6
    - Maintains insertion order
    - Iterable in insertion order
    - Can store all data types:
        -> Primitive
        -> Objects
        -> Composite data types
*/

// ======================= SET OPERATIONS =======================
let s = new Set();
// add() adds values and ignores duplicates
s.add(10)
 .add(20)
 .add(30)
 .add({ name: "Ravi" })
 .add(true)
 .add([..."1234"])
 .add("SDE")
 .add(null)
 .add(false)
 .add(10); // duplicate ignored
console.log("Set is:", s);

// ======================= SET PROPERTIES =======================
/*
2) size
    - Returns number of unique elements
*/
console.log("Size of the set is:", s.size); // 9

// ======================= DELETE & CLEAR =======================
/*
3) delete(value)
    - Removes specific value from set
*/
s.delete(10);
console.log("Updated set is:", s);

// s.clear(); // Removes all elements

// ======================= SET ITERATORS =======================
/*
4) Iterators (returns SetIterator)
*/
console.log("Values:", s.values());
console.log("Keys:", s.keys());       // Same as values
console.log("Entries:", s.entries()); // [value, value]

// ======================= SET OPERATIONS =======================
/*
5) Common Set operations
    - Union
    - Intersection
    - Difference
    - Subset check
*/

// ======================= WeakSet =======================
/*
1) What is WeakSet
    - WeakSet stores a collection of objects with weak references
    - Objects can be garbage collected if no other references exist
    - Syntax: new WeakSet([iterable])
*/
// Example
var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user);    // true
ws.delete(user); // removes user
ws.has(user);    // false
// ======================= WeakSet vs Set =======================
/*
2) Differences between WeakSet and Set
    - Set holds strong references, WeakSet holds weak references
    - WeakSet allows garbage collection of unused objects
    - Set can store any value, WeakSet stores only objects
    - WeakSet has no size property
    - WeakSet has no clear, keys, values, entries, forEach methods
    - WeakSet is not iterable
*/
// ======================= WeakSet Methods =======================
/*
3) WeakSet methods
    - add(value): Adds object to WeakSet
    - delete(value): Removes object
    - has(value): Checks presence
*/

// Example
var weakSetObject = new WeakSet();
var firstObject = {};
var secondObject = {};

weakSetObject.add(firstObject);
weakSetObject.add(secondObject);
console.log(weakSetObject.has(firstObject)); // true
console.log(weakSetObject.has({}));           // false (new reference)
weakSetObject.delete(secondObject);

// ======================= WeakMap =======================
/*
4) What is WeakMap:
    - WeakMap stores key–value pairs
    - Keys must be objects (weakly referenced)
    - Values can be any type
    - Syntax: new WeakMap([iterable])
*/

// Example
var wm = new WeakMap();
var user = {};
wm.set(user);
wm.has(user);    // true
wm.delete(user); // removes user
wm.has(user);    // false

// ======================= WeakMap vs Map =======================
/*
5) Differences between WeakMap and Map
    - Map holds strong references, WeakMap holds weak references
    - WeakMap keys can be garbage collected
    - Map allows any key type, WeakMap allows only object keys
    - WeakMap has no size property
    - WeakMap has no clear, keys, values, entries, forEach methods
    - WeakMap is not iterable
*/

// ======================= WeakMap Methods =======================
/*
6) WeakMap methods
    - set(key, value): Adds or updates key-value pair
    - get(key): Returns value for key
    - has(key): Checks key existence
    - delete(key): Removes key-value pair
*/

// Example
var weakMapObject = new WeakMap();
var firstObject = {};
var secondObject = {};

weakMapObject.set(firstObject, "John");
weakMapObject.set(secondObject, 100);
console.log(weakMapObject.has(firstObject)); // true
console.log(weakMapObject.get(firstObject)); // John
weakMapObject.delete(secondObject);

// ======================= uneval() =======================
/*
7) What is uneval
    - Creates string representation of object source code
    - It is a top-level function
    - Deprecated and not recommended
*/

// Example
var a = 1;
uneval(a); // "1"
uneval(function user() {}); // "(function user(){})"

// Recommended alternative
function user() {}
console.log(user.toString()); // "(function user(){})"

// ======================= encodeURI() =======================
/*
8) Encode URL
    - encodeURI() encodes complete URI
    - Does not encode reserved characters: / ? : @ & = + $ #
*/

var uri = "https://mozilla.org/?x=шеллы";
var encoded = encodeURI(uri);
console.log(encoded);

// ======================= decodeURI() =======================
/*
9) Decode URL
    - decodeURI() decodes encoded URI back to original form
*/

try {
  console.log(decodeURI(encoded));
} catch (e) {
  console.error(e);
}