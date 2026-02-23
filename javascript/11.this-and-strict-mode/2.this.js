"use strict";

// RULE: `this` depends on HOW a function is CALLED, not where it is written.

const obj = {
  name: "Object",

  normal() {
    console.log("normal:", this?.name);
  },

  arrow: () => {
    console.log("arrow:", this?.name);
  }
};

const name = "Global";

// 1️ Method Call → this = object
obj.normal();      
// normal: Object

// 2️ Function Call → this = undefined (strict mode)
const fn = obj.normal;
fn();              
// normal: undefined

// 3️ Forced this → call/apply/bind
fn.call(obj);      
// normal: Object

// 4️ Arrow Function → takes this from outer scope (NOT caller)
obj.arrow();
// arrow: undefined (or Global in non-strict)

// 5️ Constructor → this = new object
function User(name) {
  this.name = name;
}

const u = new User("Ravi");
console.log("constructor:", u.name);
// constructor: Ravi

/*
MENTAL MODEL:

obj.method()   → this = obj
fn()           → this = undefined
fn.call(obj)   → this = obj
arrow()        → this = outer scope
new Fn()       → this = new object

=> `this` is decided at CALL TIME.
*/
