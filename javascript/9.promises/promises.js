// ======================= PROMISE =======================
/*
-   A Promise is an object that represents a value which may be available now,
    in the future, or never. 
-   It can be in one of three states:
    1) Pending
    2) Fulfilled
    3) Rejected
*/
// ======================= CREATE PROMISE (WAY 1) =======================
let val = 10;

const promise1 = new Promise((resolve, reject) => {
  if (val <= 10) {
    resolve("Value is less than and equal to 10");
  } else {
    reject("Value is greater than 10");
  }
  // Last line will called even the promise is going to be rejected/resolved
  console.log("Inside the promise <><<>>>");
});

promise1.then(res => {
    console.log("Promise is resolved:", res);
}).catch(err => {
    console.log("Promise is rejected with error:", err);
});

// ======================= CREATE PROMISE (WAY 2) =======================
let val2 = 20;
const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Promise is resolved after 5 seconds");
  }, 5000);
});

promise2.then(res => {
  console.log("Resolved:", res);
});

// ======================= WHY PROMISES =======================
/*
Promises handle asynchronous operations and avoid callback hell,
making code cleaner and more readable.
*/

// ======================= PROMISE RULES =======================
/*
    1) Promise must have a .then() method
    2) Pending → Fulfilled OR Rejected
    3) Once settled, state cannot change
    4) Settled value cannot change
*/

// ======================= PROMISE CHAINING =======================
let pro = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

let data = pro.then(result => {
    console.log(result); // 1
    return result * 2;
}).then(result => {
    console.log(result); // 2
    return result * 3;
}).then(result => {
    console.log(result); // 6
    return result * 4;
});

console.log("Data is", data); // Promise <pending>

// ======================= PROMISE.ALL =======================
Promise.all([Promise1, Promise2, Promise3])
  .then(result => console.log(result))
  .catch(error => console.log(`Error in promises ${error}`));
// Order of results is same as input order

// ======================= PROMISE.RACE =======================
var p1 = new Promise(resolve => {
  setTimeout(resolve, 500, "one");
});

var p2 = new Promise(resolve => {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(value => {
  console.log(value); // "two"
});

// ======================= PROS & CONS =======================
/*
Pros:
- Avoids callback hell
- Clean sequential async code
- Parallel execution with Promise.all
- Better error handling

Cons:
- Slightly complex
- Needs polyfill for older browsers
*/

// ======================= PROMISE NOTES =======================
/*
- async always returns a promise
- Use .then, .catch, .finally
- Promise chaining requires return in each .then
- Only one .catch needed
- resolve/reject can be called only once
- Settled = resolved or rejected
*/

// ======================= PROMISE PRODUCER & CONSUMER =======================
const availableProducts = ["shoes", "pant", "shirt"];

const checkAvailability = (item) => {
  return new Promise((resolve, reject) => {
    if (availableProducts.includes(item)) {
      resolve(`${item} is available`);
    } else {
      reject(new Error(`${item} does not available`));
    }
  });
};

checkAvailability("shirt").then(res => {
    console.log("Response is", res);
}).then(() => {
    console.log("Payment is made");
}).catch(err => {
    console.log("Error is", err);
}).then(() => {
    console.log("No matter what happened, I'll be called");
});

checkAvailability("jeans").then(res => {
    console.log("Response is", res);
}).catch(err => {
    console.log("Error is", err.message);
});

// ======================= PROMISE APIS =======================
/*
Promise.all       -> Fail fast, runs in parallel
Promise.allSettled-> Returns all settled promises
Promise.race      -> First settled promise wins
Promise.any       -> First resolved promise wins

| Method               | Resolves when              | Rejects when            | Result                            | Failure behavior    |
| -------------------- | -------------------------- | ----------------------- | --------------------------------- | ------------------- |
| `Promise.all`        | **All promises resolve**   | **Any promise rejects** | Array of resolved values          |  **Fail-fast**     |
| `Promise.allSettled` | **All promises settle**    |  Never rejects          | Array of `{status, value/reason}` |  Handles all       |
| `Promise.race`       | **First promise settles**  | First promise rejects   | Value or error of first settled   |  Fastest wins      |
| `Promise.any`        | **First promise resolves** | **All promises reject** | Value of first fulfilled          |  Ignore failures |
*/

// ======================= ASYNC / AWAIT =======================
async function testFunction() {
  console.log("Inside test function");
  const res = await fetch("http://localhost:3000/books");
  console.log("Before Response");
  const user = await res.json();
  console.log("User resolved");
  return user;
}

console.log("Before calling testFunction");
let a = testFunction();
console.log("After calling testFunction");
console.log(a);
a.then(data => console.log("Data is", data));
console.log("Last line of the code");
/*
Key points:
- async returns promise
- await waits for promise
- await only inside async
- Use try/catch for error handling
- Multiple await allowed
- Use Promise.all for parallel execution
*/