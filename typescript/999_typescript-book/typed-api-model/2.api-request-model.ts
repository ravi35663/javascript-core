//Create User API
// Request model:
interface CreateUserRequest{
    name:string;
    email:string;
    password: string;
}

// Response model:
interface CreateUserResponse {
  id: number;
  name: string;
  email: string;
}
// API function:
async function createUser(payload:CreateUserRequest):Promise<CreateUserResponse>{
    const res = await fetch('/api/users',{
        method:'POST',
        body:JSON.stringify(payload)
    });
    return res.json();

}

//Using Partial, Pick, and Omit (Very Common)
// Update User API: Only some fields are updatable.
type UpdateUserRequest = Partial<Pick<CreateUserRequest,'name' | 'email'>>;

async function updateUser(payload:UpdateUserRequest,id:number):Promise<CreateUserResponse>{
    const res = await fetch(`/api/users/${id}`,{
        method:'PUT',
        body:JSON.stringify(payload)
    });
    return res.json();
}

updateUser({ name: 'Jane' },10); // ✅
updateUser({ age: 40 }, 10);     // ❌


/*
=>  API Error Models:
    -   Error Response:
        {
            "message": "Invalid credentials",
            "code": "AUTH_FAILED"
        }
*/
interface ApiError{
    message: string;
    code:string;
}
// Usage:
try {
//   await login();
} catch (err: ApiError) {
  console.log(err.message);
}

// Typed API with Axios Example:
import axios from 'axios';

interface ApiResponse<T>{
    data:T;
    success:boolean;
    error:boolean;
    statusCode:number;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

const res = await axios.get<ApiResponse<Product[]>>('/api/products');
res.data.data[0].price; // fully typed


//Using Enums and Literal Types:
type UserRole = 'ADMIN' | 'USER';

interface User {
  id: number;
  role: UserRole;
}
// role: 'SUPER_ADMIN'; // ❌


//Backend + Frontend Shared Models (Best Practice):
// @types/models (shared package):
export interface UserDTO {
  id: number;
  name: string;
  email: string;
}
/*
=>  Used in:
    - NestJS backend
    - React frontend

=>  This ensures:
    - Zero mismatch
    - End-to-end type safety
*/

// Advanced: API Response Wrapper Pattern:
interface ApiResponseInterface<T>{
    data:T;
    err?: string;
}

/*
=>  Usage:
    ApiResponseInterface<User>
    ApiResponseInterface<User[]>
    ApiResponseInterface<boolean>
*/ 
