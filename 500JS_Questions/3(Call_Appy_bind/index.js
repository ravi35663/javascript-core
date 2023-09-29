//What is the difference between Call, Apply and Bind

/* Call: The call() method invokes a function with a given this value and 
   arguments provided one by one
*/
var emp1 = {firstName:"John", lastName:"Rodson"};
var emp2 = {firstName:"Jimmy", lastName:"Baily"}

function invite(greeting1,greeting2){
    console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

// invite.call(emp1,"Hello","How are you?");// Hello John Rodson, How are you?
// invite.call(emp2,"Hello","How are you?"); // Hello Jimmy Baily, How are you?


/**
 * Apply: Invokes the function with a given this value and allows you to 
 * pass in arguments as an array
*/
// invite.apply(emp1,["Hello","How are you?"]);// Hello John Rodson, How are you?
// invite.apply(emp2,["Hello","How are you?"]);// Hello Jimmy Baily, How are you?


/**
 * bind: returns a new function, allowing you to pass any number of 
 * arguments
 * 
*/

const bindInvite = invite.bind(emp1);
bindInvite("Hello",'How are you?');