//What is a promise
/**
  A promise is an object that may produce a single value some time in the future with 
  either a resolved value or a reason that it’s not resolved(for example, network error). 
  It will be in one of the 3 possible states: fulfilled, rejected, or pending.
*/
// How to create promise?
/*
    let val = 10;
    const promise = new Promise((resolve,reject)=>{
        if(val <= 10){
            resolve("Value is less than and equal to 10");
        }else{
            reject('Value is greater than 10');
        }
        console.log("Inside the promise <><<>>>")
    })

    promise.then(res=>{
        console.log("Promise is resolved:",res);
    }).catch(err=>{
        console.log("Promise is rejected with error:",err);
    }) 
*/
// Way 2:
/*
    let val = 20;
    const promise = new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Promise is resoled after 5 seconds");
        },5000);  
    },(reject)=>{});

    promise.then(res=>{
        console.log("Resolved:",res);
    })
*/
//Why do you need a promise
/*
 Promises are used to handle asynchronous operations. They provide an alternative 
 approach for callbacks by reducing the callback hell and writing the cleaner code.
*/

//What are the three states of promise
/*
    *Pending: This is an initial state of the Promise before an operation begins
    *Fulfilled: This state indicates that the specified operation was completed.
    *Rejected: This state indicates that the operation did not complete. 
               In this case an error value will be thrown.
*/

//What are the main rules of promise
/**
 A promise must follow a specific set of rules:
    1) A promise is an object that supplies a standard-compliant .then() method
    2) A pending promise may transition into either fulfilled or rejected state
    3) A fulfilled or rejected promise is settled and it must not transition into any other state.
    4) Once a promise is settled, the value must not change.
*/

//What is promise chaining
/*
 The process of executing a sequence of asynchronous tasks one after another using 
 promises is known as Promise chaining. 
 Let's take an example of promise chaining for calculating the final result,
*/
let pro = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });

data=pro.then(function (result) {
    console.log(result); // 1
    return result * 2;
})
.then(function (result) {
    console.log(result); // 2
    return result * 3;
})
.then(function (result) {
    console.log(result); // 6
    return result * 4;
});
console.log("Data is ",data);// return a promise<pending>
/*
    In the above handlers, the result is passed to the chain of .then() handlers with 
    the below work flow, The initial promise resolves in 1 second, After that .then 
    handler is called by logging the result(1) and then return a promise with the value 
    of result * 2. After that the value passed to the next .then handler by logging 
    the result(2) and return a promise with result * 3.
    Finally the value passed to the last .then handler by logging the result(6) and 
    return a promise with result * 4.

*/


//What is promise.all
/*
 Promise.all is a promise that takes an array of promises as an input (an iterable), 
 and it gets resolved when all the promises get resolved or any one of them gets rejected. 
 For example, the syntax of promise.all method is below,
 
*/
Promise.all([Promise1, Promise2, Promise3])
.then((result) => {   console.log(result) }) 
.catch(error => console.log(`Error in promises ${error}`))
//Note: Remember that the order of the promises(output the result) is maintained as per input order.

//What is the purpose of the race method in promise
/*
 Promise.race() method will return the promise instance which is firstly resolved 
 or rejected. Let's take an example of race() method where promise2 is resolved 
 first
*/

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
});
  
Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

//What are the pros and cons of promises over callbacks
/*
    Below are the list of pros and cons of promises over callbacks,
    *Pros:
        -> Promises avoid callback hell which is almost unreadable.
        -> Easy to write sequential asynchronous code with .then()
        -> Easy to write parallel asynchronous code with Promise.all()
        -> Solves some of the common problems of callbacks 
        (call the callback too late, too early, too many times and swallow errors/exceptions)
    
    *Cons:
        -> It make little complex code.
        -> you have to write polyfill if ES6 is not supported
*/
/*
    Promise:
    -> Until the promise is not resolve or rejected, it will be in pending state
    -> async always return promise
    -> we can handle promise be using await, .then (in case of resolve), .catch(in case of reject), .finally(used in both cases)
    -> .then().then().then() ....and so on -> this is known as promise chaining
    ->  whenever you have promise chain then you must have to return response in each .then
    ->  there would be multiple .then but only one .catch
    ->  we can be return any data or any promise that can be resolved
    ->  if you return promise then you can use .then in next chain
    ->  if there promise chain that can be any big then whenever any error found in any chain it will catch in .catch method 
    ->  we cannot call resolve or reject twice in the same promise
    ->  settled means either rejected or resolved
    ->  In javascript, Promise is an object which may not be available yet , but will be resolved/rejected in future 
        at some point of time.
    ->  Promises are used to handle asynchronous operations such as fetching data from the server or reading files 
        from disks etc.
    ->  A Promise has three states:
        -> Pending (It is initial state of the promise)
        -> Fulfilled (When promise is resolved )
        -> Rejected (When Promise is rejected)
    -> Always use async while returning any promise
    -> Creation of Promise 
	    new Promise(function (resolve , reject){ // Here function is a CB function
		    // Some codes
        })
    -> Handling Promises: 
        const myPromise = new Promise((resolve, reject) => {
            // Asynchronous operation
            setTimeout(() => {
                const randomNum = Math.random();
                if (randomNum < 0.5) {
                    resolve(randomNum);
                } else {
                    reject(new Error('Random number is greater than or equal to 0.5'));
                }
            }, 1000);
        });

    myPromise.then((value) => {
        console.log(`Resolved with value: ${value}`);
    }).catch((error) => {
        console.error(`Rejected with error: ${error}`);
    });
    -> promise.then() // Run when promise is resolved 
    -> promise.catch() // Run when promise is rejected
    -> promise.finally() // Run Either promise is resolved or rejected
*/


