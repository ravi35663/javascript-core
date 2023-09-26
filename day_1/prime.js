//4. Check if a number is prime.
let args = process.argv;
// console.log(args);
const num = Number(args[2]);
const isPrime = (number)=>{
    for(let i=2;i*i<=number;i++){
        if(number%i === 0){
            return 0;
        }
    }
    return 1;
}

const prime = isPrime(num);
if(prime){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}