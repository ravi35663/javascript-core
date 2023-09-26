//14. Find the longest word in a string.
const sentence = process.argv[2];

const methodOne = (sentence)=>{
    let words = sentence.split(' ');
    let word = words[0];
    for(let i=0;i<words.length;i++){
        if(word.length < words[i].length){
            word = words[i];
        }
    }
    console.log("Longest word in the string is ",word);
}

const methodTwo = (sentence)=>{
    sentence +=" ";
    let longest_word = '';
    let word = ''
    for(let i=0;i<sentence.length;i++){
        if(sentence[i] === ' '){
            if(word.length>longest_word.length){
                longest_word = word;
            }
            word='';
        }else{
            word += sentence[i];
        }
    }
    console.log("Longest word is ",longest_word);   
}

// methodOne(sentence);
methodTwo(sentence);