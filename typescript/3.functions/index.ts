/*
=> Function types and signatures:
    ->  Function types and signatures in TypeScript define how functions should be 
        structured, including their parameters and return types.
*/

// Basic Function Type
let greet: (name:string) => void // it is function declaration
// greet is a function which take 1 parameter and return nothing
greet  = function(name: string):void{
    console.log("name is : ",name);
}

let add: (a:number,b:number) => number; // return number
add = function(a:number, b:number):number{
    return a+b;
}
/*
    ==> Function Signatures:
*/
//Function Signature Declaration
function multiply(a:number, b:number): number {
    return a * b
}

// Interface with Function Signature
interface Calculator{
    (a:number,b:number): number;
}

let divide:Calculator;
divide = function (a:number,b:number): number {
    return (a/b);
}
/*
Note: 
    Function types and signatures help ensure that functions are used with the correct 
    arguments and return values.
*/
/*
    Optional and Default parameters:
*/ 
// Optional Parameters: '?' is used to make parameter as optional 
function greets(name:string,greetings?:string) : string{
    return `${greetings || 'Hello'}, ${name}`;
}
greets("Ravi");// Hello, Ravi
greets("Ravi","Hey"); // Hey, Ravi

//Default parameters:
function greetings(name:string, greeting:string='Hello'): string{
    return `${greeting}, ${name}`;
}

greetings("Ravi") // Hello, Ravi
greetings("Ravi","Hey") // Hey, Ravi
  

//You can combine both optional and default parameters:
function greet2(name:string, greeting:string="Hello" ,punctuation?:string):string{
    return `${greeting}, ${name}${punctuation || ""}`
}
greet2("Alice"); // Output: Hello, Alice
greet2("Bob", "Hi", "!"); // Output: Hi, Bob!

//Rest parameters with functions
function numSum(...nums:number[]):number{
    return nums.reduce((total,item)=>{
        total+=item
        return total
    },0)
}

console.log(numSum(1, 2, 3)); // Output: 6
console.log(numSum(4, 5, 6, 7)); // Output: 22

/*
==> Function Overload:
    Function overloads in TypeScript allow a function to have multiple signatures, 
    enabling it to handle different types or numbers of parameters while still being 
    type-safe.
*/

function addItems(a:number,b:number) : number;
function addItems(a:string,b:string) : string;

function addItems(a:any,b:any):any{
    return a+b;
}

let result1 = addItems(5, 10);// Output: 15 (number)
let result2 = addItems("Hello, ", "World!"); // Output: "Hello, World!" (string)

/*
Notes:
    1)  Multiple Signatures: You define multiple function signatures/return type for 
        different parameter types or combinations.
    2)  Implementation: The actual function implementation must be able to handle all 
        overload cases.
    3)  Type Safety: The compiler will enforce the correct usage based on the overloads 
        defined.
*/