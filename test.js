
console.log("This value is",this);
const person = ()=>{
    this.name = "ravi"
    this.age = 25;
    console.log("Person is called",this);
    const getInfo = ()=>{
        console.log("get info is called",this);
        const againGetInfo = ()=>{
            console.log("Agian get info is called",this);
        }
        againGetInfo();
    }
    getInfo();
}
person();
console.log("this object in outer function",this);