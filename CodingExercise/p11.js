const printNumbersArrow = (first, second, first) => {
    console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);
/*
    Unlike regular functions, the arrow functions doesn't allow duplicate parameters in 
    either strict or non-strict mode. So you can see SyntaxError in the console.

    const printNumbersArrow = (first, second, first) => {
                                            ^^^^^

    SyntaxError: Duplicate parameter name not allowed in this context
*/

