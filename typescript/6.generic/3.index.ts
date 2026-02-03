/*
=> Using Multiple Type Parameters in TypeScript:
    ->  In TypeScript, you can use multiple type parameters in generic functions, 
        classes, or interfaces to work with more than one type. 

    ->  This allows you to create reusable and flexible components that can
        handle multiple types at once.
*/

//Example: Generic Function with Multiple Type Parameters
function pair<T,U>(first:T,second: U):[T,U]{
    return [first,second];
}

const result1 = pair<string,number>("Ravi",26);
console.log(result1) // ["Ravi",26]

const result2 = pair<number,boolean>(42,true);
console.log(result2) // [42,true]

//Example: Generic Class with Multiple Type Parameters
class KeyValueStore<K,V>{
    private store: Map<K,V> = new Map();

    add(key:K,value:V):void{
        this.store.set(key,value)
    }
    get(key:K): V | undefined{
        return this.store.get(key);
    }
}

const store = new KeyValueStore<string,number>();
store.add("age",26);
console.log(store.get("age")); // 26

//Example: Interface with Multiple Type Parameters
interface Pair<T,U>{
    first: T;
    second: U;
}

const pair1:Pair<string,number> = {first:"height",second:165};
const pair2:Pair<boolean,string> = {first:true,second:"success"}
console.log("Pair1 ",pair1) // {first:'height',second:165}
console.log("Pair2 ",pair2) // {first:true,second:'success}

/*
=> Multiple Type Parameters with Constraints:
    -> You can also apply constraints when working with multiple type parameters.
*/

function displayPerson<T extends {name:string}, U extends {age:number}>(person: T,info:U):void{
    console.log(`${person.name} is ${info.age} years old.`);
}
displayPerson({name:'Ravi'},{age:26}) // Ravi is 26 years old

/*
=> Key Takeaways:
    ->  Multiple type parameters allow for handling multiple types within the 
        same generic function, class, or interface.

    ->  They increase flexibility and reusability, making your code more 
        adaptable.
    ->  Constraints can be applied to each type parameter individually.
    ->  You can create complex type-safe components by combining multiple 
        generics.
*/