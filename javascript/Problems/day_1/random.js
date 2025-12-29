//5. Generate a random number between a given range.
const args = process.argv;
const [min,max] = args.slice(2).map(item=>Number(item));
const random = (min,max)=>{
    return (Math.floor(Math.random()*(max-min+1)) + min)
}

const randomNumber = random(min,max);
console.log("Random number is ",randomNumber);