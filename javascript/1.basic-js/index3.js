var a = 10;
{
    console.log("Value of a ",a)
    var a = 100; // here a is not new variable it is the reference of previous a
    var b=500
}

console.log("Value of a and b ",a,b); // 100, 500

/*
==> Block Scope & Shadowing in JS :-
    -> {
            console.log(“Hello World”);
            // Block is also known as compound statement.
        }
        {
            console.log(“You can write more than one blocks in JS”);
        }
    -> let & const always placed in separate memory space which is known as block. 
    -> Because of the above statement, let and const have a block level scope.
*/
/*
==> Shadowing In JS : 
    ->  Shadowing has behavior in block as well as function scope .
    ->  Example .
        var a=100;
        {
            var a = 10; // Shadow of “a” & “this” is known as shadowing & it kept the 
                        // reference of a (above the block)
            var b = 10
            const c = 11
            console.log(“Value of a”,a); ==> 10;
        }
        console.log(“Value of b”,b); // 10;
	    console.log(“Value of a outside the scope”,a); 10;
    ->  Wherever any variable declared with var, it will be in global scope memory 
        irrespective of scope.

==> There is three type of scopes 
    1) Global scope:-    Global Memory
    2) Script Scope:-    
    3) Block Scope:- Where let and const are hoisted in main JS File.(in a in-memory block)

==> Illegal Shadowing : -
    ->  let a = 10;
        {
            var a = 11
        } //Error is : Error (SE) Identifier a has already been declared.
*/

/*
==> Advantages of JS:
    ->  Regardless of where you host javascript code on the client side, it always 
        executes on the client side and reduces a lot of bandwidth and makes execution 
        very fast.
    ->  Javascript is cross-platform language.
    ->  Javascript is dynamic or weak typed language. 
    ->  Both frontend and backend can be designed in JS.
*/
/*
==> require:
    ->  require is used in node.js and follows the commonJs module system. 
    ->  require is used to import modules.
    ->  require is synchronous. It blocks lines of code for execution.
    ->	e.g.
            const fs = require(“fs”);
            const myModule = require(“./myModule”);
*/
/*
==> import:
    -> import is used in the modern javascript environment (ECMAScript).
    -> import supported by browser and also used in some nodeJs versions.
    -> import is also used for importing modules in javascript.
    -> import is asynchronous. E.g it won’t block any line of code.
    ->	e.g.
            import file from “myfile”
            import fs from ‘fs’
*/
/*
==> null Vs undefined: -
    -> "null" represents the intentional absence of any object value. While,  
    -> "undefined" represents a variable that has been declared but has not been assigned 
        a value.
*/
/*
==> Predefined JS functions:-
    -> parseInt(string,radix/base) :- parseInt always returns an integer value of string or NaN.
        const decimal = parseInt(“10”) -> 10
        const decimal2 = parseInt(“10”,10) -> explicitly parse as 10
        const binary = parseInt(“1010”,2) -> 10, parse as Binary (2)
        const hex = parseInt(“1A”,16) -> parse on base 16 value would be 26.
*/
// What is the difference between == and === operators
/**
 * JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. 
    1) Two strings are strictly equal when they have the same sequence of characters, 
       same length and same characters in corresponding positions.

 * 2) Two numbers are strictly equal when they are numerically equal. 
 *    i.e, Having the same number value. There are two special cases in this,
       i) NaN is not equal to anything, including NaN. 
            (
                  -> NaN == NaN     -> false, 
                  -> NaN == 'a'     -> false
                  -> NaN == 2       -> false
            )
       ii) Positive and negative zeros are equal to one another.

   3) Two Boolean operands are strictly equal if both are true or both are false.

   4) Two objects are strictly equal if they refer to the same Object.
      e.g. 
            i)Example 1:
                  let obj = {name:"Ravi"}
                  obj2 = obj
                  obj==obj2 -> true
                  obj === obj2 -> true , because obj and obj2 has same reference:
            2) Example 2:
                  let obj = {name:"Ravi"}
                  obj2 = {...obj}
                  obj2 == obj ==> false. because obj and obj2 has different reference:
                  
   5) Null and Undefined types are not equal with ===, but equal with ==. 
      i.e,  null === undefined  -> false 
            null == undefined   -> true
*/

// Some of the example which covers the above cases,
0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
// [] == [] or [] === [] //false, refer different objects in memory
// {} == {} or {} === {} //false, refer different objects in memory