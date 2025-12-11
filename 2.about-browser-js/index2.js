
//How do you redirect new page in javascript
/*
    function redirect() {
        // you can replace "newPage.html" to any valid url
        window.location.href = "newPage.html";
    }
*/

//How do you get the current url with javascript
/*
    -> By using 'window.location.href' 
*/

//What are the various url properties of location object
/*
    The below 'Location' object properties can be used to access URL components of the page.
    
    *URL: https://www.example.com:8080/path/to/resource?query=example#section
    *1) href - The entire URL (https://www.example.com:8080/path/to/resource?query=example#section)
    *2) protocol - The protocol of the URL (https)
    *3) host - The hostname and port of the URL (www.example.com:8080)
    *4) hostname - The hostname of the URL (www.example.com)
    *5) port - The port number in the URL (8080)
    *6) pathname - The path name of the URL (/path/to/resource)
    *7) search - The query portion of the URL (?query=example)
    *8) hash - The anchor portion of the URL (#section)
*/

//How to get query string values in javascript?
/*
    ->  You can use 'URLSearchParams' to get query string values in javascript. 
    ->  Let's see an example to get the client code value from URL query string,

        const urlParams = new URLSearchParam(window.location.search);
        const clientCode = urlParams.get("clientCode");
*/

//How do you display current date and time?
/*
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    document.write(today);
*/

//How do you compare two date objects
/*
    ->  You need to use date.getTime() method to compare date values instead of comparison 
        operators (==, !=, ===, and !== operators).
    ->  i.e.
            var d1 = new Date();
            var d2 = new Date(d1);
            console.log(d1.getTime() === d2.getTime()); //true
            console.log(d1 === d2); // false
*/

// How do you check if a string starts with another string
/*
    i.e.
    "Good morning".startsWith("Good"); // true
    "Good morning".startsWith("morning"); // false
*/

//How do you trim a string in javascript
/*
    ->  JavaScript provided a trim method on string types to trim any white spaces present 
        at the beginning and at the end of the string.
    -> Example:
            let word = "    hello World.          ";
            console.log(word.trim()) // hello World.
*/

//Is the !-- notation represents a special operator
/*
    ->  No,that's not a special operator. But it is a combination of 2 standard operators 
        one after the other,
            1) A logical not (!)
            2) A prefix decrement (--)
    ->  At first, the value decremented by one and then test to see if it is equal to zero or not for 
        determining the truthy/falsy value.
*/

//How do you assign default values to variables
/*
    ->  You can use the logical or operator || in an assignment expression to provide a default value. 
    ->  The syntax looks like as below,
            var a = b || c;
    ->  As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy 
        (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.
*/
