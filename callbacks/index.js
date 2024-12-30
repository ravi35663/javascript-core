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

/*
==> Callback : -
    ->  Because of callbacks , we do asynchronous things in JS.
    ->  Whatever cb executed in the program , it executed in the main-thread.
    ->  Blocking the main thread means some line of the code takes too much time to execute at that 
        period of time it blocks the main thread because everything in Javascript runs in main until 
        we separate the threads.
    ->  Event listeners are very heavy. i.e it took memory hence we remove them once the job of the 
        event listener is completed.
*/
// What is a callback function
/*
 A callback function is a function passed into another function as an argument. 
 This function is invoked inside the outer function to complete an action. 
 Let's take a simple example of how to use callback function
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

  //What is an event loop
/*
    The event loop is a process that continuously monitors both the call stack and the event queue and checks 
    whether or not the call stack is empty. If the call stack is empty and there are pending events in the 
    event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. 
    The call stack executes the event, and any additional events generated during the execution are added to 
    the end of the event queue.

    Note: The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is 
    single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels 
    are multi-threaded, they can handle multiple operations executing in the background.
*/

//What is call stack
/*
    Call Stack is a data structure for javascript interpreters to keep track of function 
    calls(creates execution context) in the program. 
    It has two major actions,

    1) Whenever you call a function for its execution, you are pushing it to the stack.
    2) Whenever the execution is completed, the function is popped out of the stack.
*/

//Let's take an example and it's state representation in a diagram format
function hungry() {
    eatFruits();
}
function eatFruits() {
    return "I'm eating fruits";
}

// Invoke the `hungry` function
hungry();
/*
    The above code processed in a call stack as below,
    1) Add the hungry() function to the call stack list and execute the code.
    2) Add the eatFruits() function to the call stack list and execute the code.
    3) Delete the eatFruits() function from our call stack list.
    4) Delete the hungry() function from the call stack list since there are no items anymore.
*/

//What is an event queue
/*
    The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. 
    It is also known as the Callback Queue or Macrotask Queue.

    Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, 
    Web API executes it and awaits the result. Once it is finished, it moves the callback into the event 
    queue (the callback of the promise is moved into the microtask queue).

    The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty 
    and there is a callback in the event queue, the event loop moves the callback into the call stack. 
    But if there is a callback in the microtask queue as well, it is moved first. 
    The microtask queue has a higher priority than the event queue.
*/

//What is a decorator (Learn in deep)
/*
    A decorator is an expression that evaluates to a function and that takes the target, name, and decorator 
    descriptor as arguments. Also, it optionally returns a decorator descriptor to install on the target 
    object. 
    Let's define admin decorator for user class at design time,
*/

function admin(isAdmin) {
    return function(target) {
        target.isAdmin = isAdmin;
    }
 }
 
@admin(true)
class User{
}
console.log(User.isAdmin); //true

@admin(false)
class User{
}
console.log(User.isAdmin); //false
