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
// functionOne();
//ReferenceError: functionOne is not defined
/*
    The function call functionOne is not going to be part of scope chain and it has it's own 
    execution context with the enclosed variable environment. 
    i.e, It won't be accessed from global context. 
    Hence, there will be an error while invoking the function as functionOne is not defined.
*/

console.log("Eat fruit example");
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

/*
  Output:
   {name: "John", eat: f}, Window {...}
*/
/*
  'this' keyword is dynamic scoped but not lexically scoped . In other words, it doesn't matter 
  where this has been written but how it has been invoked really matter. 
  In the above code snippet, the user object invokes eat function so this keyword refers to user 
  object but eatFruit has been invoked by eat function and this will have default Window object.
  
  *The above pit fall fixed by three ways,

  In ES6, the arrow function will make this keyword as lexically scoped. 
  Since the surrounding object of this object is user object, the eatFruit function will contain 
  user object for this object.
  const user = {
    name: "John",
    eat() {
      console.log(this);
      var eatFruit = () => {
        console.log(this);
      };
      eatFruit();
    },
  };
  user.eat();

  The next two solutions have been used before ES6 introduced.
  It is possible create a reference of this into a separate variable and use that new variable 
  in place of this keyword inside eatFruit function. 
  This is a common practice in jQuery and AngularJS before ES6 introduced.
  const user = {
    name: "John",
    eat() {
      console.log(this);
      var self = this;
      var eatFruit = () => {
        console.log(self);
      };
      eatFruit();
    },
  };
  user.eat();

  The eatFruit function can bind explicitly with this keyword where it refers Window object.
  const user = {
    name: "John",
    eat() {
      console.log(this);
      var eatFruit = function () {
        console.log(this);
      };
      return eatFruit.bind(this);
    },
  };
  user.eat()();
*/
