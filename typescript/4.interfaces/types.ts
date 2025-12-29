/*
=> Types Aliases:
    ->  Type aliases in TypeScript allow you to create a new name for an existing type. 
        They are useful for improving code readability, managing complex types, and making 
        it easier to change type definitions.
*/
/*
=> Uses of Type Aliases:
1)  Simplifying Complex Types: 
    You can create a type alias for complex types like objects or unions, making them 
    easier to reference.

2)  Improving Readability: 
    By giving a meaningful name to a type, you make your code more understandable.

3)  Reusability: 
    Type aliases can be reused across different parts of your application, promoting 
    DRY (Don't Repeat Yourself) principles.
*/

// Define a type alias for a complex object type:
type User = {
    id:number | string;
    name: string;
    email: string;
}

// define a type for a union type
type Status = 'active' | 'inactive' | 'blocked'

// Function that accepts both User and Status:
function updateUserAndStatus(user: User,status:Status){
    console.log(`User ${user.name} is now ${status}`);
}
const user:User = {id:1,name:'ravi',email:'ravi@getnada.com'};
const updated_user = updateUserAndStatus(user, 'active');
