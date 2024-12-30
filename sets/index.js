//What is a WeakSet
/*
    WeakSet is used to store a collection of weakly(weak references) held objects. 
    *The syntax would be as follows,
    *new WeakSet([iterable]);
*/
/*
    *Let's see the below example to explain it's behavior,
*/
var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user); // true
ws.delete(user); // removes user from the set
ws.has(user); // false, user has been removed

//What are the differences between WeakSet and Set
/*
    The main difference is that references to objects in Set are strong while references to objects 
    in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other 
    reference to it. 
    *Other differences are,
    1) Sets can store any value Whereas WeakSets can store only collections of objects
    2) WeakSet does not have size property unlike Set
    3) WeakSet does not have methods such as clear, keys, values, entries, forEach.
    4) WeakSet is not iterable.
*/

//List down the collection of methods available on WeakSet
/*
    *Below are the list of methods available on WeakSet,
        1) add(value): A new object is appended with the given value to the weakset
        2) delete(value): Deletes the value from the WeakSet collection.
        3) has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.
    
    *Let's see the functionality of all the above methods in an example,
*/
var weakSetObject = new WeakSet();
var firstObject = {};
var secondObject = {};
// add(value)
weakSetObject.add(firstObject);
weakSetObject.add(secondObject);
console.log(weakSetObject.has(firstObject)); //true
console.log(weakSetObject.has({}))// false, because {} treated as new variable (new reference)
weakSetObject.delete(secondObject);

//What is a WeakMap
/*
    The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. 
    In this case, keys must be objects and the values can be arbitrary values. 
    The syntax is looking like as below,
    *new WeakMap([iterable]);
*/

//Let's see the below example to explain it's behavior,
var ws = new WeakMap();
var user = {};
ws.set(user);
ws.has(user); // true
ws.delete(user); // removes user from the map
ws.has(user); // false, user has been removed

//What are the differences between WeakMap and Map
/*
    The main difference is that references to key objects in Map are strong while references to key 
    objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is 
    no other reference to it. Other differences are,
    1) Maps can store any key type Whereas WeakMaps can store only collections of key objects
    2) WeakMap does not have size property unlike Map
    3) WeakMap does not have methods such as clear, keys, values, entries, forEach.
    4) WeakMap is not iterable.
*/

//List down the collection of methods available on WeakMap
/*
Below are the list of methods available on WeakMap,
    1) set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
    2) delete(key): Removes any value associated to the key.
    3) has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
    4) get(key): Returns the value associated to the key, or undefined if there is none. Let's see the functionality of all the above methods in an example,
*/
var weakMapObject = new WeakMap();
var firstObject = {};
var secondObject = {};
// set(key, value)
weakMapObject.set(firstObject, "John");
weakMapObject.set(secondObject, 100);
console.log(weakMapObject.has(firstObject)); //true
console.log(weakMapObject.get(firstObject)); // John
weakMapObject.delete(secondObject);

//What is the purpose of uneval
/*
    The uneval() is an inbuilt function which is used to create a string representation of the source 
    code of an Object. It is a top-level function and is not associated with any object. 
    Let's see the below example to know more about it's functionality,
*/
var a = 1;
uneval(a); // returns a String containing 1
uneval(function user() {}); // returns "(function user(){})"

/*
    The uneval() function has been deprecated. It is recommended to use toString() for functions and 
    JSON.toStringify() for other cases.
*/

function user() {}
console.log(user.toString()); // returns "(function user(){})"

//How do you encode an URL
/*
    The encodeURI() function is used to encode complete URI which has special characters except 
    (, / ? : @ & = + $ #) characters.
*/
var uri = "https://mozilla.org/?x=шеллы";
var encoded = encodeURI(uri);
console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B

// How do you decode an URL
/*
    The decodeURI() function is used to decode a Uniform Resource Identifier (URI) previously created 
    by encodeURI().
*/
var uri = "https://mozilla.org/?x=шеллы";
var encoded = encodeURI(uri);
console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
try {
  console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
} catch (e) {
  // catches a malformed URI
  console.error(e);
}

