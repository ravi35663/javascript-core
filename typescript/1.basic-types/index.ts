/*
==> Primitive Types:
    1) string: Represents textual data.
    2) number: Represents numeric values (both integers and floats).
    3) boolean: Represents true/false values.
    4) null: Represents an intentional absence of any value.
    5) undefined: Represents a variable that hasn't been assigned a value.
    6) symbol: Represents unique and immutable values.
    7) bigint: Represents large integers beyond the number type's safe range.
*/

/*
==> Other Types:
    1) any: Represents any value, bypassing type checking.
    2) unknown: Represents any value but requires type checking before usage.
    3) never: Represents values that never occur 
        (e.g., functions that throw errors or never return).
    4) void: Represents the absence of a value, typically used as the return type for 
       functions that do not return anything.
*/

/*
// ==> Use of 'any':
    let data: any;
    data = 42;
    data = "Hello"
    data = true;
    function log(data:any): void { 
        // here function is not returning anything that is why its return type is void
        console.log("Data",data); 
    }
*/

/*
// Use of 'unknown':
    let data:unknown;
    data = 10;
    data = "Hello";
    function processData(value: unknown): void {
        if(typeof value === "string"){
            console.log("Here it is safe to use string methods")
        }else if(typeof value === "number"){
            console.log("Safe to use number methods")
        }
    }
    processData(data);
*/

// Never:  When a function will never complete normally (e.g., throws an error).
function throwError(message:string): never{
    throw new Error(message);
}

function infiniteLoop():never{
    while(true){}
}

// void: when a function does not return anything that is known as void
function logMessage(message:string):void{
    console.log(message);
}
const result: void = logMessage("Hello World")

/*
==> Arrays and Tuples
    -> Array is collection of similar type elements:
    -> Tuple is collection of similar or dissimilar type of elements
    -> The size of the tuple is fixed but array size is not fixed.
    Array Example:
        let numbers:number[] = [1,2,3,4,5]
        let strings: string[] = ["Ravi","Sumit","Amit"]
    Tuple Example: 
        let person:[string,number] = ["Ravi",26]
        let coordinates:[number,number] = [10,10] 
*/

/*
==> Enums: 
    ->  Enums in TypeScript are a way to define a set of named constants. They help in 
        organizing and managing related values.
    
    enum Direction{
        Up,Down,Left,Right
    }

    let move:Direction = Direction.Down;
    console.log("Move is : ",move); // 1 -> index of Down

    // We can also set custom values:
    enum Status{
        open=1,
        inprogress=2,
        completed=3
    }

    let current_status: Status = Status.open;
    console.log(current_status) // Output will be 1
*/

/*
==> Type inference: 
    ->  Type inference in TypeScript is the ability of the TypeScript compiler to automatically 
        determine the type of a variable based on its value, without explicit type 
        annotations.

    // Basic Inference:
    let message = 'Hello World' // TypeScript infers type as string

    // Function Return Type:
    function add(a:number,b:number){
        return a+b; // TypeScript infers return type as number
    }

    // Array Inference:
    const arr = [1,2,3,4,5] // TypeScript infers type as number[]
*/ 

/*
==> Type assertions (or casting):
    ->  Type assertions (or casting) in TypeScript are used to inform the compiler about the 
        specific type of a variable when TypeScript cannot automatically infer it. 
        This is done using 'as' or angle-bracket syntax.

    Examples: 
    const message:unknown = "Hello World";
    //Using 'as' 
    const len:number = (message as string).length;

    // using angle-bracket syntax:
    const len2: number = (<string>message).length;
*/
