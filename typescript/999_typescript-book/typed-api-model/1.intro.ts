/*
=>  Typed API Model:
    -   Typed API models in TypeScript are all about describing the shape of 
        data exchanged between frontend and backend so that your code is safe, 
        predictable, and self-documented. Let’s walk through this step by step 
        with clear, practical examples.
*/
/*
=> What are Typed API Models:
    -   Typed API models are TypeScript types or interfaces that represent:
            - API request payloads
            - API response data
            - Errors
            - Query params / path params

=>  They act as a contract between:
    - Backend ↔ Frontend
    - Or between different services
*/

/*
=> Why Typed API Models Matter:
    - Without typing:
        - Runtime errors due to wrong fields
        - Guessing API responses
        - Hard-to-maintain code

    - With typing:
        - Compile-time safety
        - Auto-complete & IntelliSense
        - Easier refactoring
        - Clear API contracts
*/

// API response:
// {
//   "id": 1,
//   "name": "John Doe",
//   "email": "john@example.com"
// }
// Basic Example: API Response Model
interface User{
    name: string;
    id: number;
    email:string;
}
async function fetchUser():Promise<User>{
    const res = await fetch('/api/user');
    return res.json();
}
/*
Now:
    user.name // okay
    user.age // (TypeScript error)
*/