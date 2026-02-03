/*
=> Generic types and functions:
    ->  Generics provide a way to create reusable components that work with a 
        variety of types rather than a single one. 

    -   Generics are compile-time only.It cannot work with run time.

    ->  They allow functions, classes, interfaces and types to be flexible while 
        still maintaining strong type safety.    
*/
/*
=> Benefits of Generics:
    ->  Reusability: You can reuse the same function or class for different 
        data types.
    ->  Type Safety: Generics ensure that the types are consistent, catching 
        errors at compile time.
*/
/*
=> Generic Functions:
    ->  A generic function is a function that can work with any data type. 
    -   You define a generic type using angle brackets <>.
*/
// Generic function example:
function identity<T>(value:T):T{
    return value
}

const id1 = identity<string>("Ravi");
const id2 = identity<number>(42);
console.log("Id1<><><>:",id1);
console.log("Id2: ",id2) // 42


/*
    1)  The function identity<T> uses a generic type T.
    2)  When the function is called, you can specify the type by using 
        identity<number> or identity<string>, or you can let TypeScript infer 
        it.
*/

// Generic Functions with Multiple Types:
function pair<T,U>(key:T,value:U):[T,U]{
    return [key,value];
}

const p = pair<string,number>("age",26);
console.log("Pair is: ",p) // ["age",26]


//Generic Types in Interfaces:
interface Box<T>{
    content: T;
}

const stringBox:Box<string>= {content:"Hello World"}
const numberBox:Box<number> = {content:24}

console.log(stringBox.content) // Hello World
console.log(numberBox.content) // 24

// Generic classes
class DataStore<T>{
    private data: T[] = [];
    add(item:T):void{
        this.data.push(item)
    }
    getAll():T[]{
        return this.data;
    }
}

// string store
const stringStore = new DataStore<string>();
stringStore.add("Ravi");
stringStore.add("Sumit")
stringStore.add('Amit')
console.log("Get all strings: ",stringStore.getAll()); // ["Ravi","Sumit","Amit"]

// Number store
const numberStore = new DataStore<number>();
numberStore.add(10); 
numberStore.add(20);
numberStore.add(30);
console.log("Get all numbers: ",numberStore.getAll()); // [10,20,30]

/*
===> Key Takeaways:
    1) Generic Functions: Allow functions to work with various types while retaining type safety.
    2) Generic Interfaces and Classes: Enable creating flexible, reusable structures.
    3) Multiple Generics: You can use more than one generic type parameter to handle multiple types.
*/