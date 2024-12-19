//Why do we use polyfills
/*
    As web technologies are growing and some new features are coming to language
    which are not immediately supported by the older browsers, but we need to implement
    those features into the older browsers as well.
    Well, to solve these issues javascript comes with terminology called 'polyfill'.
*/

// What is Polyfill
/*
    A polyfill (or polyfiller) is a piece of code (or plugin) that provides the 
    technology that we, the developers, expect the browser to provide natively.
*/

//Common Browser Features Where Polyfills Are Used
/*
    JavaScript is the language used to create a polyfill, but a polyfill can be 
    used to implement various browser features other than 
    ECMAScript (ES5, ES6, etc.) standards:
    -> SVG
    -> Canvas
    -> Web Storage (local storage / session storage)
    -> Video
    -> Cross-Origin Resource Sharing (CORS)
    -> HTML5 elements
    -> CSS responsive design modules
    -> Accessibility / ARIA
    -> Web Sockets
    -> Geo Location
    -> Browser State Management and many others!
*/

//Some Real-World Examples
/*
    * Write polyfill for startsWith ES6 method
    if(!String.prototype.startsWith){ // used to remove overriding
        String.prototype.startsWith = function(searchString,fromPosition){
            fromPosition =  fromPosition || 0;
            return this.substr(fromPosition,searchString.length) === searchString;
        }
    }
    let str = "Hello World";
    let subString = 'Hello';
    console.log(str.startsWith(subString,0));
*/


/*
    Another example of a polyfill is for Web Storage (local storage or session storage). 
    The code for it in rough is given below:
*/
if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') (function () {
    // Define the storage type (local or session)
    var Storage = function (type) {
      // Define the storage type (local or session)
      function setData(data) {
        // Sets the data into storage
      }
      function clearData() {
        // clears data from storage
      }
      return {
        length: 0,
        clear: function () {
          clearData();
        },
        getItem: function (key) {
          return data[key] === undefined ? null : data[key];
        },
        key: function (i) {
          var ctr = 0;
          for (var k in data) {
            if (ctr == i) return k;
            else ctr++;
          }
          return null;
        },
        removeItem: function (key) {
          delete data[key];
          this.length--;
          setData(data);
        },
        setItem: function (key, value) {
          data[key] = value + '';
          this.length++;
          setData(data);
        }
      };
    };
    // Set the local and session storage properties inside the window 
    // object
    if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
    if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');
    })();