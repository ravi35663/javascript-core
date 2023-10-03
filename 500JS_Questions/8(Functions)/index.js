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

