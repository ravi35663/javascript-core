//What is the purpose of void 0
/*
    Void(0) is used to prevent the page from refreshing. This will be helpful to 
    eliminate the unwanted side-effect, because it will return the undefined 
    primitive value. It is commonly used for HTML documents that use 
    href="JavaScript:Void(0);" within an <a> element. 
    i.e, when you click a link, the browser loads a new page or refreshes the same 
    page. But this behavior will be prevented using this expression. 
    For example, the below link notify the message without reloading the page

    <a href="JavaScript:void(0)" onclick="alert("Well done!")">Click Me</a>
*/

//Is JavaScript a compiled or interpreted language
/*
    JavaScript is an interpreted language, not a compiled language. An interpreter 
    in the browser reads over the JavaScript code, interprets each line, and runs it. 
    Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, 
    which compiles JavaScript to executable bytecode just as it is about to run.
*/

//What are events
/*
    Events are "things" that happen to HTML elements. 
    When JavaScript is used in HTML pages, JavaScript can react on these events. 
    Some of the examples of HTML events are,
        1) Web page has finished loading
        2) Input field was changed
        3) Button was clicked
    ...etc
    Let's describe the behavior of click event for button element,

    <!doctype html>
    <html>
    <head>
        <script>
            function greeting() {
            alert('Hello! Good morning');
            }
        </script>
    </head>
    <body>
        <button type="button" onclick="greeting()">Click me</button>
    </body>
    </html>

*/

//What is the use of preventDefault method
/*
    The preventDefault() method cancels the event if it is cancelable, meaning that 
    the default action or behavior that belongs to the event will not occur. 
    For example, prevent form submission when clicking on submit button and prevent 
    opening the page URL when clicking on hyperlink are some common use cases.
    
    *document.getElementById("link").addEventListener("click", function (event) {
        event.preventDefault();
    });
    Note: Remember that not all events are cancelable.
*/

//What is the use of stopPropagation method
/*
    The stopPropagation method is used to stop the event from bubbling up the event 
    chain. For example, the below nested divs with stopPropagation method prevents 
    default event propagation when clicking on nested div(Div1).

    <p>Click DIV1 Element</p>
        <div onclick="secondFunc()">DIV 2
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
*/

//What is BOM
/*
    The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. 
    It consists of the objects navigator, history, screen, location and document 
    which are children of the window. 
    The Browser Object Model is not standardized and can change based on different 
    browsers.
    Window:
        -> DOM (document)
        -> BOM (Iframes,screen,history,location,..etc)
        -> Javascript (Object,Array,functions ..etc)
*/


//What is the use of setTimeout
/*
    The setTimeout() method is used to call a function or evaluate an expression 
    after a specified number of milliseconds. 
    For example, let's log a message after 2 seconds using setTimeout method,
    setTimeout(()=>{
        console.log("Executed after 2 seconds");
    },2*1000);
*/

//What is the use of setInterval
/*
    The setInterval() method is used to call a function or evaluate an expression at 
    specified intervals (in milliseconds). 
    For example, let's log a message after 2 seconds using setInterval method,
    setInterval(()=>{
        console.log("Run at every 2 second");
    },2000);
*/

//Why is JavaScript treated as Single threaded
/*
    JavaScript is a single-threaded language. Because the language specification 
    does not allow the programmer to write code so that the interpreter can run 
    parts of it in parallel in multiple threads or processes. 
    Whereas languages like java, go, C++ can make multi-threaded and multi-process 
    programs.
*/

//What is ECMAScript
/*
    ECMAScript is the scripting language that forms the basis of JavaScript. 
    ECMAScript standardized by the ECMA International standards organization in the 
    ECMA-262 and ECMA-402 specifications. 
    The first edition of ECMAScript was released in 1997.
*/

//What are PWAs
/*
   Progressive web applications (PWAs) are a type of mobile app delivered through 
   the web, built using common web technologies including HTML, CSS and JavaScript. 
   These PWAs are deployed to servers, accessible through URLs, and indexed by 
   search engines.
*/

//What is the purpose of clearTimeout method
/*
    The clearTimeout() function is used in javascript to clear the timeout which has 
    been set by setTimeout()function before that. 
    i.e, The return value of setTimeout() function is stored in a variable and it’s 
    passed into the clearTimeout() function to clear the timer.

    For example, the below setTimeout method is used to display the message after 
    3 seconds. This timeout can be cleared by the clearTimeout() method.

    <script>
        var msg;
        function greeting() {
            alert('Good morning');
        }
        function start() {
            msg =setTimeout(greeting, 3000);

        }

        function stop() {
            clearTimeout(msg);
        }
    </script>
*/