// Create promise
const availableProducts = ['shoes','pant','shirt']

// Producer of promise 
const checkAvailability = (item)=>{
    // Creation of promise
    const pro = new Promise((resolve,reject)=>{
        if(availableProducts.includes(item)){
            resolve(`${item} is available`)
        }else{
            const err = new Error(`${item} does not available`)
            reject(err)
        }
    })
    return pro
}

// Consumer of promise
checkAvailability('shirt').then(res=>{
    console.log("Response is.",res)
}).then(function (){
    //make payment in here
    console.log("Payment is made")
})// below catch handle all the errors of the above then
.catch(err=>{
    console.log("Error is ",err)
})
.then(()=>{
    console.log("No matter what happened , I'll called")
})



checkAvailability('jeans').then(res=>{
    console.log("Response is.",res)
}).catch(err=>{
    // this is gracefully handling error
    console.log("Error is ",err.message)
})


// Promise APIs
/*
    Promise.all([p1,p2,p3,p4])
    -> .all will return a single promise collectively of all promises if promises are resolved
    -> as soon as any promise is rejected the .all will throw you an error and it stop the execution of other promises
    -> .all run promises in parallel.
        p1 -> take 5 sec
        p2 -> take 2 sec
        p3 -> take 1 sec
        here with .all , all promises will resolved in 5sec
    -> we can also called it fail fast technique
*/
/*
    Promise.allSettled([p1,p2,p3,p4])
    -> .allSettled will return a promise which have all resolved/rejected promises 
    -> everything run in parallel in .allSettled
    -> settled means either rejected or resolved
*/
/*
    Promise.race([p1,p2,p3])
    -> as soon as any promise is resolved/rejected, it give you the first 
       resolved/reject promise
    -> whatever promise settled first (first win) will return first
*/
/*
    Promise.any([p1,p2,p3])
    -> as soon as any promise is resolved, it give you the first 
       resolved promise
    -> whatever promise settled first (first win) will return first
    -> it will wait to resolve any promise
    -> if all promise is rejected then it will throw an error which will aggregate 
       of all error in array of all promises.
    -> seeking for first success promise
*/

/*
===> Note:
    -> Always use promises when you are using async code or blocking code .
    -> A promise is an object that return a value in the future 
    -> Callback hell can be removed by using promises .
    -> Promise chaining : -
            anyPromise().then(//return a promise)
            .then(//return a promise)
            .then(//return a promise)
            .catch(//error)
    -> Functions running in parallel with other functions are known as asynchronous running
    -> Call Stack is also known as main thread 
*/
/*
===> Async Await : -
    -> async function always return promise 
    -> e.g
        async function testFunction(){
            console.log(“Inside test function”)
            const res = await fetch(“http://localhost:3000/books”);
            console.log(“Before Response”)
            const user = await res.json();
            console.log(“User resolved”)
            return user;
        }
        console.log(“Before calling testFunction”)
        let a = testFunction();
        console.log(“After calling testFunction ”);
        console.log(a)
        a.then(data=>console.log(“Data is ”,data));
        console.log(“Last line of the code”);

        Output :- 
            -> Before Calling testFunction
            -> Inside test function  
            -> After Calling test function (Promise in pending state)
            -> Promise is <pending> 
            -> Last line of code 		
            -> Before Response 
                -> User resolved
                ->  Data is {user_data}
*/
/*
    -> async/await makes promise easier to write 
    -> async function always return promise 
    -> await block the line unless the that line has not resolved or rejected
    -> await wait for a promise to be return 
    -> await can only be used inside async function
    -> e.g. async function funName1 () {
                // Line of code 
            }

    async function funName2 (){
        // Line of code 
    }

    async function doManyThings (){
        const res_1 = await funName1(); 
        const res_2 = await funName2();
    }
    -> Best way to call doManyThings function is : -
    try{ // If try catch is in async function
            await doManyThings();
    }catch(err){
        console.log(“Error while calling doManyThings”,err);
    }

    -> doManyThings().then(res=>console.log(“Response is ”,res))
        .catch(err=>console.log(“Error is”,err))
    -> await blocks the execution within the async function.
    -> There can be multiple await inside an async function. 
    -> Whenever you use async await , always use try catch to handle proper error
    -> await always waiting for a single promise to be returned
    -> Any function that returns a promise is known as an async function .
    -> If the output of a line depends on the output of another line then use await with that function .
    -> To run multiple promises in parallel , use Promise.all(<Promise array>)  
*/