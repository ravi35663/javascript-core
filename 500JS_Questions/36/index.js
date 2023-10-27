//What is for...of statement
/*
    The for...of statement creates a loop iterating over iterable objects or elements such as 
    built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, 
    and user-defined iterables. 
    The basic usage of for...of statement on arrays would be as below,
*/
// let arrayIterable = [10, 20, 30, 40, 50];
let arrayIterable = "123456789"
for (let value of arrayIterable) {
//   value++;
  process.stdout.write(`${value} `);
}  
// 11 21 31 41 51 for array
//2 3 4 5 6 7 8 9 10 for string


//What is the output of below spread operator array
const emailData = [..."ravi@g.com"]; 
console.log(emailData); //['r', 'a', 'v', 'i','@', 'g', '.', 'c','o', 'm']

//Is PostMessage secure
/*
    Yes, postMessages can be considered very secure as long as the programmer/developer is careful 
    about checking the origin and source of an arriving message. But if you try to send/receive a 
    message without verifying its source will create cross-site scripting attacks.
*/

//What are the problems with postmessage target origin as wildcard
/*
    The second argument of postMessage method specifies which origin is allowed to receive the 
    message. If you use the wildcard “*” as an argument then any origin is allowed to receive the 
    message. In this case, there is no way for the sender window to know if the target window is 
    at the target origin when sending the message. If the target window has been navigated to 
    another origin, the other origin would receive the data. 
    Hence, this may lead to XSS vulnerabilities.

    *targetWindow.postMessage(message, "*");
*/

//How do you avoid receiving postMessages from attackers
/*
    Since the listener listens for any message, an attacker can trick the application by sending a 
    message from the attacker’s origin, which gives an impression that the receiver received the 
    message from the actual sender’s window. 
    You can avoid this issue by validating the origin of the message on the receiver's end using 
    the “message.origin” attribute. 
    For examples, 
    let's check the sender's origin http://www.some-sender.com on receiver side www.some-receiver.com,

    *Listener on http://www.some-receiver.com/
    window.addEventListener("message", function(message){
        if(/^http://www\.some-sender\.com$/.test(message.origin)){
            console.log('You received the data from valid sender', message.data);
    }
    });
*/

//Can I avoid using postMessages completely
/*
    You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t 
    use postMessage considering the risks, a lot of third party scripts use postMessage to 
    communicate with the third party service. 
    So your application might be using postMessage without your knowledge.
*/

//Is postMessages synchronous
/*
    The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all 
    other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).
    Due to this asynchronous behavior, we use a callback mechanism when the postMessage is 
    returned.
*/

//What paradigm is Javascript
/*
    JavaScript is a multi-paradigm language, supporting imperative/procedural programming, 
    Object-Oriented Programming and functional programming. 
    JavaScript supports Object-Oriented Programming with prototypical inheritance.
*/

//What is the difference between internal and external javascript
/*
    1)  Internal JavaScript: It is the source code within the script tag. 
    2)  External JavaScript: The source code is stored in an external file(stored with .js extension) 
        and referred with in the tag.
*/

//Is JavaScript faster than server side script
/*
    Yes, JavaScript is faster than server side scripts. 
    Because JavaScript is a client-side script it does not require any web server’s help for its 
    computation or calculation. 
    So JavaScript is always faster than any server-side script like ASP, PHP, etc.
*/

//How do you get the status of a checkbox
/*
    You can apply the 'checked' property on the selected checkbox in the DOM. 
    If the value is true it means the checkbox is checked, otherwise it is unchecked. 
    For example, the below HTML checkbox element can be access using javascript as below:

    <input type="checkbox" id="checkboxname" value="Agree" /> Agree the conditions<br />
    console.log(document.getElementById("checkboxname").checked) // true or false
*/

//What is the purpose of double tilde operator
/*
    The double tilde operator(~~) is known as double NOT bitwise operator. 
    This operator is a slightly quicker substitute for Math.floor().
*/

//How do you convert character to ASCII code
/*
    You can use the String.prototype.charCodeAt() method to convert string characters to ASCII 
    numbers. For example, 
    let's find ASCII code for the first letter of 'ABC' string,
*/
var char = "ABC";
char.charCodeAt(0); // returns 65

//Whereas String.fromCharCode() method converts numbers to equal ASCII characters.
const charsFromASCII = String.fromCharCode(65,66,67);
console.log(charsFromASCII);//ABC

//What is ArrayBuffer
/*
    An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. 
    You can create it as below,
*/
var buff
let buffer = new ArrayBuffer(16); // create a buffer of length 16
alert(buffer.byteLength); // 16
