/**
 * What is JSON and its common operations?
 * JSON is a text-based data format following JavaScript object syntax, 
 * which was popularized by Douglas Crockford. It is useful when you want to 
 * transmit data across a network and it is basically just a text file with 
 * an extension of .json, and a MIME type of application/json
*/

/*Parsing: Converting a string to a native object
-> the text must be a valid json
   JSON.parse(text);
*/

/**
 * Stringification: converting a native object to a string so it can be 
 * transmitted across the network
 * JSON.stringify(object)
 * 
*/
const obj = {name:"ravi",age:25};
const stringifyJson = JSON.stringify(obj);
console.log(stringifyJson); //{"name":"ravi","age":25} as string
console.log(stringifyJson[0]) // '{'

//Parsed in object
const parsedObj = JSON.parse(stringifyJson);
console.log('parsedObj ',parsedObj) //{"name":"ravi","age":25} as object
console.log(parsedObj.name) // ravi

//What is JSON
/*
   JSON (JavaScript Object Notation) is a lightweight format that is used for data 
   interchanging. It is based on a subset of JavaScript language in the way objects 
   are built in JavaScript.
*/

//Why do you need JSON
/*
   When exchanging data between a browser and a server, the data can only be text. 
   Since JSON is text only, it can easily be sent to and from a server, and used as 
   a data format by any programming language.
*/
