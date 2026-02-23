/*
Difference between window and document:

Window:
  - Root-level object of the browser.
  - Available globally by default.
  - Provides methods like alert(), confirm().
  - Contains properties like document, location, history.

Document:
  - Child of the window object (DOM).
  - Accessed via window.document or document.
  - Used to interact with HTML elements.
  - Provides methods like getElementById(), createElement().

Access browser history:
  - window.history allows navigation through browser history.
  - Example:
      function goBack() {
        window.history.back();
      }

      function goForward() {
        window.history.forward();
      }
  - window prefix is optional.

Detect Caps Lock key:
- getModifierState() checks if modifier keys are active.
- Example:
    <input type="password" onmousedown="enterInput(event)" />
    <p id="feedback"></p>

    <script>
      function enterInput(e) {
        var flag = e.getModifierState("CapsLock");
        document.getElementById("feedback").innerHTML =
          flag ? "CapsLock activated" : "CapsLock not activated";
      }
    </script>

Change HTML element style:
  1) Using style property (inline styles):
      document.getElementById('title').style.fontSize = "30px";

  2) Using className:
      document.getElementById('section').className = "custom-class";

Result of 1 + 2 + '3':
  - Output: "33"
  - Number addition happens first, then string concatenation.
  - Examples:
      '3' + 2 + 1 = "321"
      1 + '2' + 3 = "123"

Debugger statement:
  - Pauses code execution like a breakpoint.
  - Example:
      function checkDebugger() {
        console.log("Line 22");
        debugger;
        console.log("Line 24");
      }
      checkDebugger();

Purpose of breakpoints:
  - Stops execution to inspect variables and flow.
  - Execution can be resumed after inspection.

Reserved words as identifiers:
  - Reserved words cannot be used as variable or function names.
  - Example:
      var else = "hello"; // SyntaxError

Detect mobile browser:
  - Check userAgent against known devices.
  - Example:
      function detectmob() {
        return (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i)
        );
      }

Get image width and height:
  - Use Image object and onload event.
  - Example:
      const img = new Image();
      img.onload = function () {
        console.log(this.width, this.height);
      };
      img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";

Synchronous HTTP request:
  - XMLHttpRequest with third parameter as false.
  - Example:
      function httpGet(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send(null);
        return xhr.responseText;
      }

Asynchronous HTTP request:
  - XMLHttpRequest with third parameter as true.
  - Example:
      function httpGetAsync(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
          }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
      }

Convert date to another timezone:
  - Use toLocaleString() with timezone.
  - Example:
      console.log(
        new Date().toLocaleString("en-GB", { timeZone: "UTC" })
      );

Get window size:
  - Use innerWidth / innerHeight with fallbacks.
  - Example:
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      var height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

Conditional (ternary) chaining:
  - Multiple conditions in a single expression.
  - Example:
      function traceValue(param) {
        return condition1 ? value1 :
              condition2 ? value2 :
              condition3 ? value3 :
              value4;
      }

Execute JavaScript after page load:
  - Methods:
      window.onload = function () {};
      document.onload = function () {};
      <body onload="script()">
*/
