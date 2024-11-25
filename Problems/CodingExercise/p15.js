function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}
  
async function delayedLog(item) {
    await delay();
    console.log(item);
}
  
async function processArray(array) {
    array.forEach(async (item) => {
        console.log("Item number ",item);
      await delayedLog(item);
    })
}
processArray([1, 2, 3, 4]);
/*
    Item number  1
    Item number  2
    Item number  3
    Item number  4
    ==> after two seconds
    1
    2
    3
    4
*/

/*
    The forEach method will not wait until all items are finished but it just runs the 
    tasks and goes next. Hence, the last statement is displayed first followed by a 
    sequence of promise resolutions.
*/

//But you control the array sequence using for..of loop,
async function processArr(array) {
    await delay();
    for (const item of array) {
        console.log("After each 2 second");
      await delayedLog(item);
    }
    console.log("Process completed!");
}
processArr([1, 2, 3, 4]);


var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);
//Set(4) { '+0', '-0', NaN, undefined }

console.log("Symbols");
const sym1 = Symbol("one");
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');
console.log(sym1 === sym2, sym3 === sym4);// false, true

/*

    *Symbol follows below conventions,
    1) Every symbol value returned from Symbol() is unique irrespective of the optional string.
    2) Symbol.for() function creates a symbol in a global symbol registry list. 
       But it doesn't necessarily create a new symbol on every call, it checks first if a symbol 
       with the given key is already present in the registry and returns the symbol if it is found. 
       Otherwise a new symbol created in the registry.
    
    *Note: The symbol description is just useful for debugging purposes.
*/

const sym = new Symbol("one");
console.log(sym);
/*

Symbol is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError

*/