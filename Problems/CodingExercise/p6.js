var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars); // [empty, "b", "c", "d"]
console.log(myChars[0]); //undefined
console.log(myChars.length); // 4

/*
    The delete operator will delete the object property but it will not reindex the array or 
    change its length. So the number or elements or length of the array won't be changed. 
    If you try to print myChars then you can observe that it doesn't set an undefined value, 
    rather the property is removed from the array. The newer versions of Chrome use empty 
    instead of undefined to make the difference a bit clearer.
*/
