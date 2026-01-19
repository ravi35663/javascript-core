// ======================= REGULAR EXPRESSIONS =======================
// 1) What is a Regular Expression
/*
    - A Regular Expression (RegEx) is a sequence of characters that forms a search pattern
    - Used for searching, matching, and replacing text
    - Commonly used for validation and text processing
    - Syntax:
    /pattern/modifiers

Example:
    - /John/i → case-insensitive match
*/
// ======================= STRING METHODS WITH REGEX =======================
/*
2) String methods that use Regular Expressions
    - search(): returns index of match, or -1 if not found
    - replace(): returns a new string with matched text replaced
*/

const str = "Hi there, This is Ravi Kumar Sharma";
const sub = /RAVI/i; // case-insensitive
const sub2 = /RAVI/; // case-sensitive
console.log(str.search(sub)); // index of match
// ======================= replace() METHOD =======================

var msg = "Hello world";
let match = /WORLD/i;
let replace_str = "Brian";

var n = msg.replace(match, replace_str);

console.log("Updated msg:", n);
console.log("Original msg:", msg); // unchanged

// ======================= REGEX MODIFIERS =======================
/*
3) Modifiers
    i → case-insensitive match
    g → global match (all occurrences)
    m → multiline match
*/

// Global + case-insensitive example
let original_text =
  "Hello there, javascript execute multiple tasks one be one without waiting any one task to complete.";

let pattern = /ONE/ig;
let ng = original_text.match(pattern);
console.log("Global search is", ng); // ['one', 'one', 'one']

// ======================= REGEX PATTERNS =======================
/*
4) Regular Expression patterns
    A) Brackets
    - [abc] → match a, b, or c
    - [0-9] → match digits
    - (a|b) → match a or b

    B) Metacharacters
    - \d → digit
    - \s → whitespace
    - \b → word boundary

    C) Quantifiers
    - n+ → one or more n
    - n* → zero or more n
    - n? → zero or one n
*/
// ======================= RegExp OBJECT =======================
/*
5) RegExp object
    - Built-in object with properties and methods
*/
var regexp = new RegExp("\\w+");
console.log(regexp); // /\w+/

// ======================= test() METHOD =======================
/*
6) test()
    - Searches string for a pattern
    - Returns true or false
*/
pattern = /you/;
console.log(pattern.test("How are you?")); // true

// ======================= exec() METHOD =======================
/*
7) exec()
    - Searches string for a match
    - Returns result array or null
    - Provides match details like index and input
*/
pattern = /you/;
console.log(pattern.exec("How are you?"));
// ["you", index: 8, input: "How are you?", groups: undefined]