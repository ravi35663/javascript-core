/*
    Iterators:
        In JavaScript, an iterator is an object that allows you to traverse a collection 
        (like an array or a string) one element at a time. It follows a specific protocol, 
        providing a next() method that returns an object with two properties:
        value (the next value in the sequence) and done (a boolean indicating if the iteration is complete).

*/
function Iterator(arr){
    let index = 0;
    return {
        next:()=>{
            if(index < arr.length){
                return {
                    value:arr[index++],
                    done:false
                }
            }else{
                return {   value:undefined, done:true}
            }
        }
    }
}

// Method-1
const arr = [1,2,3,4];
const iterator = Iterator(arr);
console.log("Iterator is :",iterator.next());
console.log("Iterator is :",iterator.next());
console.log("Iterator is :",iterator.next());
console.log("Iterator is :",iterator.next());
console.log("Iterator is :",iterator.next());

// Method-2
const iter = arr[Symbol.iterator]();
console.log("Iter: ",iter.next());
console.log("Iter: ",iter.next());
console.log("Iter: ",iter.next());
console.log("Iter: ",iter.next());
console.log("Iter: ",iter.next());