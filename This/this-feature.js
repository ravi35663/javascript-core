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

/*
===> JS 'this' keyword : -
    ->  'this' is not a variable , it is a keyword and we cannot change the value of 'this' keyword
    ->  'this' refers to an object
    ->  'this' refers to different objects where it is used .
    ->   in 'strict' mode 'this' is empty object
    -> Example:
        const person = {
            name: "sumit",
            age: 25,
            getThis:function (){
                console.log("This",this); // this refers to the "person" object(Both server + browser)
                // this will show empty if you use arrow fun.

            },
        }
        this.name = "Amit"
        console.log(this) // Refers to a global object in the browser.but empty in node side.
        console.log(person.getThis())
        Output : -
        {
            name:"Amit",
            age: 25,
            getThis:()=>{}// function definition 
        }
        "This"{
            name:"sumit",
            age: 25,
            getThis:()=>{}// function definition 
        }
*/