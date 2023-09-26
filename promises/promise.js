const party = async (money)=>{
    return new Promise((resolve,reject)=>{
        if(money>=1000){
            resolve("Congrats,I will give the party")
        }else{
            reject("Sorry, I will give the party later");
        }
    })
}

console.log(party(5000))


