/*
*   In javascript error occurs during execution of your code, this is cause
    because of incorrect input, unexpected behavior, network issue .etc.
    To handle error effectively user combinations of techniques.
    1) try-catch :- 
        This is strategy we wrap our code into the try block and catch any exceptions 
        occurs into the catch block of the code.
        e.g.
            try {
            Code that might throw an error
            } catch (error) {
                Error handling code
            }
    2)throw an error: -
        we can manually throw an error during execution of the code.
        this helps us to create custom error which will occurs during execution
        of known issues.
        e.g.
            function divide(a,b){
                if(b===0){
                    throw new Error("Cannot divide by zero")
                }
                return a/b;
            }
            try {
                console.log(divide(10, 0));
            } catch (error) {
                console.log(error.message); // Outputs: "Cannot divide by zero"
            }
    3) Error types: -
        Javascript provides various build in error types such as Error, Syntax
        error, Type Error ..etc.we can use these types of error and handle specific
        type of errors.
    4) Finally block: -
        finally block is optional with try-catch block. Which include to run
        either error occurs or not . Usually final used to clean up operations
        on try catch.
    5) Error event Handler: -
        In browser based javascript, you can handle run time error using 
        'window.onerror' event handler.This allows you to catch unhandled errors and 
        perform specific actions.
        e.g.
            window.onerror = function(message, source, line ,column, error){
                Error handling code
            }
*/

const divide = (a,b)=>{
    if(b==0){
        throw new Error('Cannot divide by 0');
    }
    return a/b
}

document.querySelector('#button').addEventListener('click',()=>{
    try {
        divide(10,0);
    } catch (error) {
        console.log('Error is',error.message);
    }
})