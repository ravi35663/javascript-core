/*
1) What is prototypes in Javascript 
    ->  When you create any function , arr, object variable class , ..etc
        then javascript engine automatically assigned some hidden prototype
        (method and properties) to those objects(everything in js is an object) 
        and that is known as prototypes in JS.
    -> e.g. let arr = [10,20,30,40,50]
            arr.push, arr.pop,arr.length ....etc are hidden prototypes of JS
            you can also use these prototypes with some other syntax
            .e.g.arr.__proto__ to see all prototypes
    -> arr.__proto__  and Array.prototype are equal and it will show all prototypes of array
        same things happens with other datatype, methods and class ..etc
    ->  prototype is an object which have all methods and properties of 
        particular data type, functions, class ..etc
    -> here arr.__proto__ is and object ((arr.__proto__).__proto__) is also an object and so on
    -> obj = {name:"Ravi",city:"Motihari"}
    -> obj.__proto__ => prototypes of Object => obj.__proto__.__proto__ is null
    -> obj.__proto__ === Object.prototype
    Note: - Everything in javascript is an object , how?
        because if you check anything in javascript with prototypes they ended with an object
    -> Function.prototype == fun.__proto__
    ->  why does JS dev used __proto__ ? they can have any name right?
        -> this is because you would not ended up with any name mistakes like
            you won't write __ by mistake
    -> Each javascript object has internal property which is prototype this property
        point to another object which is Object.prototype
    ==> Object.prototype : - it is top level prototype object in javascript.
        -> it serves as defaults prototype of all objects in javascript
        -> It provides common methods and properties such as toString(), hasOwnProperty(),
           and valueOf(), which are available to all objects through the prototype chain. 
*/

// let arr = [10,20,30];
// show object which is collections of prototype of array
// console.log("Prototype of arr",arr.__proto__) 

// const objectProto = arr.__proto__.__proto__
// console.log("show object which is collections of prototype of an object which is arr.__proto__",objectProto)


// this is called as prototype chaining
// const objObjProto = arr.__proto__.__proto__.__proto__; 
// if null is result of prototype chaining then it is end of the chaining
// console.log("This is end of the prototype chaining because prototype of object is null",objObjProto)

// const obj = {name:"ravi",city:"champaran"}
// console.log('obj.__proto__',obj.__proto__)
// console.log('obj.__proto__.__proto__',obj.__proto__.__proto__)

// function fun(){
//     console.log("Hello");
// }

// console.log('fun.__proto__',fun.__proto__);
// console.log('fun.__proto__.__proto__',fun.__proto__.__proto__);
// console.log('fun.__proto__.__proto__.__proto__',fun.__proto__.__proto__.__proto__);

// const obj = {
//     name:"ravi",
//     city:"champaran",
//     getIntro:function(){
//         console.log(this.name+" from "+this.city);
//     }
// }

// let obj2 = {name:"Amit"}

// Never do this because it affect your code performance
// here this is how obj2 is inherit properties from obj
/*
    This is know as prototypal inheritance where object2 is inheriting 
    properties of obj1
*/ 
// obj2.__proto__= obj;
// console.log('Obj2',obj2)// output will {name:"Amit"}
// console.log("Obj2.city",obj2.city) // output: champaran
// how we see the output is champaran? 
// because , if city did found in obj2 then it goes to obj2.__proto__ 
// if city again did not found then it goes again one deep level of proto
// that is obj2.__proto__.__proto__ and so on until the end of the prototype chain


// Creating a prototype using a constructor function
//  A prototype is created by constructor function or class
function Person(name){
    this.name = name;    
} 
Person.prototype.sayHello = function(){
    console.log('Hello, My name is ',this.name);
}

// sayHello is always there where you use Constructor function Person
// Creating instances of Person
var person1 = new Person('Alice');
var person2 = new Person('Bob');
  
person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob