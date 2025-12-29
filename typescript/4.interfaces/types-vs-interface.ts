/*
=> Interface Vs Types:
-> In TypeScript, both interfaces and type aliases are used to define types, but they 
    have some key differences in terms of syntax, capabilities, and use cases. 
    Here's a breakdown of their differences along with examples.

    1) interface uses 'interface' and type aliases uses 'type' keyword
    2) Extensibility:
        ->  Interface: Can be extended using the extends keyword, allowing for a more 
            straightforward way to create derived interfaces.
        ->  Type Alias: Cannot be extended directly; you would need to create a new type 
            that combines the existing type with additional properties.
    3) Declaration Merging:
        ->  Interface: Supports declaration merging, meaning you can define the same 
            interface multiple times, and TypeScript will merge them into a single 
            interface.
        ->  Type Alias: Does not support declaration merging; defining the same type alias 
            multiple times will result in an error.
    4) Use Cases:
        ->  Interface: Generally preferred for defining the shape of objects or class 
            contracts.
        ->  Type Alias: More versatile, suitable for creating unions, tuples, and other 
            types beyond just object shapes.
*/
/*
Note:
    1)  Use interfaces when you need to define object shapes and take advantage of features 
        like extension and declaration merging.
    2)  Use type aliases for more complex types, such as unions or when you need a simple 
        name for any type, including primitives.
*/
