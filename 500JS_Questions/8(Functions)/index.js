/*
    Q:What are lambda or arrow functions?
    A: An arrow function is a shorter syntax for a function expression and does 
       not have its own 'this', 'arguments', 'super', or 'new.target'. 
       These functions are best suited for non-method functions, and they cannot 
       be used as constructors.
       Arrow function is also known as lambda function.
       * const arr = ()=>{
       *  console.log("This is arrow function")
       * }
*/

/**
 * Q:What is a first class function?
 * A: In javascript functions are first class objects.First class functions means
 *    when functions in that language are treated like any other variable.
 *    
 * In such a language, a function can be passed as an argument to other functions, 
 * can be returned by another function and can be assigned as a value to a variable. 
 * For example, in the below example, handler functions assigned to a listener
 *  *const handler = () => console.log("This is a click handler function");
    **document.addEventListener("click", handler); 
*/


/*
    Q: What is a first order function?
    A: A first-order function is a function that doesn’t accept another function 
       as an argument and doesn’t return a function as its return value.
       
       *const firstOrder = () => console.log("I am a first order function!");
*/

/*
    Q:What is a higher order function?
    A: A higher-order function is a function that accepts another function as an 
       argument or returns a function as a return value or both.
        *const firstOrderFunc = () =>{
        *    console.log("Hello, I am a First order function");
        *}
        *const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
        *higherOrder(firstOrderFunc);
        * ****map,filter,reduce.etc are example of higher order functions
*/

/*
    Q:What is a unary function?
    A: A unary function (i.e. monadic) is a function that accepts exactly one 
       argument. It stands for a single argument accepted by a function.

       *const unaryFunction = (a) => console.log(a + 10); 
       *unaryFunction(10);
       *Add 10 to the given argument and display the value
*/


/*
    Q: What is the currying function?
    A: Currying is the process of taking a function with multiple arguments and 
       turning it into a sequence of functions each with only a single argument. 
       Currying is named after a mathematician Haskell Curry. 
       By applying currying, an n-ary function turns into a unary function.
        /
            const multiArgFun = (a,b,c)=> (a+b+c);
            console.log(multiArgFun(10,20,30))
            
            const curryUnaryFunction = (a) => (b) => (c)=> a + b + c;
            curryUnaryFunction(1) // 1 + b + c
            curryUnaryFunction(1)(2) // 3 + c
            curryUnaryFunction(1)(2)(3) // 6
        
        /
        Note: Curried functions are great to improve code reusability and functional composition.
*/

/*
  Q:What is pure function?
  A: A Pure function is a function where the return value is only determined by 
     its arguments without any side effects. 
     i.e, If you call a function with the same arguments 'n' number of times and 
     'n' number of places in the application then it will always return the same 
     value.
     
    * Impure
    let numberArray = [];
    const impureAddNumber = (number) => numberArray.push(number);
    
    * Pure
    const pureAddNumber = (number) => (argNumberArray) => argNumberArray.concat([number]);

    * Display the results
    console.log(impureAddNumber(6)); // returns 1
    console.log(numberArray); // returns [6]
    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
    console.log(numberArray); // returns [6]
*/

/**
 * 
 * As per the above code snippets, the Push function is impure itself by altering 
 * the array and returning a push number index independent of the parameter value, 
 * whereas Concat on the other hand takes the array and concatenates it with the 
 * other array producing a whole new array without side effects. Also, the return 
 * value is a concatenation of the previous array.

 * Remember that Pure functions are important as they simplify unit testing without 
   any side effects and no need for dependency injection. They also avoid tight 
   coupling and make it harder to break your application by not having any side 
   effects. These principles are coming together with the Immutability concept of 
   ES6: giving preference to const over let usage.
*/

//How do you sort elements in an array
/*
    The sort() method is used to sort the elements of an array in place and returns the sorted array. 
    The example usage would be as below,
*/
var months = ["Aug", "Sep", "Jan", "June"];
months.sort();
console.log(months); //  ["Aug", "Jan", "June", "Sep"]

//What is the purpose of compareFunction while sorting arrays
/*
    The compareFunction is used to define the sort order. If omitted(left), the array elements are converted 
    to strings, then sorted according to each character's Unicode code point value. 
    Let's take an example to see the usage of compareFunction,
*/

let numbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a);
console.log(numbers); // [5, 4, 3, 2, 1]
numbers.sort((a, b) => a - b); 
console.log(numbers) // [1,2,3,4,5]

// To reverse an array:
numbers.reverse(); //[5, 4, 3, 2, 1]

//How do you find min and max value in an array
/*
    You can use Math.min and Math.max methods on array variables to find the minimum and maximum elements 
    within an array. 
    Let's create two functions to find the min and max value with in an array,
*/
var marks = [50, 20, 70, 60, 45, 30,70];
function findMax(arr){
    // here null for no context
    return Math.max.apply(null,arr);
}

function findMin(arr){
    return Math.min.apply(null,arr);
}

console.log("Max number is :",findMax(marks));
console.log("Min number is :",findMin(marks));

//How do you find min and max values without Math functions
function findMaxElement(arr){
    let max = -Infinity;
    let index = 0;
    while(arr[index]!=undefined){
        if(arr[index] > max){
            max = arr[index];
        }
        index++;
    }
    return max;
}

function findMinElement(arr){
    let min = Infinity;
    let index = 0;
    while(arr[index]!=undefined){
        if(arr[index] < min){
            min = arr[index];
        }
        index++;
    }
    return min;
}
//What is an empty statement and purpose of it
/*
    The empty statement is a semicolon (;) indicating that no statement will be executed, even if JavaScript 
    syntax requires one. Since there is no action with an empty statement you might think that it's usage 
    is quite less, but the empty statement is occasionally useful when you want to create a loop that has 
    an empty body. 
    For example, you can initialize an array with zero values as below,
*/
let a = [];
// Initialize an array a
for(let i=0;i<10;a[i++]=0);
console.log(a);

//How do you get metadata of a module
/*
    You can use the import.meta object which is a meta-property exposing context-specific meta data to a 
    JavaScript module. It contains information about the current module, such as the module's URL. 
    In browsers, you might get different meta data than NodeJS.

    <script type="module" src="welcome-module.js"></script>;
    console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }
*/
