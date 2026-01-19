// ======================= POLYFILLS =======================
// 1) Why do we use polyfills
/*
  - New JavaScript and browser features are not immediately supported by older 
    browsers
  - Polyfills allow us to use modern features in older browsers
  - They help maintain backward compatibility
*/

// 2) What is a polyfill
/*
  - A polyfill is JavaScript code (or a plugin) that provides functionality
    which a browser should support natively but doesn’t
*/

// 3) Common browser features where polyfills are used
/*
  - SVG
  - Canvas
  - Web Storage (localStorage / sessionStorage)
  - Video
  - Cross-Origin Resource Sharing (CORS)
  - HTML5 elements
  - CSS responsive design modules
  - Accessibility / ARIA
  - WebSockets
  - Geolocation
  - Browser state management and more
*/

// 4) Polyfill example: ES6 String.startsWith
/*
- Adds startsWith support if it does not exist
*/
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, fromPosition) {
    fromPosition = fromPosition || 0;
    return this.substr(fromPosition, searchString.length) === searchString;
  };
}

let str = "Hello World";
let subString = "Hello";
console.log(str.startsWith(subString, 0));

// 5) Polyfill example: Web Storage
/*
- Provides localStorage and sessionStorage support if unavailable
*/
if (
  typeof window.localStorage === "undefined" ||
  typeof window.sessionStorage === "undefined"
) (function () {
  var data = {};

  var Storage = function () {
    return {
      length: 0,
      clear: function () {
        data = {};
      },
      getItem: function (key) {
        return data[key] === undefined ? null : data[key];
      },
      key: function (i) {
        var ctr = 0;
        for (var k in data) {
          if (ctr === i) return k;
          ctr++;
        }
        return null;
      },
      removeItem: function (key) {
        delete data[key];
        this.length--;
      },
      setItem: function (key, value) {
        data[key] = value + "";
        this.length++;
      }
    };
  };

  if (typeof window.localStorage === "undefined") {
    window.localStorage = new Storage();
  }
  if (typeof window.sessionStorage === "undefined") {
    window.sessionStorage = new Storage();
  }
})();

// 6) Key points about polyfills
/*
  - Polyfills are written in JavaScript
  - Used to support modern features in older browsers
  - Should not override existing native implementations
*/

// 7) Custom polyfill: Array.map
/*
- myMap replicates Array.prototype.map
*/
const arr = [..."123456789"];
console.log(arr);

Array.prototype.myMap = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

// 8) Custom polyfill: Array.filter
/*
- myFilter replicates Array.prototype.filter
*/
Array.prototype.myFilter = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

// 9) Using custom polyfills
const myMapResult = arr.myMap(item => Number(item));
const myFilterResult = myMapResult.myFilter(item => item % 2 === 0);

console.log("My mapped result is", myMapResult);
console.log("My filtered result is", myFilterResult);