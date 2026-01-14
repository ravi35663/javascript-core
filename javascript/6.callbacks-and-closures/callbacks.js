/*
=>  Callback Function:
    - A callback function is a function passed as an argument to another function and 
      executed after the completion of that function.

    - Executed after another function finishes execution
    - Commonly used for async operations like:
        DB access, API calls, file reading, image downloading, timers, events, etc.
*/

function calShow(some) {
  console.log(some);
}

function calculate(num1, num2, calShow) {
  const num = num1 + num2;
  calShow(num);
}
calculate(10, 20, calShow);

// Callback with setTimeout (asynchronous)
setTimeout(() => {
  console.log("Will run after 5 second:");
}, 5 * 1000);

// Callback passed to another function
function x(y) {
  console.log("X is called");
  y();
}

x(function y() {
  console.log("Function y is called");
});

/*
Output:
    X is called
    Function y is called
    Will run after 5 second: (after 5 seconds)

    Execution is asynchronous.
    x and y do not wait for setTimeout to finish.
*/
/*
=>  Why do we use callbacks:
    - Enables asynchronous programming in JavaScript
    - Handling async operations (API calls, file read, timers)
    - Event handling (click, change, submit)
    - Code reusability and modularization
    - Used in Higher Order Functions (map, filter, reduce)
    - Used in Promises (.then, .catch)
    - Error handling
*/
/*
=>  Callback Hell:
    - Occurs due to deeply nested callbacks
    - Hard to read, debug, and maintain
    - Error in one callback affects others
    - Also known as "Pyramid of Doom"
*/
/*
=>  Callback execution and main thread
    - Callbacks execute on the main thread
    - Blocking callbacks can freeze the UI
    - Event listeners consume memory and should be removed when not needed
*/

// Why callbacks are needed (async behavior example)
function firstFunction() {
  setTimeout(() => {
    console.log("First function is called after 2 second");
  }, 2000);
}

function secondFunction() {
  console.log("Second function called");
}

firstFunction();
secondFunction();

/*
Output:
Second function called
First function is called after 2 second

JavaScript does not wait for async operations.
Callbacks ensure execution order when required.
*/

// What is Callback Hell (example)
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        async5(function () {
          async6(function () {
            // deeply nested callbacks
          });
        });
      });
    });
  });
});

// Callback inside callback (sequential execution example)
loadScript("/script1.js", function (script) {
  console.log("first script is loaded");

  loadScript("/script2.js", function (script) {
    console.log("second script is loaded");

    loadScript("/script3.js", function (script) {
      console.log("third script is loaded");
      // all scripts loaded
    });
  });
});
