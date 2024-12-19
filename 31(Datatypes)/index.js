//What are primitive data types
/*
    A primitive data type is data that has a primitive value (which has no properties or methods). 
    There are 7 types of primitive data types.

    1) string: ("any string")
    2) number: (any finite number)
    3) boolean: (true or false)
    4) null
    5) undefined
    6) bigint: num = 10n (this will become bigint): BigInt("112")
    7) symbol: 
*/

// Symbol datatype :
/*
    In JavaScript, the Symbol data type is a unique and primitive data type introduced in ECMAScript 6 (ES6). 
    It is used to create unique and immutable values that can be used as property keys in objects. 
    Symbols are typically used for creating non-enumerable object properties or for associating metadata
    with an object.
*/

const mySymbol = Symbol('description');
/*
    The Symbol function can take an optional string parameter called the symbol's description, which is used 
    for debugging and making it easier to distinguish symbols. 
    However, the description does not make the symbol itself unique.
*/
//Here are some key characteristics of Symbol:
/*
    1) Uniqueness: Each Symbol value is unique; no two symbols created with the same description are equal, even if the descriptions are the same.
    2) Immutability: Once a Symbol is created, it cannot be changed. This means you cannot add or modify properties on a symbol.
    3) Non-enumerable: Symbol properties are non-enumerable, which means they won't appear in for...in loops or when using Object.keys().
    4) Symbol-keyed Properties: Symbols are often used as keys for object properties to ensure uniqueness and to avoid accidental property name collisions.

*/

const mySymbol2 = Symbol('mySymbol');
const myObj = {};
myObj[mySymbol2] = "Hello, Symbol";
console.log(myObj[mySymbol2]); // Output: Hello, Symbol! 

/*
    Symbols are commonly used in JavaScript libraries and frameworks to define special, non-enumerable properties, 
    such as internal methods or metadata, without the risk of naming conflicts. 
    They help prevent accidental overwriting of properties and make it easier to work with object metadata.

*/