/*
=> Constraints with Generics in TypeScript:
    ->  Sometimes, when using generics, you may want to enforce certain 
        constraints on the type that can be passed. By using constraints, you 
        can ensure that the generic type adheres to a specific structure or has 
        certain properties.

    ->  You can add constraints to generics using the 'extends' keyword. 
        This ensures that the generic type must extend a certain type or 
        implement certain properties/methods.
*/ 
/*
=> Generic Constraints Example:
    ->  Let’s create a function that works with an object that must have a 
        length property. Without a constraint, this function could fail if the 
        type passed doesn’t have a length property.
*/

// A generic function with a constraint using the 'extends' keyword 
function logLength<T extends {length: number}>(item:T):void{
    console.log(item.length) // throw error if item does not have length property
}
// Now this will work, as 'string' and arrays have a length property
logLength('Hello') // Output: 5
logLength([1,2,3,4]) // Output: 4

//Below you'll get error of argument of type 'number' is not assignable to parameter
// logLength(10)

/*
=> Why Use Constraints?
    ->  To ensure that the generic type has certain methods or properties.
    ->  To narrow down the types allowed in a generic function or class.
*/
/*
=> Using Interfaces as Constraints:
    ->  You can also use interfaces to enforce more complex constraints.
*/

interface HasName{
    name: string;
}

function printName<T extends HasName>(obj:T):void{
    console.log(obj.name);
}

const person = {name:"Alice", age:30};
printName(person); // Output Alice

//Error: Argument of type '{age:25}' is not assignable
// printName({age:35});
/*
=> Multiple Constraints:
    ->  You can also apply multiple constraints using the & (intersection) operator.
*/

interface HasAge{
    age:number;
}

function logDetails<T extends HasName & HasAge>(obj:T):void{
    console.log(`Hi My name is ${obj.name} and my age is ${obj.age}`);
}
const personDetails = { name: "Bob", age: 40 };
logDetails(personDetails); // Output: Name: Bob, Age: 40

// Error: Missing 'age' property
// logDetails({ name: "Charlie" });