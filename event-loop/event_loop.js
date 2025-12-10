/*
===> Event-Loop:
    ->  Whenever a JS program is run, a “global execution context is created” in the call 
        stack.
    ->  setTimeout, DOMAPIs, fetch, localStorage, console, location 
    ->  All the above things are not the part of the JS, these are the part of the browser 
        and in node these are the part of V8 engine
    ->  Event loop has one job to do which is continuously monitor call stack and callback 
        queue and micro-task queue.
    ->  When callback comes to queue (callback Queue), event loop send it to call stack to 
        execute.
    ->  setTimeout(()=>{
	        console.log(“Hello World”);
        },5000)
    ->  Callback queue is required because at every single time there are so many callbacks stored in 
        the queue.
*/
/*
===> How Fetch Works:
    console.log(“Start”)
    
    setTimeout(function CBT()=>{
        console.log(“CB Timeout”)
    },5000)
    
    fetch(“some_url”).then(function CBF()=>{ // This function took 50ms
        console.log(“CB Netflix ”);
    })
    
    console.log(“End”);
    
    Output : -
        Start
        End
        CB Netflix
        CB Timeout

    ->  Priority of the microtask queue is higher than the callback queue.
    ->  'All the callbacks from promises will go to the "microtask queue".'
    ->  The callbacks from event listener (DOM APIs & setTimeout) will go to the callback 
        queue.
    ->  Callback queue is also known as task queue
    ->  Event loop is gate keeper for task queue and microtask queue.
    ->  When all the callbacks from microtask queue are executed then the event loop will 
        execute callbacks of task queue or callback queue .
*/

/*
==> Starvation:
    ->  When one callbacks of microtask queue open up more than one callback, in this 
        situation the callbacks of callback queue or task queue never get the opportunity 
        to execute their own callback. Hence this situation is known as starvation .
*/
/*
Note:
    ->  SetTimeout does not always wait for a given period of time .
    ->  Event loop only get callbacks from “task queue” or “call stack” queue when the 
        microtask queue is empty. In this scenario setTimeout gets executed after some 
        delay
*/