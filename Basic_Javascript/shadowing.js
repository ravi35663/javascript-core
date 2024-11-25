var a = 10;
{
    console.log("Value of a ",a)
    var a = 100; // here a is not new variable it is the reference of previous a
    var b=500
}

console.log("Value of a and b ",a,b);