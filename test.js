const obj1 = {name:"Ravi",age:25,gender:"Male"};
const obj2 = {name:"Amit"};
obj2.__proto__ =obj1
console.log("Actual Obj2 is :",obj2);
console.log("Obj2 with proto is : ",obj2.name);