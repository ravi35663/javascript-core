//What are server-sent events (SSE)
/*
 Server-sent events (SSE) is a server push technology enabling a browser to receive 
 automatic updates from a server via HTTP connection without resorting to polling. 
 These are a one way communications channel - events flow from server to client only. 
 This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.
*/

//How do you receive server-sent event notifications
/*
The EventSource object is used to receive server-sent event notifications. 
For example, you can receive messages from server as below,
*/

// This is client side implementation
if (typeof EventSource !== "undefined") {
    // here sse_generator.js is source of message file (server file)
    // in place of sse_generator.js file you can provide some http url
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
}

//How do you check browser support for server-sent events
if(!typeof EventSource === undefined){
    console.log("Browser is supporting the event source")
}else{
    console.log("Browser does not support EventSource");
}


// What are the events available for server sent events
/**
 * Below are the list of events available for server sent events 
  ** 1) onopen: It is used when a connection to the server is opened
  ** 2) onmessage: it is used when message is received 
  ** 3) onerror: It happens when an error occurs
*/


