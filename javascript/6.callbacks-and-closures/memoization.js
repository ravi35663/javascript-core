/* ===================== MEMOIZATION =====================
    - Memoization is a functional programming technique
    - Improves performance by caching computed results
    - Function arguments are used as cache keys
    - If result exists in cache → return it
    - Otherwise → compute, store, and return
*/
/* ===================== MEMOIZATION EXAMPLE =====================
    - Addition function with caching
*/
const memoizAddition = () => {
    let cache = {}; // stores previously computed results

    return (value) => {
        if (value in cache) {
            console.log("Fetching from cache");
            // Bracket notation used because keys are numbers
            return cache[value];
        } else {
            console.log("Calculating result");
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    };
};

// Returned memoized function
const addition = memoizAddition();

console.log(addition(20)); // 40 → calculated
console.log(addition(20)); // 40 → cached