try {
    setTimeout(()=>{
        console.log("Inside try block")
        throw new Error("Error in try block")
    },1000)
} catch (error) {
    console.log("Inside catch block",error);
}

// Inside try block, Error in try block
/*
    If you put setTimeout and setInterval methods inside the try clause and an exception is 
    thrown, the catch clause will not catch any of them. 
    This is because the try...catch statement works synchronously, and the function in the 
    above code is executed asynchronously after a certain period of time. 
    Hence, you will see runtime exception without catching the error. 
    To resolve this issue, you have to put the try...catch block inside the function as below,
    *setTimeout(() => {
        try {
            console.log("try block");
            throw new Error(`An exception is thrown`);
        } catch (err) {
            console.log("Error: ", err);
        }
    }, 1000);
    *You can use .catch() function in promises to avoid these issues with asynchronous code.
*/

let a = 10;
if (true) {
  let a = 20;
  console.log(a, "inside");
}
console.log(a, "outside");
/*
    20 inside
    10 outside
*/
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);
// []