const user = (name,age,email)=>{
    let k=1;
    for(let i=0;i<=10000000;i++){
        k = k*i;
    }
    return {
        name,age,email
    }
}

module.exports = user;