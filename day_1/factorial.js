//6. Calculate the factorial of a number.
const num = Number(process.argv[2]);
const factorial = (num)=>{
    let result = 1;
    while(num >= 1){
        result *=num;
        num--;
    }
    return result;
}

const fact = factorial(num);
console.log("Factorial of given number is ",fact);

