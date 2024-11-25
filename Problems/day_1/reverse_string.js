//11. Reverse a string.
const str = process.argv[2];

const methodOne = (str)=>{
    const str_len = str.length;
    const half_len = Math.floor(str_len/2);
    str = [...str];
    for(let i=0;i<half_len;i++){
        const temp = str[i];
        str[i] = str[str_len-1-i];
        str[str_len-1-i] = temp;
    }
    return str.join("");
}

const methodTwo = (str)=>{
    const str_len = str.length;
    let result = '';
    for(let i=str_len-1;i>=0;i--){
        result+=str[i];
    }
    return result;
}

// const rev_1 = methodOne(str);
const rev_1 = methodTwo(str);
console.log("Reverse string is ",rev_1);
