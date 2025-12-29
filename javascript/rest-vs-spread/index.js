// Default parameter
function greetings(gr = "hi"){
    console.log(gr);
}
greetings() // hi
greetings("hello") // hello

//  Spread Operator:
let a = [1,2,3,4];
let b = [10,20,30];

function test(){
    console.log(a,b)  // console.log will console both a and b array.
}
test();

let arr = [10,20,30];
console.log(arr) // [10,20,30]
console.log(...arr)// 10 20 30

// To convert string to array
let name = "Ravi";
let lastName = "Kumar";
let arrFullName = [...name,...lastName] // ['R','a','v','i','K','u','m','a','r']
// This is deep cloning

//  Spread Operator works with all iterables including objects:
const obj = {
    name:"Sumit",
    age:25,
    email:"sumit@getnada.com"
}
const obj2 = {...obj};
const newObj = {"role_no":123,...obj2};
/*
    Note : - In case of property clashing the property of the last object that is going to spread into 
    the new object wins the game.
*/

/*
===> Spread Vs Rest Operator: 
    ->  Both spread and rest operators share the same syntax.
    ->  The rest operators collect all the remaining elements in an array.
    ->  e.g.
        function doSum(...items){
            let sum = 0
            for(let item of items){
                sum +=item;
            }
        }
        doSum(1);
        doSum(1,2,3,4,5,6);
    ->  if a function has more than one parameter, then the last parameter will be the rest parameter.
*/
