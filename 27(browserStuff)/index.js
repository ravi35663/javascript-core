//How do you change the style of a HTML element
/*
    You can change inline style or classname of a HTML element using javascript
    1) Using style property: You can modify inline style using style property
        *document.getElementById('title').style.fontSize = 30px;

    2) Using ClassName property: It is easy to modify element class using className property
        *document.getElementById('section').className = "custom-class"
*/

//What would be the result of 1+2+'3'
/*
    The output is going to be 33. Since 1 and 2 are numeric values, the result 
    of the first two digits is going to be a numeric value 3. The next digit is 
    a string type value because of that the addition of numeric value 3 and 
    string type value 3 is just going to be a concatenation value 33.
*/
// '3' + 2 + 1 = '321'
// 1 + '2' + 3 = 123

//What is a debugger statement
/*
 The debugger statement invokes any available debugging functionality, such as 
 setting a breakpoint. If no debugging functionality is available, this statement 
 has no effect. For example, in the below function a debugger statement has been 
 inserted. So execution is paused at the debugger statement just like a breakpoint 
 in the script source.
*/
function checkDebugger(){
    console.log("Line 22")
    debugger; // this is break at client side
    console.log("Line 24");
}
checkDebugger();

//What is the purpose of breakpoints in debugging
/*
    You can set breakpoints in the javascript code once the debugger statement 
    is executed and the debugger window pops up. At each breakpoint, javascript 
    will stop executing, and let you examine the JavaScript values. 
    After examining values, you can resume the execution of code using the play 
    button.
*/

//Can I use reserved words as identifiers
/*
    No, you cannot use the reserved words as variables, labels, object or 
    function names. 
    Let's see one simple example,
    *var else = "hello"; // Uncaught SyntaxError: Unexpected token else
*/

//How do you detect a mobile browser without regexp
/*
    You can detect mobile browsers by simply running through a list of devices and checking if the 
    useragent matches anything. This is an alternative solution for RegExp usage,
    function detectmob() {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        } else {
            return false;
        }
    }
*/
//How do you get the image width and height using JS
/*
    const img = new Image();
    img.onload = function(){
        console.log(this.width,this.height);
    }
    img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
*/

//How do you make synchronous HTTP request
/*
    Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests 
    from JavaScript.(Client side)
    function httpGet(theUrl){
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", theUrl, false); false for synchronous request
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
    }
*/

//How do you make asynchronous HTTP request
/*
    Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests 
    from JavaScript by passing the 3rd parameter as true.
    function httpGetAsync(theUrl, callback) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.onreadystatechange = function () {
            if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
        };
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }
*/

//How do you convert date to another timezone in javascript
/*
    You can use the 'toLocaleString()' method to convert dates in one timezone to another. 
    For example, let's convert current date to British English timezone as below,
    e.g.
    console.log(event.toLocaleString("en-GB"),{timeZone:"UTC"}) //29/06/2019, 09:56:00
*/

//What are the properties used to get size of window
/*
    You can use innerWidth, innerHeight, clientWidth, clientHeight properties of windows, document 
    element and document body objects to find the size of a window. 
    Let's use them combination of these properties to calculate the size of a window or document,

    var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

    var height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

*/


//Can you apply chaining on conditional operator
/*
    Yes, you can apply chaining on conditional operators similar to if … else if … else if … else 
    chain. The syntax is going to be as below,

    function traceValue(someParam) {
        return condition1
            ? value1
            : condition2
            ? value2
            : condition3
            ? value3
            : value4;
    }

    *The above conditional operator is equivalent to:
    function traceValue(someParam) {
        if (condition1) {
            return value1;
        } else if (condition2) {
            return value2;
        } else if (condition3) {
            return value3;
        } else {
            return value4;
        }
    }
*/

//What are the ways to execute javascript after page load
/*
    *You can execute javascript after page load in many different ways,
    1) window.onload = function....
    2) document.onload = function....
    3) <body onload='script();' >
*/