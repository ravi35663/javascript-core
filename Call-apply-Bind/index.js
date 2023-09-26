// Call apply and Bind
const person = {
    name:"Ravi",
    email:"ravi@getnada.com",
    address:"india"
}

function greetings(message,punctuation){
    console.log( `Hello ${this.name}, ${message} ${punctuation}`)
}

const message = "How are you"
const punctuation = '?'
// Call
greetings.call(person,message,punctuation);

// Apply 
greetings.apply(person,[message,punctuation]);

// Bind
const  futureFun = greetings.bind(person,message);
futureFun(punctuation);
// greetings.bind(person,"How are you",'?');
// call : call is used to call a function with specifi context;
