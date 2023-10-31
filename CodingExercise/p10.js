//What is the output of below code in non-strict mode

function foo(first,second,first){
    process.stdout.write(`${first} ${second} ${first}`)
}
foo(1,2,3)// 3 2 3

/*
    In non-strict mode, the regular JavaScript functions allow duplicate named parameters. 
    The above code snippet has duplicate parameters on 1st and 3rd parameters. 
    The value of the first parameter is mapped to the third argument which is passed to the 
    function. 
    Hence, the 3rd argument overrides the first parameter.

    Note: In strict mode, duplicate parameters will throw a Syntax Error.
*/

