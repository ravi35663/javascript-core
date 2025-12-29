//10. Generate a random password.
const password_length = process.argv[2];
function randomPassword(password_length){
    const char_set = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@$$%^&*()'
    const char_length = char_set.length-1;
    let password = '';
    let min_length = 1;
    for(let i=0;i<password_length;i++){
        const index = Math.floor(Math.random()*(char_length + 1 - min_length)) + min_length;
        password += char_set[index];
    }
    return password;
}

const password = randomPassword((Number(password_length)))
console.log("Random password is ",password);