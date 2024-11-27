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