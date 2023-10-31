function foo() {
    let x = (y = 0); // equivalent let x = (var y = 0) 
    x++;
    y++;
    return x;
}  
console.log(foo(), typeof x, typeof y, y); // 1, undefined, number, 1
/*
    Of course the return value of foo() is 1 due to the increment operator. 
    But the statement let x = y = 0 declares a local variable x. 
    Whereas y declared as a global variable accidentally. 
    This statement is equivalent to,

    let x;
    window.y = 0;
    x = window.y;

    Since the block scoped variable x is undefined outside of the function, the type will be 
    undefined too. Whereas the global variable y is available outside the function, 
    the value is 0 and type is number.
*/