// What is the difference between window and document
/*
 *Window:
 1) Widow is a root level element of any web page
 2) By default window object is available implicitly in the page
 3) It has methods like alert(), confirm() and properties like document, location
*/
/*
 *Document
 1) document is the direct child of the window object.This is also known as DOM(Document Object Model)
 2) you can access document via window.document or document.
 3) It provides methods like getElementById, getElementsByTagName, createElement etc.
*/

//How do you access history in javascript
/*
 The window.history object contains the browser's history. You can load previous and 
 next URLs in the history using back() and next() methods.
*/

function goBack(){
    window.history.back();// move back to previous url
}

function goForward(){
    window.history.forward() // move forward to next url (if you were on back url)
}
//Note: You can also access history without window prefix.

//How do you detect caps lock key turned on or not
/*
 The mouseEvent => 'getModifierState()' is used to return a boolean value that indicates 
 whether the specified modifier key is activated or not. The modifiers such as CapsLock, 
 ScrollLock and NumLock are activated when they are clicked, and deactivated when 
 they are clicked again.

 Let's take an input element to detect the CapsLock on/off behavior with an example,
    <div>
    <input type="password" onmousedown="enterInput(event)" />
    <p id="feedback"></p>
        <script>
        function enterInput(e) {
            var flag = e.getModifierState("CapsLock");
            if (flag) {
            document.getElementById("feedback").innerHTML = "CapsLock activated";
            } else {
            document.getElementById("feedback").innerHTML = "CapsLock not activated";
            }
        }
    </script>
    </div>
*/


