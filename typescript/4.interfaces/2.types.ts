/* ===================== TYPE ALIASES (TypeScript) =====================
=> What is a Type Alias:
    - Type aliases allow you to create a new name for an existing type
    - Useful for readability, reusability, and managing complex types
    - Makes it easier to update type definitions in one place


==> Uses of Type Aliases:
    1) Simplifying Complex Types
        - Helpful for object types, unions, and combinations

    2) Improving Readability
        - Meaningful names make code easier to understand

    3) Reusability
        - Same type can be reused across the application
        - Promotes DRY principles


/* ===================== EXAMPLES ===================== */
// Type alias for a complex object
type User = {
    id: number | string;
    name: string;
    email: string;
};

// Type alias for a union type
type Status = "active" | "inactive" | "blocked";

// Function using type aliases
function updateUserAndStatus(user: User, status: Status): void {
    console.log(`User ${user.name} is now ${status}`);
}

const user: User = {
    id: 1,
    name: "ravi",
    email: "ravi@getnada.com",
};
updateUserAndStatus(user, "active");