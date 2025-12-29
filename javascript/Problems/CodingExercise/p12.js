const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));// 5

/*
    Behavior of 'const arrowFunc = () => arguments.length;' in node.js
        -> it will show you length 5 . because arguments will show you array of modules

    Behavior of 'const arrowFunc = () => arguments.length;' in browser.
        Arrow functions do not have an 'arguments', 'super', 'this', or 'new.target' bindings. 
        So any reference to arguments variable tries to resolve to a binding in a lexically 
        enclosing environment. 
        In this case, the arguments variable is not defined outside of the arrow function. 
        Hence, you will receive a reference error.
*/
//Where as the normal function provides the number of arguments passed to the function

const func = function () {
    console.log("arguments ",arguments); //arguments  [Arguments] { '0': 1, '1': 2, '2': 3 }
    return arguments.length;
};
console.log(func(1, 2, 3)); // 3

//But If you still want to use an arrow function then rest operator on arguments provides the expected arguments
const arrowFunction = (...args) => args.length;
console.log(arrowFunction(1, 2, 3)); // 3