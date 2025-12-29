/*
==> Callback Function : -
    -> When a function is passed as an argument to another function and then the function shows the desired result.
    -> A function which is to be executed after another function has finished execution.
    -> Usually callbacks (Async functions ) are used for accessing values from DBs, Downloading Images, reading files etc .  
    -> e.g - 2
*/
/*
Note:   Callback hell created pyramid of doom where one callback inside another and so on. when you are 
        loose of your control while using callback is known as Inversion of control Callback used to 
        handle async operations in javascript issues with Callback are Callback hell and Inversion of control.

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
    -> Because of callbacks, we do asynchronous things in JS.
    -> Handling Asynchronous work such as fetching data from server, files reading,
    -> Events handling (such as click event, onchange event ..etc)
    -> Modularization and code reusability such as pass callback as an argument to a function.
    -> Callbacks in HOF (higher order functions such as map, filter, reduce, some, every ..etc)
    -> Promises and asynchronous control flow (used in .then and .catch)
    -> In Error handling 
        ..etc these are some areas where callback functions are used.

===> Callback Hell :-
    -> Callback hell is a big issue in javascript because of the code complexity. 
    -> Each and every callback takes an argument that is the result of the previous callback.
    -> Callbacks make nested callbacks which look like pyramids which are hard to read and maintain.
    -> If there is any error occurring in one function then that function will affect the other callbacks. 
    -> Callback hell also known as (AKA) pyramid of doom.
*/
/*
==> Callback : -
    ->  Whatever cb executed in the program, it executed in the main-thread.
    ->  Blocking the main thread means some line of the code takes too much time to execute 
        at that period of time it blocks the main thread because everything in Javascript 
        runs in main until we separate the threads.
    ->  Event listeners are very heavy. i.e it took memory hence we remove them once the 
        job of the event listener is completed.
*/

const callMyName = (name)=>{
    console.log("My name is ",name);
}

function outerFunction(callback){
    let name = 'Ravi'
    callback(name);
}

outerFunction(callMyName);

//Why do we need callbacks
/*
 The callbacks are needed because javascript is an event driven language. 
 That means instead of waiting for a response javascript will keep executing while 
 listening for other events. 
 Let's take an example with the first function invoking an API 
 call(simulated by setTimeout) and the next function which logs the message.
*/
function firstFunction(){
    setTimeout(()=>{
        console.log("First function is called after 2 second");
    },2000)
}

function secondFunction(){
    console.log('Second function called');
}

firstFunction();
secondFunction();

// Output;
// Second function called
// First function called
/*
    As observed from the output, javascript didn't wait for the response of the 
    first function and the remaining code block got executed. So callbacks are used 
    in a way to make sure that certain code doesn’t execute until the other code 
    finishes execution.
*/

//What is a callback hell
/*
 Callback Hell is an anti-pattern with multiple nested callbacks which makes code 
 hard to read and debug when dealing with asynchronous logic. 
 The callback hell looks like below,
*/

async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                async5(function(){
                    async6(function(){
                        // ....
                    })
                })
            })
        })
    })
});

//What is callback in callback
/*
 You can nest one callback inside in another callback to execute the actions 
 sequentially one by one. This is known as callbacks in callbacks.
*/

loadScript("/script1.js", function (script) {
    console.log("first script is loaded");
  
    loadScript("/script2.js", function (script) {
      console.log("second script is loaded");
  
      loadScript("/script3.js", function (script) {
        console.log("third script is loaded");
        // after all scripts are loaded
      });
    });
  });

