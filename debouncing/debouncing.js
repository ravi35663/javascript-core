/*
    ==> Debouncing : -
        -> Debouncing is a technique used to delay execution after some inactivity.
           To increase the performance of the system.
        -> In context of searching , the API is called when user stop typing.
        -> Debounce is also useful for scrolling web pages or in lazy loading
        */
let counter = 0;
const debounce = (func,delay)=>{
    let timerId;// this used to store timeout id  
    return function (...args) {
        // if we don't clear timer then in each key press after 300 millisecond 
        // the func function called and then there will be no use of debouncing
        clearTimeout(timerId);
        // console.log("This is ",this);

        // if clicking the input continuously and did not reach 300 millisecond then
        // this timer will killed by clearTimeout in next call and this setTime out never called

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Function to be executed on search
function performSearch(value) {
    // Make the API request or perform search logic here
    console.log('Searching...',counter++);
    console.log("value  ",value)
    // Replace this with your actual search logic
}

// this debouncedSearch called each and every key press
const debouncedSearch = debounce(performSearch, 300);

// debouncedSearch(withSomeText)//