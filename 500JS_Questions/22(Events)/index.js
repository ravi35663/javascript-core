// What is an event flow
/*
 Event flow is the order in which event is received on the web page. 
 When you click an element that is nested in various other elements, 
 before your click actually reaches its destination, or target element, 
 it must trigger the click event for each of its parent elements first, 
 starting at the top with the global window object. 
 There are two ways of event flow
    Top to Bottom(Event Capturing)
    Bottom to Top (Event Bubbling)
*/


//What is event bubbling
/*
 Event bubbling is a type of event propagation where the event first triggers on the 
 innermost target element, and then successively triggers on the ancestors (parents) 
 of the target element in the same nesting hierarchy till it reaches the outermost 
 DOM element.
*/

// What is event capturing
/*
 Event capturing is a type of event propagation where the event is first captured by 
 the outermost element, and then successively triggers on the descendants (children) 
 of the target element in the same nesting hierarchy till it reaches the innermost 
 DOM element.
*/

//How do you submit a form using JavaScript
/*
 You can submit a form using document.forms[0].submit(). All the form input's 
 information is submitted using onsubmit event handler
 i.e.
    function submit(){
        document.forms[0].submit();
    }
*/

//What is the difference between document load and DOMContentLoaded events
/*
 The 'DOMContentLoaded' event is fired when the initial HTML document has been 
 completely loaded and parsed, without waiting for 
 assets(stylesheets, images, and subframes) to finish loading. 
 Whereas The 'load' event is fired when the whole page has loaded, including all 
 dependent resources(stylesheets, images).
*/

//What is the difference between native, host and user objects
/*
*Native Objects :-
    Native objects are objects that are part of the JavaScript language defined by 
    the ECMAScript specification. For example, String, Math, RegExp, Object, 
    Function etc core objects defined in the ECMAScript spec.

*Host Objects :-
    Host objects are objects provided by the browser or runtime environment (Node). 
    For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.
    Examples:
        *Window Object: (window.alert("Hi"))
        *Document Object: (document.getElementById('name'))
        *Console Object: (console.log("Hello World"))
        *XMLHttpRequest (XHR) Object: Creating and using an XHR object to make an API request
        *Node Modules: fs, http,events ..etc are example of Node module
        *Process Object (Node.js Environment):  process.argv,process.stdout.write('') ..etc
        *Timers (Browser and Node.js): setTimeout,setInterval
        *Web APIs (Browser Environment):fetch, navigator.geolocation, document.querySelector ..etc APIs
        *Global Objects (Both Browser and Node.js): Math, Date ..etc
        *Event Objects (Both Browser and Node.js): Event or MouseEvent, event.clientX to get the X-coordinate of a mouse click...etc

* User Objects:
    User objects are objects defined in the javascript code. For example, User objects 
    created for profile information.
*/

//What are the tools or techniques used for debugging JavaScript code
/*
 You can use below tools or techniques for debugging javascript
    1) Chrome Devtools
    2) debugger statement
    3) Good old console.log statement
*/

//What is the difference between an attribute and a property
/*
Attributes are defined on the HTML markup whereas properties are defined on the DOM. 
    For example, the below HTML element has 2 attributes type and value,
    <input type="text" value="Name:">

    You can retrieve the attribute value as below,(now values becomes it properties)
    const input = document.querySelector("input");
    console.log(input.getAttribute("value")); // Good morning
    console.log(input.value); // Good morning
*/

//What is same-origin policy
/*
    The same-origin policy is a policy that prevents JavaScript from making requests 
    across domain boundaries. An origin is defined as a combination of URI scheme, 
    hostname, and port number. If you enable this policy then it prevents a malicious 
    script on one page from obtaining access to sensitive data on another web page 
    using Document Object Model(DOM).
*/

// URI (Uniform Resource Identifier)
/*
-> A URI is a generic term used to identify or name a resource on the internet.
-> URI is a broader concept that encompasses both URLs and URNs (Uniform Resource Names).
-> URIs can be used to identify various resources, including web pages, documents, 
   images, services, and more.
-> A URI doesn't necessarily have to provide the specific location of a resource; 
   it can also serve as a name or identifier for the resource.
-> URIs can include URLs (Uniform Resource Locators) or URNs (Uniform Resource Names) 
   as specific subtypes
*/

// URL (Uniform Resource locator):
/*
-> URL is a specific type of URI
-> URL not only identifies a resource but also provides information about how to 
   locate that resource.
-> A URL consists of the following components:
    -> Scheme (e.g., "http", "https", "ftp"): Specifies the protocol used to access 
       the resource.
    -> Authority (e.g., "www.example.com"): Specifies the domain or server where the resource is hosted.
    -> Port (optional): Specifies the port number for the server.
    -> Path (e.g., "/page.html"): Specifies the path to the specific resource on the server.
    -> Query (optional): Contains additional parameters for the resource.
    -> Fragment (optional): Identifies a specific section or anchor within the resource.

    Examples of URLs:
        http://www.example.com/index.html
        ftp://ftp.example.com/files/file.txt
        https://www.example.com/search?query=example
*/

/*
 In summary, a URI is a more general term that encompasses URLs. A URL is a specific 
 type of URI that provides both a way to identify a resource and a way to locate it 
 on the internet. URI can also include URNs, which are used as persistent resource 
 names and don't necessarily provide a location. URLs, on the other hand, include 
 specific details for accessing a resource over a network, typically using a 
 specific protocol (e.g., HTTP, FTP).
*/

//What is an event delegation
/*
    Event delegation is a technique for listening to events where you delegate a 
    parent element as the listener for all of the events that happen inside it.
    
    For example, if you wanted to detect field changes in inside a specific form, 
    you can use event delegation technique,
    var form = document.querySelector("#registration-form");

    *Listen for changes to fields inside the form
    form.addEventListener(
    "input",
    function (event) {
        *Log the field that was changed
        console.log(event.target);
    },
    false
    );
*/