//What is the purpose of void 0
/*
    void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted 
    side-effect, because it will return the undefined primitive value. 
    It is commonly used for HTML documents that use href="javascript:void(0);" within an <a> element. 
    
    i.e, when you click a link, the browser loads a new page or refreshes the same page. 
    But this behavior will be prevented using this expression. 
   
    For example, the below link notify the message without reloading the page
    <a href="javascript:void(0)" onclick="alert("Well done!")">Click Me</a>
*/
/*
    Interpret : to explain or understand the meaning of something
*/
//Is JavaScript a compiled or interpreted  language
/*
    ->  JavaScript is an interpreted language, not a compiled language. An interpreter in 
        the browser reads over the JavaScript code, interprets each line, and runs it. 
    ->  Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles 
        JavaScript to executable bytecode just as it is about to run.
*/

//What are events
/*
    ->  Events are "things" or "some action" that happen to HTML elements. 
    ->  When JavaScript is used in HTML pages, JavaScript can react on these events. 
    ->  Some of the examples of HTML events are,
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
    ->  The preventDefault() method cancels the event if it is cancelable, meaning that 
        the default action or behavior that belongs to the event will not occur. 

    ->  For example, prevent form submission when clicking on submit button and prevent 
        opening the page URL when clicking on hyperlink are some common use cases.
    
    *document.getElementById("link").addEventListener("click", function (event) {
        event.preventDefault();
    });

==> Note: **Remember that not all events are cancelable.
*/

//What is the use of stopPropagation method
/*
    ->  The stopPropagation method is used to stop the event from bubbling up the event 
        chain. 
    ->  For Example: 
            The below nested 'divs' with stopPropagation method prevents default event 
            propagation when clicking on nested div(Div1).

            <p>Click DIV1 Element</p>
            <div onclick="secondFunc()">
                DIV 2
                <div onclick="firstFunc(event)"> DIV 1 </div>
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

//What is BOM:
/*
    ->  The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. 
    ->  It consists of the objects navigator, history, screen, location and document which are children of 
        the window. 
    ->  The Browser Object Model is not standardized and can change based on different 
        browsers.Window:
            -> DOM (document)
            -> BOM (Iframes, screen, history, location, ...etc)
            -> Javascript (Object, Array, functions,  ...etc)
*/

/*
==> setTimeout, setInterval, clearInterval, clearTimeout:

    setTimeout – Runs a function once after a delay
    setTimeout(() => {
    console.log("Runs after 2 seconds");
    }, 2000);

    setInterval – Runs a function repeatedly at fixed time intervals
    setInterval(() => {
    console.log("Runs every 2 seconds");
    }, 2000);

    clearTimeout – Cancels a timeout created by setTimeout
    let id = setTimeout(() => console.log("Hi"), 3000);
    clearTimeout(id);   // cancels the above timeout

    clearInterval – Cancels an interval created by setInterval
    let id = setInterval(() => console.log("Hello"), 3000);
    clearInterval(id);  // stops repeated execution

*/
