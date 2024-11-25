var y = 1;
if(function f(){}){
    console.log("If block run")
    y += typeof f;
}

console.log(y);
/*
    If block run
    1undefined

    Explanation:
        The main points in the above code snippets are,
        1) You can see function expression instead function declaration inside if statement. So it always returns true.
           Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.
*/

var x = 1;
function p(){}
if(p){
    console.log("If block is called");
    x += typeof p;
}
console.log(x);
/*
    here: function p is declared hence,
        If block is called
        1function 
*/
