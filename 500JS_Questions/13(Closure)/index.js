// What are closures
/*
 A closure is the combination of a function and the lexical environment within 
 which that function was declared. 
 i.e, It is an inner function that has access to the outer or enclosing function’s 
 variables. The closure has three scope chains
    1) Own scope where variables defined between its curly brackets
    2) Outer function’s variables
    3) Global variables
*/

function Welcome(name){
    var greetingInfo = function(message){
        console.log(message+" "+name);
    }
    return greetingInfo;
}

var myFunction= Welcome("Ravi");
myFunction("Hello"); // Hello Ravi
myFunction("Welcome") // Welcome Ravi

/*
 As per the above code, the inner function(i.e, greetingInfo) has access to the 
 variables in the outer function scope(i.e, Welcome) even after the outer 
 function has returned.
*/

