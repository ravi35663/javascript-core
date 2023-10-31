
const obj = {
    prop1: function () {
      return 0;
    },
    prop2() {
      return 1;
    },
    ["prop" + 3]() {
      return 2;
    },
};

console.log(obj.prop1()); // 0
console.log(obj.prop2()); // 1
console.log(obj.prop3());// 2

/*
    ES6 provides method definitions and property shorthands for objects. 
    So both prop2 and prop3 are treated as regular function values.
*/