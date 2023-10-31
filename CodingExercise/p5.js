function foo(){
    return;
    {message:"Hello World"};
}
console.log(foo()); // undefined
/*
    This is a semicolon issue. Normally semicolons are optional in JavaScript. 
    So if there are any statements(in this case, return) missing semicolon, it is automatically 
    inserted immediately. Hence, the function returned as undefined.
*/

function bar() {
    return {
      message: "Hello World",
    };
}
console.log(bar()); // {message: "Hello World"}
