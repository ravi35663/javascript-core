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