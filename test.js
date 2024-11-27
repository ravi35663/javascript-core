/*
==> Callback Function : -
    -> When a function is passed as an argument to another function and then the function shows the desired result.
    -> A function which is to be executed after another function has finished execution.
    -> Usually callbacks (Async functions ) are used for accessing values from DBs, Downloading Images, reading files etc .  
    -> e.g - 2
*/
function calShow(some){
    console.log(some);
}

function calculate(num1,num2,calShow){ // Here 'calShow' in function an argument to calculate function
    const num = num1 + num2;
    calShow(num); 
}
calculate(10,20,calShow);
setTimeout(()=>{ // this is callback function
    console.log("Will run after 5 second:");
}, 5 * 1000);

function x(y){ // here y is callback function
    console.log("X is called")
    y();
}

x(function y(){
    console.log("Function y is called");
});

/*
    Output: X is called
            function Y is called
            Will run after 5 second: (after 5 second)
    ->  Here execution of the program is happening asynchronously. That is the x and y function not waiting to 
        complete setTimeout function execution .
*/

/*
==> Why do we use callbacks:-
    -> Handling Asynchronous work such as fetching data from server, files reading,
    -> Events handling (such as click event, onchange event ..etc)
    -> Modularization and code reusability such as pass callback as an argument to a function.
    -> Callbacks in HOF (higher order functions such as map, filter, reduce, some, every ..etc)
    -> Promises and asynchronous control flow (used in .then and .catch)
    -> In Error handling 
        ..etc these are some areas where callback functions are used.

===> Callback Hell :-
    -> Callback hell is a big issue in javascript because of code complexity. 
    -> Each and every callback takes an argument that is the result of the previous callback.
    -> Callbacks make nested callbacks which look like pyramids which are hard to read and maintain.
    -> If there is any error occurring in one function then that function will affect the other callbacks. 
    -> Callback hell also known as (AKA) pyramid of doom.
*/