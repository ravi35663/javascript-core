//3. Find the maximum of three numbers.
let args = process.argv;
const [num1,num2,num3] = args.slice(2).map(item=>Number(item));

function max(num1,num2,num3){
    if(num1 > num2 && num1> num3){
        return num1;
    }else if(num2>num3){
        return num2;
    }else{
        return num3;
    }
}

const max_number = max(num1,num2,num3);
console.log("Greater number is ",max_number);