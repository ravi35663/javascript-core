/*
=> Advance types:
*/
/*
=>  1. Union Types: 
    -   A variable can hold more than one type.
*/
let union_value: string | number;
union_value = "Hello";
union_value = 42;
// union_value = true; // ❌ Error

/*
=> 2. Intersection Types:  
    -   Combine multiple types into one. The variable must satisfy all types.
*/ 
type Person = {name:string};
type Employee = {employeeId:number}
type Staff = Person & Employee;
const staff: Staff = {name:"Ravi",employeeId:1}  // This is intersection.

/*
=> 3. Literal Types:
    - A variable can only hold specific values.
*/
let direction: "up" | "down" | "left" | "right";
direction = "up"; // Correct
// direction = "forward"; //  Error
type myName = `Mr. ${string}`;
const my_name:myName = 'Mr. Ravi Kumar';
const my_other_name:myName = 'Mrs. Sharma'// Error:

/*
=>  4. Type Aliases:
    - Define a custom type for readability.
*/
type ID = number | string;
let userId:ID;
userId = 20; // correct
userId = "qweee"; // correct
// userId = true  // This will throw an error:

type Name = string;
type Old = number;
type Alien = {name:Name,age:Old};
let new_alien:Alien = {name:"Elon",age:10}

/*
=>  5. Interfaces
    -   Describe the shape of objects, including optional properties.
*/
interface User {
  name: string;
  age?: number; // optional
}
const user: User = { name: "Ravi" };
// user.age = 32;

/*
=>  6.Type Guards:
    -   Refine types at runtime to narrow down the type.
*/
function printId(id:string | number){
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id)
    }
}
/*
=>  7.Mapped Types
    -   Create new types by transforming existing types.
    -   You can mapped with other type of the existing type
*/
type NewPerson = {name:string, age:number};
type ReadOnlyNewPerson = {readonly [K in keyof NewPerson]: NewPerson[K]};
const p:ReadOnlyNewPerson = {name:"Alice",age:30};
// p.age = 32
const newPerson:NewPerson = {name:"Ravi",age:27};
newPerson.age = 28;
// p.age = 31; // Error

/*
=>  8. Conditional Types:
    -   Types that depend on other types.
*/
type Check<T> = T extends string ? "String type":"Other type";
type A = Check<string>; // "String type";
type B = Check<number> // "Other type";

/*
=>  9. Indexed Access Types
    -   Extract the type of a property.
*/

type UserType = {name:string,age:number};
type UserNameType = UserType['name']; // string
type UserAgeType = UserType['age']; // number

/*
=>  10. Utility Types:
    -   TypeScript provides built-in helpers like Partial, Required, Pick, Omit.
*/

