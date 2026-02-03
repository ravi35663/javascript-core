/*
=> Advance Types:
       Intersection and union types
       Literal types and type narrowing
       Type guards and in, typeof, instanceof
       Discriminated (tagged) unions
       Mapped types
       Conditional types
       Indexed access types
       Utility types (e.g., Partial, Required, Readonly, Pick, Record, Omit, Exclude, Extract)
*/
/* ===================== ADVANCED TYPES (TypeScript – SHORT & POINT-WISE) ===================== */
/* 
=> Union Types ( | )
    - Allows a variable to be one of multiple types
*/
type ID = number | string;
let userId: ID = 1;
userId = "abc";

/* 
=> Intersection Types ( & )
    - Combines multiple types into one
*/
type Person = { name: string };
type Employee = { employeeId: string };
type Staff = Person & Employee;

const staff: Staff = { name: "Ravi", employeeId: "E101" };

/* 
=> Literal Types
    - Restricts values to exact literals
*/
type Status = "success" | "error" | "loading";
let state: Status = "success";

/* 
=> Type Narrowing
    - TypeScript narrows type using checks
*/
function printId(id: ID) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed());
    }
}
/*
=> Type Guards (typeof, in, instanceof)
    - Used to safely narrow types
*/
function process(value: string | number) {
    if (typeof value === "string") {
       console.log("String:", value);
    } else {
       console.log("Number:", value);
    }
}
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

function handleRole(person: Admin | User) {
    if ("permissions" in person) {
       console.log("Admin access");
    } else {
       console.log("User access");
    }
}
class Car {
    drive() {}
}
class Bike {
    ride() {}
}
function useVehicle(v: Car | Bike) {
    if (v instanceof Car) {
       v.drive();
    } else {
       v.ride();
    }
}
/*
=> Discriminated (Tagged) Unions
    - Uses a common literal property to narrow types
*/
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };

function area(shape: Shape) {
    if (shape.kind === "circle") {
       return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}
/*
=> Mapped Types
    - Create new types by transforming properties
*/
type ReadonlyUser<T> = {
    readonly [K in keyof T]: T[K];
};

type UserType = { name: string; age: number };
const readonlyUser: ReadonlyUser<UserType> = { name: "Ravi", age: 27 };

/*
=> Conditional Types
    - Type depends on a condition
*/
type IsString<T> = T extends string ? "Yes" : "No";
type A = IsString<string>; // Yes
type B = IsString<number>; // No

/*
=> Indexed Access Types
    - Access property types using index
*/
type UserProps = {
    name: string;
    age: number;
};
type NameType = UserProps["name"]; // string
/* 
=> Utility Types
    - Built-in helpers to transform types
*/
type PartialUser = Partial<UserType>;      // All properties optional
type RequiredUser = Required<UserType>;    // All properties required
type ReadonlyU = Readonly<UserType>;       // Read-only properties
type PickUser = Pick<UserType, "name">;    // Select specific keys
type OmitUser = Omit<UserType, "age">;     // Remove specific keys
type RecordType = Record<string, number>;  // Key-value map

type Excluded = Exclude<"a" | "b" | "c", "b">; // "a" | "c"
type Extracted = Extract<"a" | "b", "b" | "c">; // "b"

/* ===================== QUICK MEMORY =====================
| Feature            | Purpose                          |
| Union              | One of many types                |
| Intersection       | Combine types                    |
| Literal            | Exact values only                |
| Narrowing          | Reduce type safely               |
| Guards             | Runtime checks                   |
| Discriminated      | Safe union handling              |
| Mapped             | Transform types                  |
| Conditional        | Type logic                       |
| Indexed Access     | Get property type                |
| Utility Types      | Built-in transformations         |
*/ 