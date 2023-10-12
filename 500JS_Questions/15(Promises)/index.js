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
In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,
The initial promise resolves in 1 second,
After that .then handler is called by logging the result(1) and then return a promise with the value of result * 2.
After that the value passed to the next .then handler by logging the result(2) and return a promise with result * 3.
Finally the value passed to the last .then handler by logging the result(6) and return a promise with result * 4.

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