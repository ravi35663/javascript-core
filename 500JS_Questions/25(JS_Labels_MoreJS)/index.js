//What are js labels
/*
    The label statement allows us to name loops and blocks in JavaScript. 
    We can then use these labels to refer back to the code later. 
    For example, the below code with labels avoids printing the numbers when 
    they are same,
*/
var i,j;
loop1:for(i=0;i<3;i++){
    loop2:for(j=0;j<3;j++){
        if(i==j){
            continue loop1; // start from loop1 if condition is true
        }
        console.log(`i:${i} and j:${j}`);
    }
}
// Output:
// i:1 and j:0
// i:2 and j:0
// i:2 and j:1

// console.log("Label 1",loop1);

//What are the benefits of keeping declarations at the top
/*
    It is recommended to keep all declarations at the top of each script or 
    function. The benefits of doing this are,
        1) Gives cleaner code
        2) It provides a single place to look for local variables
        3) Easy to avoid unwanted global variables
        4) It reduces the possibility of unwanted re-declarations
*/

//What are the benefits of initializing variables
/*
    It is recommended to initialize variables because of the below benefits,
        1) It gives cleaner code
        2) It provides a single place to initialize variables
        3) Avoid undefined values in the code
*/

//What are the recommendations to create new object
/*
    It is recommended to avoid creating new objects using new Object(). 
    Instead you can initialize values based on it's type to create the objects.
        1) Assign {} instead of new Object()
        2) Assign "" instead of new String()
        3) Assign 0 instead of new Number()
        4) Assign false instead of new Boolean()
        5) Assign [] instead of new Array()
        6) Assign /()/ instead of new RegExp()
        7) Assign function (){} instead of new Function()
        
        var v1 = {};
        var v2 = "";
        var v3 = 0;
        var v4 = false;
        var v5 = [];
        var v6 = /()/;
        var v7 = function () {};
*/

//How do you define JSON arrays
/*
    JSON arrays are written inside square brackets and arrays contain javascript 
    objects. 
    For example, the JSON array of users would be as below,

    {"users":[
                {"firstName":"John", "lastName":"Abrahm"},
                {"firstName":"Anna", "lastName":"Smith"},
                {"firstName":"Shane", "lastName":"Warn"}
            ]
    }
*/

//How do you generate random integers
/*
    You can use Math.random() with Math.floor() to return random integers. 
    For example, if you want generate random integers between 1 to 10, the 
    multiplication factor should be 10.
    -> Math.floor(Math.random()*10) + 1 // it will gives number between 1 and 10 (10 excluded)
    -> Math.floor(Math.random()*100) +1 // it will gives number between 10 to 100 (100 excluded)

Note: Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
*/

//Can you write a random integers function to print integers with in a range
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min 
}

//What is tree shaking
/*
    Tree shaking is a form of dead code elimination. It means that unused 
    modules will not be included in the bundle during the build process and 
    for that it relies on the static structure of ES2015 module syntax,
    ( i.e. import and export). 
    Initially this has been popularized by the ES2015 module bundler 'rollup'
*/

//What is the need of tree shaking
/*
    Tree Shaking can significantly reduce the code size in any application. 
    i.e, The less code we send over the wire the more performant the application 
    will be. For example, if we just want to create a “Hello World” Application 
    using SPA frameworks then it will take around a few MBs, but by tree shaking 
    it can bring down the size to just a few hundred KBs. 
    Tree shaking is implemented in Rollup and Webpack bundlers.
*/

//Is it recommended to use eval
/*
    No, it allows arbitrary code to be run which causes a security problem. 
    As we know that the eval() function is used to run text as code. 
    In most of the cases, it should not be necessary to use it.
*/