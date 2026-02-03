/*
=>  Decorator:
    - Decorators are a TypeScript feature used to modify or enhance behavior.
    - They can be applied to classes, properties, methods, or parameters.
    - They add extra functionality without changing existing code.
    - Common use cases include logging, validation, and performance optimization.
*/
// TypeScript Decorators – All Use Cases with Simple Examples
/*
1. Class Decorator
   - Used to modify or extend a class.
   - Common use: logging, adding metadata, framework features.
   Example:
*/
function Logger(constructor: Function) {
    console.log("Class created:", constructor.name);
}
@Logger
class UserService1 {}


/*
2. Property Decorator
   - Used to add behavior or metadata to class properties.
   - Common use: validation, tracking, default values.
       Example:
*/

function Required(target: any, key: string) {
    console.log(`${key} is required`);
}

class User {
    @Required
    name!: string;
}
/*
3. Method Decorator
   - Used to modify or wrap a method’s behavior.
   - Common use: logging, performance measurement, authorization.
   Example:
*/
function LogExecution(target: any,key: string,descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("Method called:", key);
        return original.apply(this, args);
    };
}
class UserService2 {
    @LogExecution
    getUser() {}
}

/*
4. Parameter Decorator
   - Used to add metadata to method parameters.
   - Common use: validation, dependency injection.
   Example:
*/

function LogParam(target: any, key: string, index: number) {
    console.log(`Parameter index ${index} in ${key}`);
}

class UserService3 {
    updateUser(@LogParam id: number) {}
}
/*
=> Summary:
   - Class decorators → change or enhance classes
   - Property decorators → add rules or metadata to properties
   - Method decorators → wrap or control method behavior
   - Parameter decorators → track or validate method parameters
*/