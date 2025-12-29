let myNumber = 100;
let myString = "100";

if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}

/*
    *Outputs:
        1) It is a string
        2) It is a number
*/

/*
    Explanation:
        The return value of typeof myNumber or typeof myString is always a truthy value 
        (either "number" or "string"). The ! operator operates on either typeof myNumber or 
        typeof myString, converting them to boolean values. Since the value of both !typeof 
        myNumber and !typeof myString is false, the if condition fails, and control goes to 
        else block.

        *To make the ! operator operate on the equality expression, one needs to add parentheses:
            if (!(typeof myNumber === "string"))

        *Or simply use the inequality operator:
            if (typeof myNumber !== "string")
*/

console.log(JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] }));
console.log(JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")]));
console.log(JSON.stringify({ myArray: ["one", undefined, function () {console.log("Hello World");return "hii"}, Symbol("")] }));


/*
    *Output:
        {"myArray":['one', null,null,null]}, {},{"myArray":['one', null,null,null]}
        
        1) The 'undefined', 'Functions', and 'Symbols' are not valid JSON values. So those values 
           are either omitted (in an object) or changed to null (in an array). 
           Hence, it returns null values for the value array.
        2) All Symbol-keyed properties will be completely ignored. 
           Hence it returns an empty object({}).
*/

class Me{
    constructor(){
        console.log("Me is called");
    }
}
console.log("Class example");
class A extends Me{
    constructor() {
        // super();
        console.log(new.target.name);
        console.log("New target is ",new.target);
    }
}
  
class B extends A {
    constructor() {
        super();
    }
}
  
new A();
new B()
/*
    Output:
      A
      B    
*/

/*
    Explanation:
      1) Using constructors, new.target refers to the constructor (points to the class 
         definition of class which is initialized) that was directly invoked by new. 
         This also applies to the case if the constructor is in a parent class and was delegated 
         from a child constructor.
*/

/*
    const [x, ...y, z] = [1, 2, 3, 4];
    console.log(x, y, z);
    Explanation:
        It throws a syntax error because the rest element should not have a trailing comma. 
        You should always consider using a rest operator as the last element.
*/


const { a: x = 10, b: y = 20 } = { a: 30 };
console.log(x); // 30
console.log(y); // 20
/*
    Explanation:
    *The object property follows below rules,
        1) The object properties can be retrieved and assigned to a variable with a different name
        2) The property assigned a default value when the retrieved value is undefined
*/