console.log(String.prototype.trimLeft.name === "trimLeft"); //false
console.log(String.prototype.trimLeft.name === "trimStart"); // true

/*
    In order to be consistent with functions like String.prototype.padStart, 
    the standard method name for trimming the whitespaces is considered as trimStart. 
    Due to web compatibility reasons, the old method name 'trimLeft' still acts as an alias 
    for 'trimStart'. 
    Hence, the prototype for 'trimLeft' is always 'trimStart'
*/

console.log(Math.max()); // -Infinite
console.log(Math.max(10)); // 10
/*
    -Infinity is the initial value because almost every other value is bigger. 
    So when no arguments are provided, -Infinity is going to be returned. 
    *Note: Zero number of arguments is a valid case.
*/

console.log(10 == [10,10]); // false
console.log(10 == [10]); // true
console.log(10 == [[[[[[[10]]]]]]]); // true
/*
    As per the comparison algorithm in the ECMAScript specification(ECMA-262), 
    the above expression converted into JS as below

    10 === Number([10].valueOf().toString()); // 10

    So it doesn't matter about number brackets([]) around the number, it is always converted 
    to a number in the expression.
*/

console.log(10 + "10"); // 1010
console.log(10 - "10"); // 0
/*
    The concatenation operator(+) is applicable for both number and string types. 
    So if any operand is string type then both operands concatenated as strings. 
    Whereas subtract(-) operator tries to convert the operands as number type.
*/


console.log([0] == false); // true
console.log([1] == false); // false
if ([0]) { // this is an array having 1 element which is 0
  console.log("I'm True"); 
} else {
  console.log("I'm False");
}

/*
    Output:
        true
        false
        I'm True
*/
/*
    In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) 
    which is resolved to false. Whereas [0] just becomes a truthy value without any conversion 
    because there is no comparison operator.
*/

console.log([1,2]+[3,4])// '1,23,4'
console.log([1,2]+[,3,4]) // '1,2,3,4'
/*
    The + operator is not meant or defined for arrays. So it converts arrays into strings and 
    concatenates them.
*/

const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
/*
    Output: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
*/
/*
    Since Set object is a collection of unique values, it won't allow duplicate values in the 
    collection. At the same time, it is case sensitive data structure.
*/

console.log(NaN === NaN);//false
/*
    JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for 
    floating-point numbers.
*/

let numbersNaN = [1, 2, 3, 4, NaN];
console.log(numbersNaN.indexOf(NaN)); // -1
/*
    The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to 
    false for strict equality. Since indexOf won't be able to find NaN inside an array, 
    it returns -1 always. But you can use Array.prototype.findIndex method to find out the 
    index of NaN in an array or You can use Array.prototype.includes to check if NaN is 
    present in an array or not.

    let numbers = [1, 2, 3, 4, NaN];
    console.log(numbers.findIndex(Number.isNaN)); // 4
    console.log(numbers.includes(NaN)); // true
*/


/*
    let [a, ...b,] = [1, 2, 3, 4, 5];
    console.log(a, b);
    
    When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. 
    If you remove the trailing comma then it displays 1st answer
    let [a, ...b] = [1, 2, 3, 4, 5];
    console.log(a, b); // 1, [2, 3, 4, 5]
*/

async function func() {
    return 10;
}
console.log(func());
//Promise { 10 } in Node.js
//Promise {<fulfilled>: 10} in browser/client
/*
Answer: 1
    Async functions always return a promise. But even if the return value of an async 
    function is not explicitly a promise, it will be implicitly wrapped in a promise. 
    The above async function is equivalent to below expression,
*/

async function func() {
    await 10;
}
console.log(func());
//Promise {pending} in node 
//Promise {<resolved>: undefined} in browser
/*
    The await expression returns value 10 with promise resolution and the code after 
    each await expression can be treated as existing in a .then callback. 
    In this case, there is no return expression at the end of the function. 
    Hence, the default return value of undefined is returned as the resolution of the 
    promise. 
    *The above async function is equivalent to below expression,
    
    function func() {
        return Promise.resolve(10).then(() => undefined);
    }
*/