interface UserInterface {
  id: number;
  name: string;
  email?: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make email required: all fields are required in RequiredUser
type RequiredUser = Required<UserInterface>;

// Pick only name
type UserName = Pick<UserInterface,"name">;

// Omit email
type UserWithoutEmail = Omit<UserInterface, "email">;

/*
=> Never & Unknown:
    - never: Represents values that never occur.
    - unknown: Safe alternative to any; forces type checking before use.
*/

function error(message: string): never {
  throw new Error(message);
}

let value: unknown;
value = "hello";
value = 123;
// console.log(value.toUpperCase()); // ❌ Error, need type check


// Recursive Types:
type LinkedList<T> = {
    value:T,
    next: LinkedList<T> | null
}

let list:LinkedList<number> = {
    value:10,
    next:null
}
let next_list:LinkedList<number> ={
    value:20,
    next:list
}

/*
=>  'keyof' Operator:
    -   The 'keyof' operator in TypeScript is used to get the union of keys 
        from an object type. 
    -   Here’s an example of how it can be used:
*/

interface UserInterface{
    name:string;
    age:number;
    email?:string;
}

type UserKeys = keyof UserInterface; 
// output: 'name' | 'age' | 'email'
const nameKey: UserKeys = 'name'
/*
    -   In this example, UserKeys is a type that represents the union of keys 
        from the User interface, which is "name" | "age" | "location". 

    -   And a constant named userKeys with the type UserKeys is declared with the 
        value "name".
*/

/*
=>  unknown type:
    -   'unknown' is the type-safe alternative to any in TypeScript.
    -   Any value can be assigned to unknown.
    -   A value of type unknown cannot be assigned to other types without a type 
        assertion or type narrowing.
    -   No operations are allowed on an unknown value until it is narrowed to a 
        specific type.
*/

let valueU: unknown;

valueU = "Hello";
valueU = 10;

// ❌ Error: Object is of type 'unknown'
// value.toUpperCase();

if (typeof value === "string") {
  // ✅ Safe after narrowing
  console.log(value.toUpperCase());
}


/*
=>  never:
    -   'never' represents values that never occur.
    -   It is used as the return type of functions that:
            - Always throw an exception
            - Never return
    -   Variables can become type never when type guards eliminate all possible 
        types.
    -   'never' is a subtype of every type and can be assigned to any type.
    -   No type (except never) can be assigned to never, not even any.
*/
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

function check(value: string | number) {
  if (typeof value === "string") {
    console.log(value);
  } else if (typeof value === "number") {
    console.log(value);
  } else {
    // value is never here
    const _exhaustiveCheck: never = value;
  }
}


/*
=> null and undefined:
    - JavaScript uses null (absent value) and undefined (uninitialized value).
    - TypeScript has corresponding types: null and undefined.
    - Their behavior depends on the strictNullChecks option.

    - With strictNullChecks OFF:
        null and undefined can be assigned to any type
        Values that might be null or undefined can be accessed normally
        This can lead to runtime bugs

    - TypeScript recommends enabling strictNullChecks

    - With strictNullChecks ON:
        null and undefined must be checked before use
        You must narrow the type before accessing properties or methods
        Similar to checking optional properties
*/

/*
=>  Tuple
    -   A tuple type is another sort of Array type that knows exactly how many 
        elements it contains, and exactly which types it contains at specific 
        positions.
*/

type StringNumberPair = [string,number];
const pair:StringNumberPair = ["Ravi",28];

console.log(pair[0]);
// console.log(pair[2]); // will throw an error

/*
=>  enum:
    -   Enums are used to define a set of named constants.
    -   They help document intent and represent a fixed set of distinct values.
    -   Enums are not a type-level extension of JavaScript.
    -   TypeScript supports:
            Numeric enums
            String enums
*/
enum Status {
  Pending, // 0
  Success, // 1
  Failed // 2
}

enum Role {
  Admin = "ADMIN",
  User = "USER"
}

let currentStatus: Status = Status.Success;
console.log("currentStatus is: ",currentStatus); // 1
let userRole: Role = Role.Admin;
console.log("Role is: ",userRole) // Admin

/*
=> as type:
    -   as is used in TypeScript for type assertions.
    -   It lets you explicitly tell the compiler the type of a value when it 
        cannot be inferred.
    -   Type assertions override the default type checking behavior.
    -   They are used when the developer knows more about the value’s type than 
        the compiler.
*/

let someValue:any = "Hello typescript";
let strLength:number = (someValue as string).length;

/*
=>  As Const
    -   as const is a type assertion in TypeScript that allows you to assert 
        that an expression has a specific type, and that its value should be 
        treated as a read-only value.
*/

// This is read-only
const colors = ['red','blur','black','yellow'] as const;
console.log(colors[1]) // 

/*
=>  Non Null Assertion
    -   The non-null assertion operator (!) is a type assertion in TypeScript 
        that allows you to tell the compiler that a value will never be null or 
        undefined.
*/
let new_name:string | null = null;
let nameLength = new_name!.length; //
/*
The non-null assertion operator (!) tells TypeScript:
    “Trust me, this value is NOT null.” but here the value is null so it will throw the runtime error.
*/

/*
=>  satisfies :
    -   satisfies in TypeScript ensures an expression matches a type.
    -   Unlike a type annotation, it keeps the most specific type for inference.
    -   Useful when you want type safety without losing narrow type details.
    -   Helps avoid the dilemma between type checking and type inference for 
        expressions.
*/
type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  bleu: [0, 0, 255],
  // ~~~~ The typo is now caught!
} satisfies Record<Colors, string | RGB>;

// Both of these methods are still accessible!
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
