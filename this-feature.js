this.hobbies = ["chess","cricket"]
const person = {
    name:"Ravi",
    age:25,
    getInfo:()=>{
        console.log("My name is ",this.name) // My name is undefined
        console.log("This is this keyword",this);// this 'this' is refers to its outer scope which is global scope
        //This is this keyword { hobbies: [ 'chess', 'cricket' ] }
    }
}

person.getInfo();
console.log("Again This is",this); // Again this is { hobbies: [ 'chess', 'cricket' ] }
