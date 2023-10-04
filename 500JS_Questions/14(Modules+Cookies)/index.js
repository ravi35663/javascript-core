// What are modules?
/*
 Modules refer to small units of independent, reusable code and also act as the 
 foundation of many JavaScript design patterns. Most of the JavaScript modules 
 export an object literal, a function, or a constructor

 *Why do you need modules?
    1) Maintainability
    2) Reusability
    3) Namespacing
*/


// What is scope in javascript
/**
 Scope is the accessibility of variables, functions, and objects in some particular 
 part of your code during runtime. In other words, scope determines the visibility 
 of variables and other resources in areas of your code.
*/

// What is IndexedDB
/*
 IndexedDB is a low-level API for client-side storage of larger amounts of 
 structured data, including files/blobs. This API uses indexes to enable 
 high-performance searches of this data.
*/

// *What is web storage
/*
 Web storage is an API that provides a mechanism by which browsers can store 
 key/value pairs locally within the user's browser, in a much more intuitive 
 fashion than using cookies. The web storage provides two mechanisms for storing 
 data on the client.
    1) Local storage: It stores data for current origin with no expiration date.
    2) Session storage: It stores data for one session and the data is lost when 
       the browser tab is closed.
*/

//What is a post message (Learn in Deep)
/*
 Post message is a method that enables cross-origin communication between Window 
 objects.(i.e, between a page and a pop-up that it spawned, or between a page and 
 an iframe embedded within it). 
 Generally, scripts on different pages are allowed to access each other if and only 
 if the pages follow same-origin policy(i.e, pages share the same protocol, port 
 number, and host).
*/

//What is a Cookie
/*
 A cookie is a piece of data that is stored on your computer to be accessed by 
 your browser. Cookies are saved as key/value pairs. 
    *  For example, you can create a cookie named username as below,
    *  document.cookie = "username=John";
    *  document.cookie = "userage=25";
    * document.cookies == > 'username=ravi; userage=25'
*/

// Why do you need a Cookie
/*
 Cookies are used to remember information about the user profile(such as username). 
 It basically involves two steps,
    1) When a user visits a web page, the user profile can be stored in a cookie.
    2) When user again visit the web page the cookie remembers the user.
*/

// What are the options in a cookie
/*
    There are few below options available for a cookie,
    1) By default, the cookie is deleted when the browser is closed. But you can
       change this behavior by setting expiry date (in UTC time).
       i.e document.cookie = "username=John; expires=Sat, 8 Jun 2023 12:00:00 UTC"
    
    2) By default, the cookie belongs to a current page. But you can tell the browser 
       what path the cookie belongs to using a path parameter.
        i.e. 
            document.cookie = "username=John; path=/services";   
*/

//How do you delete a cookie
/*
 You can delete a cookie by setting the expiry date as a passed date. 
 You don't need to specify a cookie value in this case. 
 For example, you can delete a username cookie in the current page as below.
 * document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
 
 *Note*: You should define the cookie path option to ensure that you delete the 
         right cookie. Some browsers doesn't allow to delete a cookie unless you 
         specify a path parameter.
*/

// What are the differences between cookie, local storage and session storage
/*
   Cookies:
      -> Accessed both server-side & client-side
      -> life as configured using Expires option
      -> SSL(Secure socket layer) Supported
      -> Maximum data size is 4KB

   Local Storage:
      -> Accessed only on client side.
      -> life (until deleted)
      -> SSL not supported
      -> Maximum data size is 5MB
   
   Session Storage:
      -> Accessed only on client side.
      -> life (tab is closed)
      -> SSL not supported
      -> Maximum data size is 5MB
   
   *Major difference between local and session storage :- 
      LocalStorage is the same as SessionStorage but it persists the data even 
      when the browser is closed and reopened(i.e it has no expiration time) 
      whereas in sessionStorage data gets cleared when the page session ends.
*/

