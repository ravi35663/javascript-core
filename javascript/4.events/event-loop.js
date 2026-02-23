/* ===================== EVENT LOOP =====================
    -   When a JS program starts, a Global Execution Context is created
        and pushed into the Call Stack
    -   setTimeout, DOM APIs, fetch, localStorage, console, location are
        NOT part of JavaScript itself
    -   In browsers they are provided by Web APIs
    -   In Node.js they are provided by the V8 engine / libuv
    -   Event Loop continuously monitors:
            1) Call Stack
            2) Microtask Queue
            3) Callback (Task) Queue
    -   When Call Stack is empty:
            → Event Loop pushes callbacks from queues to Call Stack
*/

setTimeout(() => {
    console.log("Hello World");
}, 5000);


/* ===================== HOW FETCH WORKS ===================== */
console.log("Start");

setTimeout(function CBT() {
    console.log("CB Timeout");
}, 5000);

fetch("some_url").then(function CBF() {
    console.log("CB Netflix");
});

console.log("End");

/*
OUTPUT:
    Start
    End
    CB Netflix
    CB Timeout
*/
/* ===================== QUEUE PRIORITY =====================
    - Microtask Queue has higher priority than Callback Queue
    - Promise callbacks (.then, .catch, .finally) → Microtask Queue
    - setTimeout, DOM events → Callback (Task) Queue
    - Callback Queue is also called Task Queue
    - Event Loop acts as a gatekeeper
    - All Microtasks execute BEFORE any Callback Queue task
*/
/* ===================== STARVATION =====================
    - If microtask callbacks keep adding new microtasks
    - Callback (task) queue callbacks never execute
    - This situation is called Starvation
*/
/* ===================== IMPORTANT NOTES =====================
    - setTimeout does NOT guarantee exact delay
    - Event Loop executes Callback Queue tasks
        ONLY when Microtask Queue is empty
    - Long microtask execution can delay setTimeout callbacks
*/