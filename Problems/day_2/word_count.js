//12. Count the number of words in a string.
const sentence  = process.argv[2];

const methodOne = (sen)=>{
    return sen.split(' ').length;
}

const methodTwo = (sen)=>{
    const words = [];
    let word = "";
    for(let i=0;i<sen.length;i++){
        word += sen[i];
        if(sen[i] === ' '){
            words.push(word);
            word = '' 
        }
    }
    return words.filter((item)=>{
        if(item){
            return item;
        }
    }).length;
}

// const count1 = methodOne(sentence);
const count1 = methodTwo(sentence);
console.log("Number of words in a string is ",count1+1);
