//What is a Regular Expression
/*
    A regular expression is a sequence of characters that forms a search pattern. 
    You can use this search pattern for searching data in a text. These can be 
    used to perform all types of text search and text replace operations. 
    Let's see the syntax format now,
    ---> /pattern/modifiers; <---
    i.e.
    For example, the regular expression or search pattern with case-insensitive username would be,
    /John/i
*/

//What are the string methods available in Regular expression
/*
    Regular Expressions has two string methods: search() and replace(). 
    The search() method uses an expression to search for a match, and returns 
    the position of the match.
    if match does not found then it will return -1.
*/

const str = "Hi there, This is Ravi Kumar Sharma";
const sub = /RAVI/i// check for case-insensitive
const sub2 = /RAVI/ // check for case-sensitive
console.log(str.search(sub));

//The replace() method is used to return a modified string where the pattern is replaced.
var msg = 'Hello world';
let match = /WORLD/i;
let replace_str = 'Brian' 
var n = msg.replace(match,replace_str); // original msg won't be change ,it just make replica of updated text
console.log("Updated msg: ",n);
console.log("Original msg: ",msg);

//What are modifiers in regular expression
/*
    Modifiers can be used to perform case-insensitive and global searches. 
    Let's list down some of the modifiers,
    MODIFIER	  DESCRIPTION
        i	         Perform case-insensitive matching
        g	         Perform a global match rather than stops at first match
        m	         Perform multiline matching
*/
//Let's take an example of global modifier,
let original_text = 'Hello there, javascript execute multiple tasks one be one without waiting any one task to complete.'
let pattern = /ONE/ig // match for case-insensitive and globally
let pattern2 = /one/g // match for case-insensitive
let ng = original_text.match(pattern);
console.log("Global search is ",ng); //[ 'one', 'one', 'one' ]


//What are regular expression patterns
/*
    Regular Expressions provide a group of patterns in order to match characters. 
    Basically they are categorized into 3 types,

    Brackets: These are used to find a range of characters. 
        For example, below are some use cases,
        [abc]: Used to find any of the characters between the brackets(a,b,c)
        [0-9]: Used to find any of the digits between the brackets
        (a|b): Used to find any of the alternatives separated with |

    Metacharacters: These are characters with a special meaning. 
        For example, below are some use cases,
        \d: Used to find a digit
        \s: Used to find a whitespace character
        \b: Used to find a match at the beginning or ending of a word

    Quantifiers: These are useful to define quantities 
        For example, below are some use cases,
        n+: Used to find matches for any string that contains at least one n
        n*: Used to find matches for any string that contains zero or more occurrences of n
        n?: Used to find matches for any string that contains zero or one occurrences of n

*/

//What is a RegExp object
/*
    'RegExp' object is a regular expression object with predefined properties and 
    methods. 
    Let's see the simple usage of RegExp object,
*/
var regexp = new RegExp("\\w+");
console.log(regexp);
// expected output: /\w+/

//How do you search a string for a pattern
/*
 You can use the test() method of regular expression in order to search a string 
 for a pattern, and return true or false depending on the result.
*/
pattern = /you/
console.log(pattern.test("How are you?")); // true

//What is the purpose of exec method
/*
    The purpose of exec method is similar to test method but it executes a 
    search for a match in a specified string and returns a result array, or 
    null instead of returning true/false.
*/
pattern = /you/;
console.log(pattern.exec("How are you?")); 
//["you", index: 8, input: "How are you?", groups: undefined]