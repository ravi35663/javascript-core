/*
=>  Event flow:
    - Event flow is the order in which an event is received on a web page.
    - When an element is nested, the event travels through its parents.
    - Two phases of event flow:
        1) Event Capturing (Top → Bottom)
        2) Event Bubbling (Bottom → Top)

=>  Event bubbling:
    - Event starts from the target element.
    - Then moves upward to parent elements.
    - Continues until it reaches the outermost element (document/window).

=>  Event capturing:
    - Event starts from the outermost element.
    - Then moves downward to the target element.

=>  Submit a form using JavaScript:
    - Forms can be submitted programmatically.
    - Example:
        function submitForm() {
            document.forms[0].submit();
        }

=>  document load vs DOMContentLoaded:
    - DOMContentLoaded:
        - Fired when HTML is fully loaded and parsed.
        - Does NOT wait for images, CSS, or other resources.
    - load:
        - Fired when the entire page including assets is fully loaded.

=>  Native, Host, and User objects:
    Native Objects:
    - Built-in objects defined by ECMAScript.
    - Examples: Object, Array, String, Math, RegExp, Function

    Host Objects:
    - Provided by browser or runtime (Node.js).
    - Examples:
        window, document, console
        XMLHttpRequest
        fetch, navigator.geolocation
        setTimeout, setInterval
        Node.js modules (fs, http)
        process object

=>  User Objects:
    - Objects created by developers in JavaScript.
    - Example: user profile objects.

=>  Debugging JavaScript:
    - Common tools and techniques:
        1) Chrome DevTools
        2) debugger statement
        3) console.log()

=>  Attribute vs Property:
    - Attributes are defined in HTML.
    - Properties are defined on the DOM object.
    - Example:
        <input type="text" value="Name">

        const input = document.querySelector("input");
        input.getAttribute("value"); // HTML attribute
        input.value;                 // DOM property

=>  Same-origin policy:
    - Restricts JS from accessing data across different origins.
    - Origin = protocol + hostname + port.
    - Protects sensitive data from malicious scripts.

=>  URI (Uniform Resource Identifier):
    - General identifier for resources.
    - Can be a URL or URN.
    - Does not always specify location.
    - Used to identify resources like pages, images, services.

=>  URL (Uniform Resource Locator):
    - A specific type of URI.
    - Identifies AND locates a resource.
    - Components:
        scheme, domain, port, path, query, fragment
    - Examples:
        https://www.example.com/index.html
        ftp://ftp.example.com/file.txt

=>  URI vs URL:
    - URI is broader and includes URLs and URNs.
    - URL is a URI that provides location and access method.

=>  Event delegation:
    - Attach a single event listener to a parent element.
    - Handles events from child elements.
    - Improves performance and handles dynamic elements.
    - Example:
        var form = document.querySelector("#registration-form");

        form.addEventListener("input", function (event) {
            console.log(event.target);// you'll what happening during event
        });
*/
/* =======================
   Event Bubbling Example
   ======================= */
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked (Bubbling)");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked (Bubbling)");
});

/*
HTML structure:
<div id="parent">
  <button id="child">Click Me</button>
</div>

Output when button is clicked:
Child clicked (Bubbling)
Parent clicked (Bubbling)
*/

/* =========================
   Event Capturing Example
   ========================= */
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked (Capturing)");
  },
  true // enable capturing phase
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child clicked (Capturing)");
  },
  true
);

/*
HTML structure:
    <div id="parent">
    <button id="child">Click Me</button>
    </div>

    Output when button is clicked:
    Parent clicked (Capturing)
    Child clicked (Capturing)
*/

/* ==============================
   Stop Propagation Example
   ============================== */
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked only");
});
/*
    Output when button is clicked:
    Child clicked only
    (Parent click will not execute)
*/
