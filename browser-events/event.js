/*In JavaScript, events are interactions or occurrences that happen in 
  the browser, such as a user clicking a button, moving the mouse, or 
  pressing a key. These events can be captured and handled by JavaScript 
  code, allowing you to create interactive and dynamic web applications. 
  Events can occur on various HTML elements like buttons, input fields, 
  or the document itself.
*/
/*
Here are some types of examples .
1) 'Click Event': Triggered when a user clicked an element (like button,link..etc)
2) 'Mouse Events': Triggered when a user interacts with mouse.(mousemove,mousedown,mouseleave,..etc)
3) 'Keyboard Events': Triggered when a user interacts with keyboard.(keydown,keyup,keypress,...etc)
4) 'Form Events': Events associated with form elements, like (submit,change,input)
5) 'Focus Events': Triggered when an element gains or loses focus.(focus and blur)
6) 'Window Events':Events related to the browser window.(load,resize,unload)
7) 'Custom Events': In Javascript you can also create and trigger customer events 
    in javascript to handle specific scenarios in your application
*/

const button = document.getElementById('btn');
// This is known as event listener which is used to listen on some event call.
// This eventListener used to listen click event on button element which have id 'btn'.
button.addEventListener('click',(event)=>{
    console.log("Button is clicked",event);
})

