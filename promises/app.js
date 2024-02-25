/*
    Promise:
    -> Until the promise is not resolve or rejected, it will be in pending state
    -> async always return promise
    -> we can handle promise be using await, .then (in case of resolve), 
    .catch(in case of reject),.finally(used in both cases)

    -> .then().then().then() ....and so on -> this is known as promise chaining
    -> whenever you have promise chain then you must have to return response in each .then
    -> there would be multiple .then but only one .catch
    -> we can be return any data or any promise that can be resolved
    -> if you return promise then you can use .then in next chain
    -> if there promise chain that can be any big then whenever any error found in any 
    chain it will catch in .catch method 
    -> we cannot call resolve or reject twice in the same promise
    -> settled means either rejected or resolved
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