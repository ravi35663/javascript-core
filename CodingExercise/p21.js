message();

function message() {
  console.log("Hello");
}
function message() {
  console.log("Bye");
}
// Bye
/*
    As part of hoisting, initially JavaScript Engine or compiler will store first function in 
    heap memory but later rewrite or replaces with redefined function content.
*/

var currentCity = "NewYork";

var changeCurrentCity = function () {
  console.log("Current City:", currentCity);
  var currentCity = "Singapore";
  console.log("Current City:", currentCity);
};
changeCurrentCity();
console.log("Current City:", currentCity);
/*
    Output:
        Current City: undefined
        Current City: Singapore
        Current City: NewYork

    *Due to hoisting feature, the variables declared with var will have undefined value in the 
    creation phase so the outer variable currentCity will get same undefined value. 
    But after few lines of code JavaScript engine found a new function call(changeCurrentCity()) 
    to update the current city with var re-declaration. 
    Since each function call will create a new execution context, the same variable will have 
    undefined value before the declaration and new value(Singapore) after the declarion. 
    Hence, the value undefined print first followed by new value Singapore in the execution 
    phase.
*/


function second() {
    var message;
    console.log(message);
}
  
function first() {
    var message = "first";
    second();
    console.log(message);
}
  
var message = "default";
first();
console.log(message);
/*
    Output:
        undefined
        first
        default
*/
/*
    Each context(global or functional) has it's own variable environment and the callstack of 
    variables in a LIFO order. So you can see the message variable value from second, 
    first functions in an order followed by global context message variable value at the end.
*/

var expressionOne = function functionOne() {
    console.log("functionOne");
};
functionOne();
//ReferenceError: functionOne is not defined
/*
    The function call functionOne is not going to be part of scope chain and it has it's own 
    execution context with the enclosed variable environment. 
    i.e, It won't be accessed from global context. 
    Hence, there will be an error while invoking the function as functionOne is not defined.
*/


const user = {
    name: "John",
    eat() {
      console.log(this);
      var eatFruit = function () {
        console.log(this);
      };
      eatFruit();
    },
};
user.eat();