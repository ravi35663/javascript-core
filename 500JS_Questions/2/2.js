/**
 * What is a prototype chain:-
 * -> Prototype chaining is used to build new types of objects based on 
 *    existing ones. It is similar to inheritance in a class based language.
 * -> The prototype on object instance is available through 
 *    Object.getPrototypeOf(object) or __proto__ property whereas prototype 
 *    on constructors function is available through Object.prototype.
 * -> Every object in JavaScript has a built-in property, which is called 
 *    its prototype. The prototype is itself an object, so the prototype 
 *    will have its own prototype, making what's called a prototype chain. 
 *    The chain ends when we reach a prototype that has null for its own 
 *    prototype.
*/
/**
 *  The property of an object that points to its prototype is not called 
 *  prototype. Its name is not standard, but in practice all browsers use 
 *  '__proto__'. The standard way to access an object's prototype is the 
 *  Object.getPrototypeOf() method. 
*/
const person = {name:"Ravi"}
person.__proto__.__proto__ // => this is  prototype chaining
// console.log(Object.getPrototypeOf(person));