/*
==> Array :
    ->  An array is a collection of similar or dissimilar kind of elements (heterogeneous elements).
        arr = [1,2,3,"Sumit", 1.23, {name:"Ravi"}]
    ->  const arr = new Array(4) // it will create 4 empty blocks which will have undefined 
        value stored.
        arr.length --> 4
    ->  To Check array type:
        arr = [1,"",1.9];
        arr.constructor === Array --> true

        Array.isArray(arr)  -> true
        Array.isArray(12)   -> false
    ->  ("kks").constructor === Array ->  false
    ->  arr.length => it is variable not a function
*/
//  Array's pre-defined functions in javascript:
let nums = [1,2,3,4,5,6,7,8,9,10];

// array.map
const mappedArray = nums.map(item=> item * 10 ); // One-Liner-Code
console.log("mappedArray: <><><>:",mappedArray)//

const mappedArray_2 = nums.map(item=>{
    return item + 10
})
console.log("mappedArray: <><><>:",mappedArray_2)
// filter:
const filteredArray = nums.filter(item => item%2 == 0);
console.log("filteredArray: ",filteredArray);

const filteredArray_2 = nums.filter(item => {
    if(item %2 !== 0){
        return item;
    }
});
console.log("filteredArray_2: ",filteredArray_2);

// Reduce: (Used to return single value)
const total = nums.reduce((total,num)=>{
    return total + num; // this return value will be total after return.
},0); // in place of 0 you can initialize any data types
console.log("Sum is: ",total);

// Some: return true if any condition is true else return false:
let someValue = nums.some(item=> item %2 == 0);
console.log("Some values: ",someValue);


// Every: return false if any value is false else return true:
const everyValue = nums.every(item=> item % 2==0);
console.log("everyValue<><><><>: ",everyValue);

/*
    Note: sort (“ASCII code based string or character based sorting”), reverse, push, 
    arr.concat(arr1,arr2,arr3,......upto n) etc.
*/