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
