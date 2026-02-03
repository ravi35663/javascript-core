/* ===================== INTERFACE vs TYPE (TypeScript) =====================
=> Overview:
    - Both `interface` and `type` are used to define types in TypeScript
    - They differ in syntax, extensibility, features, and use cases

==> Key Differences:
    1) Syntax:
        - Interface → uses `interface` keyword
        - Type Alias → uses `type` keyword

    2) Extensibility:
        - Interface:
            -> Can be extended using `extends`
            -> Clean and straightforward inheritance
        - Type Alias:
            -> Cannot be extended directly
            -> Must combine types using intersections (&)

    3) Declaration Merging:
        - Interface:
            -> Supports declaration merging
            -> Same interface name can be declared multiple times and merged
        - Type Alias:
            -> Does NOT support declaration merging
            -> Redefining the same type causes an error

    4) Use Cases:
        - Interface:
            -> Best for defining object shapes
            -> Commonly used for class contracts and APIs
        - Type Alias:
            -> More flexible
            -> Can define unions, tuples, primitives, and complex types

==> When to Use What:

1) Use `interface` when:
   - Defining object structures
   - Working with classes
   - You need extension or declaration merging

2) Use `type` when:
   - Defining union or intersection types
   - Creating aliases for primitives or complex combinations
   - You want a simple name for any kind of type
*/

// Declaration Merging
interface PersonData{
    name: string;
}
interface PersonData{
    age:number;
}

class Engineer implements PersonData{
    name:string = "Ravi";
    age:number = 28
}
