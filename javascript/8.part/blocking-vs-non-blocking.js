/*
==> BLOCKING vs NON-BLOCKING in JavaScript
*/

// ======================= BLOCKING EXAMPLE =======================
/*
Blocking code stops the execution of the program until the task is completed.
The main thread is blocked, so nothing else runs during that time.
*/

console.log("Start (Blocking)");

function blockingTask() {
  const start = Date.now();
  // Busy-wait loop to block the thread for ~2 seconds
  while (Date.now() - start < 2000) {}
  console.log("Blocking task completed");
}

blockingTask();
console.log("End (Blocking)");

/*
Output order:
Start (Blocking)
Blocking task completed
End (Blocking)
*/

// ======================= NON-BLOCKING EXAMPLE =======================
/*
Non-blocking code allows the program to continue execution without waiting
for the task to finish. Long-running work is handled asynchronously.
*/

console.log("Start (Non-Blocking)");

function nonBlockingTask() {
  setTimeout(() => {
    console.log("Non-blocking task completed");
  }, 2000);
}

nonBlockingTask();
console.log("End (Non-Blocking)");

/*
Output order:
Start (Non-Blocking)
End (Non-Blocking)
Non-blocking task completed
*/
