function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  async function delayedLog(item) {
    await delay();
    console.log(item);
  }
  
async function processArray(array) {
    array.forEach((item) => {
      await delayedLog(item);
    })
}
processArray([1, 2, 3, 4]);
/*
    Even though “processArray” is an async function, the anonymous function that we 
    use for forEach is synchronous. 
    If you use await inside a synchronous function then it throws a syntax error.
*/
