/*
=> Debouncing
    -   Debouncing is a performance optimization technique where a function execution
        is delayed until a certain amount of inactivity has passed.

Key points:
    -> Improves performance by reducing unnecessary function calls
    -> In search inputs, API is called only when the user stops typing
    -> Useful for scroll events, resize events, and lazy loading
*/

let counter = 0;

// Debounce utility function
const debounce = (func, delay) => {
  let timerId; // stores timeout id

  return function (...args) {
    // Clears previous timer so function does not execute repeatedly
    clearTimeout(timerId);

    // If user keeps triggering the function within delay time,
    // the timeout is reset and function execution is postponed
    timerId = setTimeout(() => {
      func.apply(this, args); // preserves context and arguments
    }, delay);
  };
};

// Function to be executed after debouncing
function performSearch(value) {
  // API call or search logic goes here
  console.log("Searching...", counter++);
  console.log("value", value);
}

// Debounced version of performSearch
// This function is called on every key press
const debouncedSearch = debounce(performSearch, 300);

// Usage example:
// debouncedSearch("some text");