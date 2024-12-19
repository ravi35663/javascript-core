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



/*
==> Closure in Javascript : -
    -> function with its lexical scope form a closure .
    -> A closure gives you access to its outer function’s scope from an inner scope .
    -> In JS closure is created every time a function is created . 
    -> At function creation time closure is created.
    -> We can return function as function.
    -> Function inside a function makes closure (also one definition).
*/

// Example - 1
function x(){
    var a = 10; //lexical scope of y() . This function y is closure
    function y(){
        console.log("Value of a",a);
    }
    y();
}
x();


// Example - 2
function x(){
    var a = 7;
    function y(){
        console.log(a) //This is not a value, it is a reference. That means it will point to updated "a"
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z(); // 100;


/*
===> Uses of Closure :-
    -> Module design
    -> Currying
    -> memoise
    -> Maintaining states in async
    -> SetTimeout
    -> Iterators
        ..etc
*/

/*
==> Settimeout and closures :- 
    -> Javascript waits for nothing.
*/

function x(){
    setTimeout(()=>{
    console.log("Hiii");
},5000)
    console.log("Hello")
}
x();
// Output: 
//     Hello
//     Hii (after 5 second)

function x(){
    for(var i = 0 ; i <= 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i);
    }
}
x();
// output with var: -
// 11 11 11 .....11 (10 times )

function x(){
    for(let i = 0 ; i <= 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i);
    }
}
x();
// Output with let :-
// 0 1 2 3 4 5 6 7 8  ... 10



// If you want to print the same value with var , then use closure instead .
function x(){
	for(var i = 0 ; i <= 10; i++){
        function p(i){ // Here i is new copy its is not a reference of i of for loop
            setTimeout(()=>{
                console.log(i);
            },1000*i);
        }
        p(i);
    }
}		
x();

/*
==> Advantages of closure : - 
    -> Data hiding and encapsulation.
    -> Memoization 

==> Disadvantages of Closure: -
    -> Over memory consumption.
    -> if closure does not deal properly then it causes memory leak issues.
*/