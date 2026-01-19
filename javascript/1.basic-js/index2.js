/*
==> Execution Context:
    ->  Everything in javascript happens inside an “Execution Context”:
    ->  Execution context is a block where memory created for the variable and code
        available for the execution.
    ->  when javascript program is run an execution context is created:
    ->  Inside that execution context two thing are available:
        Execution Context:
            1) Memory component/Variable Env.:
                ->  All the variable and functions are stored here (consume memory)
            2) Code Comp. / Thread of Execution:
                ->  Execution of the code happens here (One-Line-At-A-Time)
    
    ->  Javascript is a synchronous single threaded language.
    ->  When Javascript is run, initially memory is assigned to all the variables and 
        functions. that phase is known as memory creation phase or creation phase.
    ->  When function is called (square(10)) an execution context for that function is 
        created and that function pushed into the stack for the execution.
    ->  Once the program/function return something then execution context of that 
        program/function will be deleted and that program/function popped out from the 
        stack.
*/
// Consider one-example for better understanding:
var n = 10
function square(num){
    var ans = num * num;
    return ans;
}

var sq1 = square(10);
var sq2 = square(20);

/*
    Execute above program line-by-line:
    1) Initial phase of main program:
        In the first phase memory part is run and whoever variable declare by var, 
        js assigned undefined to them.
        Memory Phase:                                Code Phase:
            n: undefined (ini.phase)  
            square: function {..} (ini.phase) 
            sq1: undefined (ini.phase)
            sq2: undefined (ini.phase)

    2) Next Phase of main program:
        Memory Phase:                                Code Phase:
            n: undefined -> 4                         -> Executed then n = 4
            square: function {..} (ini.phase)         -> pass
            sq1: undefined (ini.phase) -> 100         -> Executed this line then an new execution context is create for square(10) and after execution of this sq1 = 100
            sq2: undefined (ini.phase) -> 400         -> Executed this line then an new execution context is create for square(20) and after execution of this sq2 = 400
    3) Initial Phase of square(10):   
        Memory Phase:                                Code Phase:
            num: undefined                      
            ans: undefined
    3) Next Phase of square(10):   
        Memory Phase:                                Code Phase:
            num: undefined -> 10                      -> this line executed then
            ans: undefined -> 100                     -> this line executed then
                                                      -> then return line executed and square(10) is popped out from the stack:
    ....Same will be happen to the square(20) function call.
*/

/*
Note:
    ->  When the work is done, the execution context is deleted for that function/program.
    ->  For each function call an execution context is created and when the function call 
        is done, the execution context will be deleted.
    ->  Any program that starts to run, a global execution context is created.
    ->  When any function is called inside the program then that function pushed into the 
        execution context and when the work of that program is done it pops out from the 
        execution context. It follows LIFO (Last in first out)
    ->  Call stack maintains the order of execution of the execution context.
*/
/*
Note:
==> Call stack also known as : -
    1)  Execution Context stack
    2)  Program Stack
    3)  Control Stack
    4)  Runtime Stack
    5)  Machine Stack
*/
/*
Notes:    
    -> Single thread Meaning :- 
        -> run one command at a time
        -> first line executed then it go to next line
    ->  Empty file is a smallest or shortest javascript file. Because a global execution 
        context is created and reserved memory for that context if you run the program.
    ->  Lots of variables and functions are created by-default by JS-Engine.
    ->  At the global level ‘this’ === ‘window’ (On browser)
    ->  anything not inside a function is in a global space.
    ->  var a = 10;
        function name(){
            console.log(a); // 10
        } 
        console.log(this.a) // 10
        console.log(window.a) // 10
        console.log(a) // 10
    ->  JS-Engine create “window” and “this” keyword itself (window only works at client)
    ->  Whenever a execution context is created a lexical environment is also created.
    ->  Lexical environment is local memory along with lexical environment of its parents 
    ->  i.e. it keeps the variables and functions of its parents.
*/
/*
Note:
==> Scope chain and Lexical environment : -
    ->  Global variables are accessible anywhere in the program.
    ->  lexical environment is local memory along with its parent lexical environment.
    ->  i.e 
        var b = 10
        function a(){
            x = 10;
            console.log(b)
    }
    ->  lexical means -> sequence or hierarchy 
    ->  here x is lexically sitting inside a function
    ->  way of finding variables from one local scope to another (parent) then global 
        scope is known as scope chaining .
    ->  lexical == sequence == hierarchy .
*/
/*
==> Garbage Collector : -
    ->  Whenever unused memory is found in the JS Program, the JS Engine will remove that 
        memory by the garbage collector.
*/
/*
==> JS Supports multi-paradigm programming language that support:
    -> Functional programming
    -> Object Oriented programming
    -> Procedural Programming
    -> Prototypal programming
*/
/*
==> “Use Strict” (Strict mode): 
    ->  ‘use strict’ -> define that the JS code will be executed in strict mode.
    ->  With ‘use strict’ you cannot use undefined variables in the scripts.
    ->  Examples : 
            a = 10;
            console.log(“A”,a); // It gives you an error.
    ->  We can use ‘use strict’ in any function, class or any block
    ->  We use ‘use strict’ mode to write secure JS code
    ->  To improve code quality (less error and warnings)
    ->  Deleting a variable is not allowed in ‘strict mode’
        e.g. ‘strict mode’ 
            let x = 10;
            delete x; --> Cause a error
    ->  Deleting a function is not allowed 
    ->  Duplicating a parameter is not allowed.
*/
// ======================= ENCODE & DECODE URL IN JAVASCRIPT =======================
// 1) Encoding and Decoding URL
/*
    - encodeURI() is used to encode a complete URL
    - It takes a URL string and returns an encoded version
    - decodeURI() is used to decode an encoded URL back to its original form
*/

let uri = "employeeDetails?name=john&occupation=manager";

let encodedURI = encodeURI(uri);
let decodedURI = decodeURI(encodedURI);

console.log({ uri, encodedURI, decodedURI });

// ======================= IMPORTANT NOTE =======================
/*
    - encodeURI() does NOT encode reserved characters:
    / ? : @ & = + $ #
    - To encode these characters as well, use encodeURIComponent()
*/