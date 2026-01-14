/*
=>  JavaScript Events:
  - Events are actions or occurrences in the browser.
  - Examples include clicking a button, moving the mouse, or pressing a key.
  - JavaScript listens to these events and responds to them.
  - Used to build interactive and dynamic web applications.
  - Events can occur on elements like buttons, inputs, or the document.

=>  Types of events:
  1) Click Event:
    - Triggered when an element is clicked (button, link, etc.)

  2) Mouse Events:
    - Triggered by mouse actions.
    - Examples: mousemove, mousedown, mouseleave

  3) Keyboard Events:
    - Triggered by keyboard actions.
    - Examples: keydown, keyup, keypress

  4) Form Events:
    - Related to form elements.
    - Examples: submit, change, input

  5) Focus Events:
    - Triggered when element gains or loses focus.
    - Examples: focus, blur

  6) Window Events:
    - Related to browser window.
    - Examples: load, resize, unload

  7) Custom Events:
    - User-defined events for specific application needs.

=>  Event Listener:
  - Used to listen and respond to events on elements.
  - addEventListener attaches an event handler to an element.
  - Example:
      const button = document.getElementById('btn');

      button.addEventListener('click', (event) => {
        console.log("Button is clicked", event);
      });
*/