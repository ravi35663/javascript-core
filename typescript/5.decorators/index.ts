/*
=> Decorators in TypeScript:
    -   Decorators are a special kind of declaration in TypeScript that can be 
        attached to classes, methods, properties, or parameters. They provide 
        a way to modify the behavior of the item they are attached to.

    ->  Decorators are essentially functions that can be applied to various 
        class elements to annotate or modify them.

    ->  Decorators in TypeScript enhance or modify class methods, properties, 
        or parameters.

    -   You can use them for:
            1) Logging
            2) Validation
            3) Access control
            4) Performance tracking
            5) Auto-binding methods (like @autobind)
*/
/*
=>  Types of Decorators:
        1) Class Decorators
        2) Method Decorators
        3) Property Decorators
        4) Parameter Decorators
*/
/*
=> Decorator Syntax:
    ->  To enable decorators in TypeScript, you need to enable the 
        'experimentalDecorators' option in the tsconfig.json:
    ->  {
            "compilerOptions": {
                "experimentalDecorators": true
            }
        }
    ->  A decorator is defined as a function, and you can apply it using the 
        '@' symbol.
*/
/*
=> Class Decorator:
    ->  A class decorator is applied to the constructor of a class. 
    ->  It can be used to observe, modify, or replace the class definition.
*/
function MyDecorator(constructor: Function){
    console.log("Class decorator is called",constructor);
}
// Applying decorator to a class
@MyDecorator
class MyClass{
    constructor(){
        console.log("MyClass instantiated");
    }
}
const obj = new MyClass();
// Output: 
// class decorator is called
// MyClass instantiated
/*
    @MyDecorator applies the MyDecorator function to the MyClass class.
    The decorator receives the constructor function as an argument.
*/
/*
=> Method Decorator:
    ->  A method decorator is applied to a method of a class. It allows you to 
        observe, modify, or replace the method.
*/

function Log(target: any, propertyName:string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`Calling ${propertyName} with arguments`,args);
        return originalMethod.apply(this,args);
    };
}
class Calculator{
    @Log
    add(a:number,b:number):number{
        return a+b;
    }
}
const cal = new Calculator();
console.log(cal.add(10,20)); 
// Output:
// Calling add with arguments [10,20]
// 30
/*
    The Log decorator modifies the add method, logging its arguments before 
    executing the original method.
*/
/*
=> Property Decorator:
    ->  A property decorator is applied to a property in a class, allowing you 
        to observe or modify the property.
*/
function ReadOnly(target: any,propertyKey: string){
    Object.defineProperty(target,propertyKey,{
        writable:false
    })
}

class Person{
    @ReadOnly
    name:string = 'John'
}

const person1 = new Person();
person1.name = 'Doe' // Error: Cannot assign to 'name' because it is a read-only property

// Note: The ReadOnly decorator makes the name property immutable.

/*
=> Parameter Decorator:
    ->  A parameter decorator is applied to the parameters of a class method, 
        allowing you to observe metadata about the parameters.
*/

function LogParam(target:any, propertyName:string, parameterIndex:number){
    console.log(`Parameter at index ${parameterIndex} in method ${propertyName} is being logged`);
}

class User{
    greet(@LogParam message:string): void{
        console.log("Message",message);
    }
}

const user = new User();
user.greet("Hello")
// Output:
// parameter at index 0 in method greet is being logged
// Hello

/*
    The LogParam decorator logs the position of the parameter in the greet method.
*/
/*
=> Key Takeaways:
    1)  Decorators allow you to modify or enhance classes, methods, properties, and 
        parameters.
    2)  They are applied with the @ symbol and must be enabled in tsconfig.json.
    3)  Useful for cross-cutting concerns like logging, caching, or applying 
        constraints.
*/