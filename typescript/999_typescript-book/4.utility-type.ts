/*
=> Utility Types:
    -   TypeScript provides several utility types that can be used to manipulate 
        and transform existing types. 
    -   Here are some of the most common ones:
        1.Partial: makes all properties of a type optional.
        2.Readonly: makes all properties of a type read-only.
        3.Pick: allows you to pick specific properties from a type.
        4.Omit: allows you to omit specific properties from a type.
        5.Exclude: creates a type that is the set difference of A and B.  
*/
// 1.Partial:
interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);
// Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }

// 2. Pick:
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
};

// 3.Omit:
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo2, 'description'>;

const todo1: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo2, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};


// 4.Readonly:
interface TodoRead {
  title: string;
}

const todoRead: Readonly<TodoRead> = {
  title: 'Delete inactive users',
};

// Cannot assign to 'title' because it is a read-only property.
todoRead.title = 'Hello';



/*
=>  Record:
    -   Record constructs an object type whose property keys are Keys and whose 
        property values are Type. This utility can be used to map the properties 
        of a type to another type.
*/
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

/*
=> Exclude:
    -   Exclude constructs a type by excluding from UnionType all union members 
        that are assignable to ExcludedMembers.
*/
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>;


/*
=>  Extract: 
    -   Extract constructs a type by extracting from Type all union members 
        that are assignable to Union.
*/
type T9 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
//  ^ = type T9 = "a"

/*
=>  Awaited:
    -   This type is meant to model operations like await in async functions, or 
        the .then() method on Promises - specifically, the way that they 
        recursively unwrap Promises
*/

type AA = Awaited<Promise<string>>;
// type AA = string

type BB = Awaited<Promise<Promise<number>>>;
// type BB = number

type CC = Awaited<boolean | Promise<number>>;
// type CC = number | boolean

/*
=>  Parameters: 
    -   Parameters constructs a tuple type from the types used in the parameters 
        of a function type Type.
*/

type T00 = Parameters<() => string>;
// type T00 = []

type T11 = Parameters<(s: string) => void>;
// type T11 = [s: string]

type T22 = Parameters<<T>(arg: T) => T>;
// type T22 = [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T33 = Parameters<typeof f1>;
// type T33 = [arg: {
//   a: number;
//   b: string;
// }]

type T44 = Parameters<any>;
// type T44 = unknown[]

type T55 = Parameters<never>;
// type T55 = never

type T66 = Parameters<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T77 = Parameters<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.


/*
=>  Non Nullable
    -   Non-Nullable constructs a type by excluding null and undefined from 
        Type.
*/

type T000 = NonNullable<string | number | undefined>;
// type T000 = string | number

type T111 = NonNullable<string[] | null | undefined>;
// type T111 = string[]


/*
=>  ReturnType:
    -   Return type constructs a type consisting of the return type of function 
        Type.
*/

type T_0 = ReturnType<() => string>;
// type T_0 = string

type T_1 = ReturnType<(s: string) => void>;
// type T_1 = void

type T_2 = ReturnType<<T>() => T>;
// type T_2 = unknown

type T_3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T_3 = number[]

declare function f1(): { a: number; b: string };
type T_4 = ReturnType<typeof f1>;
// type T_4 = {
//   a: number;
//   b: string;
// }

type T_5 = ReturnType<any>;
// type T_5 = any

type T_6 = ReturnType<never>;
// type T_6 = never

type T_7 = ReturnType<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T_8 = ReturnType<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.

/*
=>  InstanceType
    -   This type constructs a type consisting of the instance type of a 
        constructor function in Type.
*/

class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C

type T1 = InstanceType<any>;
// type T1 = any

type T2 = InstanceType<never>;
// type T2 = never

type T3 = InstanceType<string>;
// ^ Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

type T4 = InstanceType<Function>;
// ^ Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
