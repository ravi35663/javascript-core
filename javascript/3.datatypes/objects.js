/* ===================== WAYS TO CREATE OBJECTS IN JAVASCRIPT ===================== */

/* ===================== 1) OBJECT CONSTRUCTOR =====================
    - Built-in Object constructor
    - Both statements create the same result
*/
var obj = new Object();
var obj = Object();

/* ===================== 2) Object.create() =====================
    - Creates a new object using the provided object as its prototype
*/
var obj = Object.create({ name: "Ravi" });

/* ===================== 3) OBJECT LITERAL =====================
    - Easiest and most common way to create objects
    - Properties can be any data type
*/
var obj = {
    name: "Ravi",
    email: "ravi@getnada.com"
};

/* ===================== 4) FUNCTION CONSTRUCTOR =====================
    - Uses a normal function with the new keyword
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var personObj = new Person("Amit", 25);
console.log("Object is:", personObj);

/* ===================== 5) FUNCTION CONSTRUCTOR WITH PROTOTYPE =====================
    - Properties and methods are shared via prototype
    - Memory efficient
*/
function PersonProto() {}

PersonProto.prototype.name = "Ravi";
PersonProto.prototype.age = 25;

var protoObj = new PersonProto();
console.log("PersonProto:", PersonProto.prototype);


/* ===================== 6) ES6 CLASS SYNTAX =====================
    - Modern and cleaner syntax for object creation
*/
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var classObj = new PersonClass("Ravi", 25);
console.log("PersonObj:", classObj.name);


/* ===================== 7) SINGLETON PATTERN =====================
    - Ensures only one instance of an object exists
*/
var singletonObj = new (function () {
    this.name = "Ravi";
})();

console.log("Singleton Obj:", singletonObj);


/* ===================== WHY USE 'new' KEYWORD =====================
    - Creates a new empty object
    - Sets prototype linkage
    - Binds this to the new object
    - Returns the created instance
*/