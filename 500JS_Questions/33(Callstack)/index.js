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
