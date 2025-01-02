var a = 10;
{
    console.log("Value of a ",a)
    var a = 100; // here a is not new variable it is the reference of previous a
    var b=500
}

console.log("Value of a and b ",a,b);

/*
==> Block Scope & Shadowing in JS :-
    -> {
            console.log(“Hello World”);
            // Block is also known as compound statement.
        }
        {
            console.log(“You can write more than one blocks in JS”);
        }
    -> let & const always placed in separate memory space which is known as block. 
    -> Because of the above statement, let and const have a block level scope.
*/

/*

===> Shadowing In JS : 
    -> Shadowing has behavior in block as well as function scope .
    ->  Example .
        var a=100;
        {
            var a = 10; --> Shadow of “a” & “this” is known as shadowing & it kept the reference of a (above the block)
            var b = 10
            const c = 11
            console.log(“Value of a”,a); ==> 10;
        }
        console.log(“Value of b”,b); // 10;
	    console.log(“Value of a outside the scope”,a); 10;
    ->  Wherever any variable declared with var , it will be in global scope memory irrespective of 
        scope.

==> There is three type of scopes 
    1)Global scope:-    Global Memory
    2)Script Scope:-    
    3)Block Scope:-     Where let and const are hoisted in main JS File.(in a in-memory block)

==> Illegal Shadowing : -
    ->  let a = 10;
        {
            var a = 11
        } //Error is : Error (SE) Identifier a has already been declared.
*/

