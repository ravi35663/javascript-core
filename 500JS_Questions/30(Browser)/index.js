//How do you print the contents of web page
/*
    The window object provided a print() method which is used to print the contents of the current 
    window. 
    It opens a Print dialog box which lets you choose between various printing options. 
    Let's see the usage of print method in an example,
    *<input type="button" value="Print" onclick="window.print()" />
    Note: In most browsers, it will block while the print dialog is open.
*/

//What is the difference between uneval and eval
/*
The uneval function returns the source of a given object; whereas the eval function does the opposite, 
by evaluating that source code in a different memory area. 
Let's see an example to clarify the difference,
*/

var msg = uneval(function greeting() {
    return "Hello, Good morning";
});
var greeting = eval(msg);
greeting(); // returns "Hello, Good morning"

//What is an anonymous function
/*
    An anonymous function is a function without a name! Anonymous functions are commonly assigned to 
    a variable name or used as a callback function. 
    The syntax would be as below,

    function(optionalParameters) {
        do something
    }

    const myFunction = function(){ //Anonymous function assigned to a variable
    do something
    };

    [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
    do something
    });

*/


//Let's see the above anonymous function in an example,
var x = function (a, b) {
    return a * b;
};
var z = x(5, 10);
console.log(z); // 50

//What is the precedence order between local and global variables
/*
    A local variable takes precedence over a global variable with the same name. 
    Let's see this behavior in an example.
*/
var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg); // Good Evening
}
greeting();