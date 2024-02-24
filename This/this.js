// Learning this keyword
// 'strict mode'
// 1. this in global scope
var a = 10 // here this in side a global scope
console.log(this) 
// this in global scope represent the globalObject
// javascript run so many places like on node,on browser,on smart watch , on bulb .etc
/* 
    when we are running javascript on browser, the global object for browser is 'window' 
    that is why we see 'window' on browser. if you see global object of node then it can 
    be something else and same for other devices like mobile, bulb .etc
    ->  for node js the value of this in globalScope is 'global'.that is globalScope of 
        node is 'global' 
*/
// 2. this in function space
// this (this substitution) 
/*
    if the value of this keyword is null or undefined then the value of this keyword is 
    replaced by globalObject.Only in non-strict mode.
    -> the value of this keyword depends how the function is called
*/
function x(){
    console.log(this)
    //In non-strict mode function's 'this' represents the window object which is different to global 'this' object.
    // in 'strict mode' function's 'this' show undefined because of javascript "strict rule"
}

// the value of this keyword depends how the function is called
x(); // here this -> undefined in strict mode // function is called without any reference
window.x() // there this -> window // because function called with global reference //this same global window object
// 3. this in strict mode


// this inside of object's methods
const student1 = {
    "name":"Ravi Kumar sharma",
    info:function(){
        console.log("this inside object",this) 
        // here this represent the object itself in both strict and non-strict mode.
    }
}

const student2 = {
    "name":"Kartike",
}

// call,apply and bind (used to share methods with objects (everything in js is object apart from primitive DT))
//  the value of this can be modify by using call,apply and bind methods
student1.info.call(student2);// here we're overriding the this of student1 object by student2 object

// this inside arrow function
/*
-> Arrow function do not have their own this.
-> Arrow function take this of their lexical environment where it is enclosed
*/

const obj = {
    "full_name":"Ravi Kumar",
    obj2:{
        info:()=>{
            console.log("This is in arrow function",this) 
            // here this arrow function enclosed in global context because outside it is in global object
        }
    },
    info2:()=>{
        // enclosing lexical context 
        console.log("This is in arrow function 2",this) // here this arrow function enclosed in global context
    },
    info:function(){
        console.log("here this is replaced by obj object",this)
    },
    value:this // here this replaced by globalObject

}

console.log(obj.info2())

const newObj = {
    "full_name":"Ravi kumar",
    x:function (){
        console.log("This inside function x: ",this)
        const y = ()=>{
            console.log("Arrow function inside x which is inside newObj",this)
            // here this will be newObj because y arrow function enclosed in x function and x's this is newObj
        }
        y();
    }
}
newObj.x()

// this keyword inside the DOM:
// you use this inside any element then this will represents that element itself(reference of the html element).

// this keyword behaves differently in classes in javascript