console.log("Hello World");
//Local storage 
let user_name = 'Ravi'
//set item in local storage : setItem(key,value)
window.localStorage.setItem('name',user_name);

// get Value: getItem(key)
var value  =  localStorage.getItem('name');
console.log("Value is ",value);

// to store any other data types inside local storage:
var person = {name:"ravi",email:'ravi@getnada.com'}
localStorage.setItem('person',JSON.stringify(person));
var str_person = localStorage.getItem('person');
var obj_person = JSON.parse(str_person);
console.log("str_person ",str_person);
console.log("Original person: ",obj_person);

// remove item from local storage:
var rm_item = localStorage.removeItem('name');

// to see the length of keys present in the localStorage 
console.log(localStorage.length);

// To clear out all keys in the local storage
localStorage.clear();
/**
 * Note: 
 * 1) Local and Session storage always stores string value.if you want to store any other data 
 *    types changes that it string then store in local/session storage.
 * 2) Capacity of local storage is depends on device type.(minimum 5MB local storage can hold)
 * 3) All the local and session storage data shared the same origin(protocol://host:port)
 *    i.e. if you create a local and session storage for website 'A.com' then you can only 
 *    access local and session data of website 'A.com' inside the code 'A.com' app.
 * 4) You can only store maximum of 5Mb of data in session storage.
 * 5) As soon as you closed the tab/browser the session data get lost.
 * 6) Local storage data never expired until and unless you not remove/clear data.
 * 7) Session data does not sended to network call directly like cookies.
 * 8) As soon as any user start visiting to the app, the session getting started then and once 
 *    if get away from the application the session get killed. 
 * 9) localStorage : return object of key-value pair.
 * 11) All the implementation of local/session storage is same
*/
