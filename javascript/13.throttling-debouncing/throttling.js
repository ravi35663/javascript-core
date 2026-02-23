// ======================= THROTTLING =======================

/*
1) What is Throttling
  - Throttling is a performance optimization technique
  - It limits how frequently a function can execute
  - Used to control the rate of function calls
  - Even if an event happens many times, the function runs only once
    in a given time interval
*/

// ======================= THROTTLING IN EASY TERMS =======================

/*
2) Easy explanation
  - Imagine a lift that can come only once every 10 seconds
  - Even if people press the button multiple times, the lift responds
    only once per 10 seconds
  - Throttling works the same way for functions
*/

// ======================= WHY THROTTLING =======================

/*
3) Why use throttling
  - Prevents excessive API calls
  - Improves application performance
  - Protects backend from overload
  - Useful for high-frequency events
*/

// ======================= COMMON USE CASES =======================

/*
4) Where throttling is used
  - Button click to call APIs
  - Scroll events
  - Resize events
  - Mouse move events
  - Window events
*/

// ======================= BASIC THROTTLE IMPLEMENTATION =======================
/*
5) Throttle function implementation
*/
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// ======================= EXAMPLE 1: BUTTON CLICK =======================

function fetchData() {
  console.log("Fetching data from API...", new Date().toLocaleTimeString());
}

const throttledFetch = throttle(fetchData, 2000);

// Even if user clicks many times,
// API will be called only once every 2 seconds
// throttledFetch();

// ======================= EXAMPLE 2: SCROLL EVENT =======================

function onScroll() {
  console.log("Scroll event handled", Date.now());
}

window.addEventListener("scroll", throttle(onScroll, 1000));

// ======================= THROTTLING vs DEBOUNCING =======================

/*
6) Difference in short
  - Throttling → Executes at regular intervals
  - Debouncing → Executes after user stops triggering event
*/

// ======================= SUMMARY =======================

/*
7) Key points
  - Throttling limits execution rate
  - Ensures function runs once per time window
  - Best for continuous events
  - Improves performance and stability
*/
