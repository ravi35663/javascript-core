/*
Primitive data types:
   - Primitive values have no properties or methods.
   - JavaScript has 7 primitive data types:
      1) string    → "any string"
      2) number    → any finite number
      3) boolean   → true or false
      4) null
      5) undefined
      6) bigint    → 10n, BigInt("112")
      7) symbol

Symbol data type:
   - Symbol is a primitive data type introduced in ES6.
   - Used to create unique and immutable values.
   - Commonly used as object property keys.
   - Helps avoid property name conflicts and store metadata.

Create a Symbol:
   - Symbol() can take an optional description for debugging.
   - Description does NOT make the symbol unique.
   - Example:
      const mySymbol = Symbol('description');

Symbol characteristics:
   1) Uniqueness:
      - Every Symbol is unique, even with the same description.
   2) Immutability:
      - Symbol values cannot be changed.
   3) Non-enumerable:
      - Symbol properties do not appear in for...in or Object.keys().
   4) Symbol-keyed properties:
      - Used as object keys to prevent name collisions.

Symbol as object key:
- Example:
    const mySymbol2 = Symbol('mySymbol');
    const myObj = {};
    myObj[mySymbol2] = "Hello, Symbol";
    console.log(myObj[mySymbol2]); // Hello, Symbol

Use case:
   - Used in libraries/frameworks for internal properties or metadata.
   - Prevents accidental overwriting of object properties.
*/