// How do you access web storage
/*
   The Window object implements the WindowLocalStorage and WindowSessionStorage 
   objects which has localStorage(window.localStorage) and sessionStorage(window.sessionStorage) 
   properties respectively. These properties create an instance of the Storage 
   object, through which data items can be set, retrieved and removed for a 
   specific domain and storage type (session or local). 
   *For example, you can read and write on local storage objects as below
      localStorage.setItem("logo", document.getElementById("logo").value);
      localStorage.getItem("logo");
*/

// What are the methods available on session storage
/*
  The session storage provided methods for reading, writing and clearing the 
  session data.
   1) Save data to sessionStorage
      sessionStorage.setItem("key", "value");

   2) Get saved data from sessionStorage
      let data = sessionStorage.getItem("key");

   3) Remove saved data from sessionStorage
      sessionStorage.removeItem("key");

   4) Remove all saved data from sessionStorage
      sessionStorage.clear();
*/



// What is a service worker (Learn in deep)
/*
 A Service worker is basically a script (JavaScript file) that runs in the 
 background, separate from a web page and provides features that don't need a web 
 page or user interaction. Some of the major features of service workers are Rich 
 offline experiences(offline first web application development), periodic background 
 syncs, push notifications, intercept and handle network requests and 
 programmatically managing a cache of responses.
*/


// How do you manipulate DOM using a service worker
/*
 Service worker can't access the DOM directly. But it can communicate with the 
 pages it controls by responding to messages sent via the postMessage interface, 
 and those pages can manipulate the DOM.
*/

//How do you reuse information across service worker restarts
/*
 The problem with service worker is that it gets terminated when not in use, and 
 restarted when it's next needed, so you cannot rely on global state within a 
 service worker's onfetch and onmessage handlers. In this case, service workers 
 will have access to IndexedDB API in order to persist and reuse across restarts.
*/


//What is a storage event and its event handler
/*
 The StorageEvent is an event that fires when a storage area has been changed in 
 the context of another document. Whereas onstorage property is an EventHandler 
 for processing storage events. The syntax would be as below
 *  window.onstorage = functionRef;

 *Let's take the example usage of onstorage event handler which logs the storage key and it's values
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

// Why do you need web storage
/*
 Web storage is more secure, and large amounts of data can be stored locally for 
 different purpose, without affecting website performance. Also, the information 
 is never transferred to the server. Hence this is a more recommended approach 
 than Cookies.
*/

//How do you check web storage browser support
/*
   You need to check browser support for localStorage and sessionStorage before 
   using web storage,
   if (typeof Storage !== "undefined") {
      *Code for localStorage/sessionStorage.
   } else {
      * Sorry! No Web Storage support..
   }
*/

// How do you check web workers browser support
/*
   if (typeof Worker !== "undefined") {
      code for Web worker support.
   } else {
      Sorry! No Web Worker support..
   }
*/

//Give an example of a web worker
/* 
   1) Create a Web Worker File: You need to write a script to increment the count 
      value. Let's name it as 'counter.js'
      
      let i = 0;
      function timedCount() {
         i = i + 1;
         postMessage(i);
         setTimeout("timedCount()", 500);
      }
      timedCount();

   * Here postMessage() method is used to post a message back to the HTML page
   1) Create a Web Worker Object: You can create a web worker object by checking 
      for browser support. Let's name this file as 'web_worker_example.js'

      if (typeof w == "undefined") {
         w = new Worker("counter.js");
      }
      and we can receive messages from web worker

      w.onmessage = function (event) {
         document.getElementById("message").innerHTML = event.data;
      };

      -> Terminate a Web Worker: Web workers will continue to listen for messages 
         (even after the external script is finished) until it is terminated. 
         You can use the terminate() method to terminate listening to the messages.
      
      w.terminate();
      Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code
      w = undefined
*/

//What are the restrictions of web workers on DOM
/*
-> WebWorkers don't have access to below javascript objects since they are defined 
   in an external files
      1) Window object
      2) Document object
      3) Parent object
*/
