//13. Check if a string is a palindrome.
const str = process.argv[2];
const isPalindrome = (str)=>{
    let rev_str = '';
    for(let i=str.length-1; i>=0; i--){
        rev_str+=str[i];
    }
    if(str === rev_str){
        console.log(str,' is a palindrome');
    }else{
        console.log(str,' is not a palindrome');
    }
}

isPalindrome(str);