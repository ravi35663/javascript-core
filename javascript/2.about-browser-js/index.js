/*
Purpose of void(0):
    - void(0) returns undefined.
    - Used in href="javascript:void(0)" to prevent page reload while executing JS.
    - Example:
        <a href="javascript:void(0)" onclick="alert('Well done!')">Click Me</a>

Interpret:
    - Interpret means to explain or understand the meaning of something.

Is JavaScript compiled or interpreted?
    - JavaScript is an interpreted language.
    - Modern browsers use Just-In-Time (JIT) compilation.
    - JS code is interpreted first, then optimized at runtime.

What are Events?
    - Events are actions that occur on HTML elements.
    - JavaScript reacts to these events.
    - Examples: page load, input change, button click.
    - Example:
        <button onclick="greeting()">Click me</button>
        <script>
        function greeting() {
            alert('Hello! Good morning');
        }
        </script>

    preventDefault():
    - Stops the default browser behavior of an event.
    - Common uses: preventing form submit or link navigation.
    - Example:
        document.getElementById("link").addEventListener("click", function (event) {
        event.preventDefault();
        });
    - Note: Not all events are cancelable.

stopPropagation():
    - Stops the event from bubbling up the DOM.
    - Example:
        <div onclick="secondFunc()">
        DIV 2
        <div onclick="firstFunc(event)">DIV 1</div>
        </div>

        <script>
        function firstFunc(event) {
            alert("DIV 1");
            event.stopPropagation();
        }
        function secondFunc() {
            alert("DIV 2");
        }
        </script>

BOM (Browser Object Model):
    - Allows JavaScript to interact with the browser.
    - Includes window, navigator, history, screen, location, and document.
    - Not standardized and may vary by browser.

    setTimeout:
    - Runs a function once after a delay.
    - Example:
        setTimeout(() => {
        console.log("Runs after 2 seconds");
        }, 2000);

    setInterval:
    - Runs a function repeatedly at fixed intervals.
    - Example:
        setInterval(() => {
        console.log("Runs every 2 seconds");
        }, 2000);

    clearTimeout:
    - Cancels a timeout.
    - Example:
        let id = setTimeout(() => console.log("Hi"), 3000);
        clearTimeout(id);

    clearInterval:
    - Cancels an interval.
    - Example:
        let id = setInterval(() => console.log("Hello"), 3000);
        clearInterval(id);
*/

/*
Redirect to a new page:
    - Uses window.location.href to navigate to another URL.
    - Example:
        function redirect() {
        window.location.href = "newPage.html";
        }

Get current URL:
    - Use window.location.href to get the full current URL.

Location object URL properties:
    - Used to access different parts of the URL.
    - Example URL:
        https://www.example.com:8080/path/to/resource?query=example#section
    - Properties:
        href      → full URL
        protocol  → https
        host      → www.example.com:8080
        hostname  → www.example.com
        port      → 8080
        pathname  → /path/to/resource
        search    → ?query=example
        hash      → #section

Get query string values:
    - Use URLSearchParams to read query parameters.
    - Example:
        const urlParams = new URLSearchParams(window.location.search);
        const clientCode = urlParams.get("clientCode");

Display current date:
    - Use Date object and format values.
    - Example:
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        document.write(today);

Compare two dates:
    - Use getTime() instead of comparison operators.
    - Example:
        var d1 = new Date();
        var d2 = new Date(d1);
        console.log(d1.getTime() === d2.getTime()); // true
        console.log(d1 === d2); // false

Check if string starts with another string:
    - Use startsWith() method.
    - Example:
        "Good morning".startsWith("Good");     // true
        "Good morning".startsWith("morning"); // false

Trim a string:
    - Removes whitespace from start and end.
    - Example:
        let word = "    hello World.          ";
        console.log(word.trim()); // hello World.

!-- notation:
    - Not a special operator.
    - Combination of logical NOT (!) and decrement (--).
    - Value is decremented first, then evaluated for truthy/falsy.

Assign default values:
    - Use logical OR (||) to assign fallback values.
    - Example:
        var a = b || c;
    - If b is falsy, a gets c; otherwise a gets b.
*/