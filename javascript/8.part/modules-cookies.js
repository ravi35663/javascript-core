// ======================= MODULES =======================
/*
Modules are small, independent, reusable units of code. They are the foundation
of many JavaScript design patterns and usually export an object, function, or constructor.

Why modules are needed:
1) Maintainability
2) Reusability
3) Namespacing
*/
// ======================= SCOPE =======================
/*
Scope defines the accessibility of variables, functions, and objects during runtime.
It determines where variables and other resources are visible in the code.
*/
// ======================= INDEXEDDB =======================
/*
IndexedDB is a low-level client-side storage API used to store large amounts of
structured data, including files/blobs. It supports indexes for high-performance searches.
*/
// ======================= WEB STORAGE =======================
/*
Web Storage allows browsers to store key/value data locally in a more efficient
way than cookies.
Types:
   1) Local Storage – Stores data with no expiration date.
   2) Session Storage – Stores data for one session and clears when the tab is closed.
*/

// ======================= POST MESSAGE =======================
/*
postMessage enables secure cross-origin communication between Window objects
(e.g., page ↔ iframe or popup). Normally, scripts can communicate only if they
follow the same-origin policy (same protocol, host, and port).
*/

// ======================= COOKIES =======================
/*
Cookies store small pieces of data in the browser as key/value pairs.

Example:
document.cookie = "username=John";
document.cookie = "userage=25";
// document.cookies => 'username=John; userage=25'
*/

// ======================= WHY COOKIES =======================
/*
Cookies are used to remember user information.
1) User data is stored when visiting a page.
2) Data is reused when the user revisits the page.
*/

// ======================= COOKIE OPTIONS =======================
/*
1) Expiry:
   By default, cookies are deleted when the browser closes.
   document.cookie = "username=John; expires=Sat, 8 Jun 2023 12:00:00 UTC";

2) Path:
   Restricts cookie to a specific path.
   document.cookie = "username=John; path=/services";
*/

// ======================= DELETE COOKIE =======================
/*
A cookie can be deleted by setting a past expiry date.
document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
Note: Path must be specified to delete the correct cookie.
*/

// ======================= COOKIE vs STORAGE =======================
/*
Cookies:
- Server & client accessible
- Expiry configurable
- SSL supported
- Max size: 4KB

Local Storage:
- Client-side only
- Persists until deleted
- No SSL
- Max size: 5MB

Session Storage:
- Client-side only
- Cleared when tab closes
- No SSL
- Max size: 5MB

Major difference:
LocalStorage persists after browser close, SessionStorage does not.
*/

// ======================= ACCESS WEB STORAGE =======================
/*
window.localStorage and window.sessionStorage provide storage access.

Example:
localStorage.setItem("logo", document.getElementById("logo").value);
localStorage.getItem("logo");
*/

// ======================= SESSION STORAGE METHODS =======================
/*
sessionStorage.setItem("key", "value");
let data = sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
*/

// ======================= SERVICE WORKER =======================
/*
A Service Worker is a background JavaScript file that runs independently of web pages.
It enables offline support, background sync, push notifications, request interception,
and cache management.
*/

// ======================= SERVICE WORKER & DOM =======================
/*
Service Workers cannot access the DOM directly. They communicate with controlled
pages using postMessage, and the pages manipulate the DOM.
*/

// ======================= SERVICE WORKER DATA PERSISTENCE =======================
/*
Service Workers are terminated when idle. To persist data across restarts,
IndexedDB is used instead of global variables.
*/

// ======================= STORAGE EVENT =======================
/*
StorageEvent fires when storage is changed in another document.

Example:
window.onstorage = function (e) {
  console.log(
    "The " +
      e.key +
      " key has been changed from " +
      e.oldValue +
      " to " +
      e.newValue +
      "."
  );
};
*/
// ======================= WHY WEB STORAGE =======================
/*
Web Storage is more secure than cookies, supports larger data, does not affect
performance, and data is never sent to the server.
*/
// ======================= WEB STORAGE SUPPORT =======================
/*
if (typeof Storage !== "undefined") {
  // Web Storage supported
} else {
  // No Web Storage support
}
*/
// ======================= WEB WORKER SUPPORT =======================
/*
if (typeof Worker !== "undefined") {
  // Web Worker supported
} else {
  // No Web Worker support
}
*/
// ======================= WEB WORKER EXAMPLE =======================
/*
counter.js
let i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}
timedCount();

web_worker_example.js
if (typeof w == "undefined") {
  w = new Worker("counter.js");
}

w.onmessage = function (event) {
  document.getElementById("message").innerHTML = event.data;
};

Terminate worker:
w.terminate();

Reuse worker:
w = undefined;
*/
// ======================= WEB WORKER RESTRICTIONS =======================
/*
Web Workers do not have access to:
1) window
2) document
3) parent
*/