//What is the purpose of clearInterval method
/*
    The clearInterval() function is used in javascript to clear the interval which 
    has been set by setInterval() function. 
    i.e, The return value returned by setInterval() function is stored in a variable 
    and it’s passed into the clearInterval() function to clear the interval.

    For example, the below setInterval method is used to display the message for 
    every 3 seconds. This interval can be cleared by the clearInterval() method.

    <script>
        var msg;
        function greeting() {
        alert('Good morning');
        }
        function start() {
        msg = setInterval(greeting, 3000);

        }

        function stop() {
            clearInterval(msg);
        }
    </script>
*/

//How do you redirect new page in javascript
/*
    In vanilla javascript, you can redirect to a new page using the location 
    property of window object. 
    The syntax would be as follows,
    function redirect() {
        * you can replace "newPage.html" to any valid url
        window.location.href = "newPage.html";
    }
*/

//How do you check whether a string contains a substring
/* Method-1 (ES6)
    let str = "hello world";
    if(str.includes('hello')){
        console.log("String contains");
    }
*/

/* Method-2 (ES5)
    let str = "hello world";
    if(str.indexOf('hello')!==-1){
        console.log("String contains");
    }
*/

/* Method-3 (Advance way)
    var mainString = "hello",
    regex = /hell/;
    regex.test(mainString)
*/

//How do you get the current url with javascript
/*
    You can use window.location.href expression to get the current url path and you 
    can use the same expression for updating the URL too.
*/

//What are the various url properties of location object
/*
    The below 'Location' object properties can be used to access URL components of 
    the page.
    
    *URL: https://www.example.com:8080/path/to/resource?query=example#section
    *1) href - The entire URL (https://www.example.com:8080/path/to/resource?query=example#section)
    *2) protocol - The protocol of the URL (https)
    *3) host - The hostname and port of the URL (www.example.com:8080)
    *4) hostname - The hostname of the URL (www.example.com)
    *5) port - The port number in the URL (8080)
    *6) pathname - The path name of the URL (/path/to/resource)
    *7) search - The query portion of the URL (?query=example)
    *8) hash - The anchor portion of the URL (#section)
*/

//How do get query string values in javascript
/*
    You can use 'URLSearchParams' to get query string values in javascript. 
    Let's see an example to get the client code value from URL query string,

    const urlParams = new URLSearchParam(window.location.search);
    const clientCode = urlParams.get("clientCode");

*/

//What are the pros and cons of for loop
/*
    The for-loop is a commonly used iteration syntax in javascript. It has both pros 
    and cons.
    *Pros:
        1) Works on every environment
        2) You can use break and continue flow control statements

    *Cons:
        1) Too verbose(wordy)
        2) Imperative (Crucial)
*/

//How do you display current date and time?
/*
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    document.write(today);
*/

//How do you compare two date objects
/*
    You need to use date.getTime() method to compare date values instead of 
    comparison operators (==, !=, ===, and !== operators).
    i.e.
    var d1 = new Date();
    var d2 = new Date(d1);
    console.log(d1.getTime() === d2.getTime()); //True
    console.log(d1 === d2); // False
*/

// How do you check if a string starts with another string
/*
    You can use ECMAScript 6's String.prototype.startsWith() method to check 
    if a string starts with another string or not. 
    But it is not yet supported in all browsers. 
    Let's see an example to see this usage.
    i.e.
    "Good morning".startsWith("Good"); // true
    "Good morning".startsWith("morning"); // false
*/

//How do you trim a string in javascript
/*
    JavaScript provided a trim method on string types to trim any whitespaces 
    present at the beginning or ending of the string.
    let word = "    hello World.          ";
    console.log(word.trim()) // hello World.
*/

//How do you add a key value pair in javascript
/*
    There are two possible solutions to add new properties to an object. 
    Let's take a simple object to explain these solutions.
    
    var object = {
        key1: value1,
        key2: value2,
    };

    * Way-1(Using dot notation: This solution is useful when you know the name of the property)
        object.key2="new value"

    * Way-2 (Using square bracket notation: This solution is useful when the name of the property is dynamically determined.)
    object["key3"] = "value3"
*/

//Is the !-- notation represents a special operator
/*
    No,that's not a special operator. But it is a combination of 2 standard operators one after the other,
    1) A logical not (!)
    2) A prefix decrement (--)
    At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.
*/

//How do you assign default values to variables
/*
    You can use the logical or operator || in an assignment expression to 
    provide a default value. The syntax looks like as below,
    i.e.
        var a = b || c;
    As per the above expression, variable 'a 'will get the value of 'c' only 
    if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), 
    otherwise 'a' will get the value of 'b'.
*/

//