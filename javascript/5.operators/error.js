/* ===================== ERROR HANDLING IN JAVASCRIPT =====================
- Errors occur during execution due to:
  incorrect input, unexpected behavior, network issues, etc.
- JavaScript provides multiple techniques to handle errors effectively
*/

/* ===================== 1) TRY–CATCH =====================
- Wrap risky code inside try
- Handle exceptions inside catch
*/
try {
    // Code that may throw an error
} catch (error) {
    // Error handling logic
}

/* ===================== 2) THROWING CUSTOM ERRORS =====================
- Manually throw errors for known failure cases
- Helps in controlled and meaningful error handling
*/
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message); // Cannot divide by zero
}

/* ===================== 3) ERROR TYPES =====================
- JavaScript provides built-in error types:
  Error, SyntaxError, TypeError, ReferenceError, etc.
- Useful for handling specific error cases
*/

/* ===================== 4) FINALLY BLOCK =====================
- Optional block with try–catch
- Executes whether error occurs or not
- Commonly used for cleanup operations
*/
try {
    divide(10, 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Cleanup completed");
}
/* ===================== 5) ERROR EVENT HANDLER (BROWSER) =====================
- Handles uncaught runtime errors in browser
*/
window.onerror = function (message, source, line, column, error) {
    // Error handling logic
};
/* ===================== PRACTICAL EXAMPLE ===================== */
const safeDivide = (a, b) => {
    if (b == 0) {
        throw new Error("Cannot divide by 0");
    }
    return a / b;
};

document.querySelector("#button").addEventListener("click", () => {
    try {
        safeDivide(10, 0);
    } catch (error) {
        console.log("Error is:", error.message);
    }
});

/* ===================== CUSTOM ERROR CLASS =====================
    - Create domain-specific errors by extending Error
*/
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
try {
    throw new ValidationError("Invalid data provided");
} catch (error) {
    console.log(error.name + ": " + error.message);
}
/* ===================== CREATING ERROR OBJECT ===================== */
const err = new Error("Some message");
