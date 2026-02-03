/*
=>  Modules:
    -   Modules in TypeScript are used to organize and reuse code.

    -   There are two types of modules in TypeScript:
        - Internal modules
        - External modules

=>  Internal Modules:
    - Used to organize code within a single file
    - Also called namespaces
    - Defined using the namespace keyword

=>  External Modules:
    - Used to organize code across multiple files
    - Defined using export in one file and import in another
    - Follow CommonJS or ES module standards

=>  Namespaces:
    - Used in TypeScript to organize and share code across multiple files
    - Help group related functionality into a single unit
    - Prevent naming conflicts by creating a scoped container
*/

// myModule.ts
namespace MyModule{
    export function doSomething(){
        console.log("Hello world")
    } 
    export function showAge(age:number){
        console.log("My age is: ",age);
    }
}

// main.ts
// <reference path='myModule.ts'>
MyModule.doSomething();

/*
=>  Ambient Modules:
    -   Ambient modules in TypeScript are used to declare external modules or 
        third-party libraries.
    -   They provide type information for modules that do not have TypeScript 
        declarations.
    -   Ambient modules are used when the module is available in the global 
        scope but lacks built-in TypeScript typings.
    -   They help TypeScript understand and type-check such external libraries.
*/

// myModule.d.ts
declare module 'my-module'{
    export function doSomething(): void;
}
// main.ts
import * as MyModule from 'my-module';
MyModule.doSomething();

/*
=>  External Modules:
    -   External modules in TypeScript are used to organize and share code across 
        multiple files.
    -   They follow CommonJS or ES module standards.
*/
// myModule.ts
export function showName(name:string){
    console.log("My name is: ",name);
}

// main.ts
import {showName} from './myModule.ts'
showName("Ravi");

/*
=> namespace arguments:
    -   Namespace augmentation in TypeScript is used to extend or modify 
        existing namespaces.
    -   It allows you to add new functionality to existing namespaces.
    -   It is commonly used to fix missing or incorrect declarations in 
        third-party libraries.
*/
// myModule.d.ts
declare namespace MyModule {
  export interface MyModule {
    myFunction(): void;
  }
}

// main.ts
/// <reference path="myModule.d.ts" />
namespace MyModule {
  export class MyModule {
    myFunction(): void {
      console.log("I am a new function in MyModule!");
    }
  }
}

const obj = new MyModule.MyModule();
obj.myFunction(); // Output: "I am a new function in MyModule!"

/*
=>  Global Argumentation:
    -   Global augmentation in TypeScript is used to add declarations to the 
        global scope.
    -   It allows you to extend existing libraries with new functionality.
    -   It is commonly used to augment built-in TypeScript types.
*/
// myModule.d.ts
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}

// main.ts
global.myGlobalFunction = function () {
  console.log('I am a global function!');
};

myGlobalFunction(); // Output: "I am a global function!"
