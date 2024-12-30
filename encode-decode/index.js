/*
 *How do you decode or encode a URL in JavaScript?
-> encodeURI() function is used to encode an URL. This function requires a URL 
   string as a parameter and return that encoded string. decodeURI() function is 
   used to decode an URL. This function requires an encoded URL string as parameter 
   and return that decoded string.
*/

let uri = "employeeDetails?name=john&occupation=manager";
let encodedURI = encodeURI(uri);
let decodedURI = decodeURI(encodedURI);
console.log({uri,encodedURI,decodedURI});

/* Note: If you want to encode characters such as / ? : @ & = + $ # then you 
   need to use encodeURIComponent().
*/