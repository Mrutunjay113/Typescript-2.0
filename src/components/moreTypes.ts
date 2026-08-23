/**
 * TOPICS COVERED — Assertions, any, unknown, and roles
 * -----------------------------------------------------
 * 1. Type assertions (`as Type`) — tell TS to treat a value as a type
 * 2. any — disables type checking (unsafe; can hide bugs)
 * 3. unknown — safer "I don't know the type yet"; must narrow before use
 * 4. JSON.parse + asserting the result shape
 * 5. DOM assertions (HTMLElement → HTMLInputElement)
 * 6. Narrowing unknown with typeof and instanceof
 * 7. String literal unions for roles / control flow
 */

// Forceful type assertion: tells TypeScript to treat a value as a different type

// Declares response as any (opts out of type checking for this variable)
let response: any = "42";

// Asserts response is a string, then reads .length into a number variable
// Without `as string`, TypeScript would not know response has .length safely
let numericLength: number = (response as string).length;

// Defines a Book type alias: an object that must have a string name property
type Book = {
  // name is required and must be a string
  name: string;
};

// A JSON-looking string that will be parsed into an object
let bookString = '{ "name": "The Great Gatsby" }';

// JSON.parse returns any; `as Book` asserts the result matches the Book shape
let bookObject: Book = JSON.parse(bookString) as Book;

// Logs the name property from the asserted Book object
console.log(bookObject.name);

// document.getElementById returns HTMLElement | null; assert it is an input element
const inputElement = document.getElementById("username") as HTMLInputElement;

// Declares value as any — can be reassigned to any type without errors
let value: any;
// Assigns a string to value (allowed because of any)
value = "chai";
// Reassigns value to a number array (also allowed because of any)
value = [1, 2, 3, 4, 5];

// Calls toUpperCase on value; any allows this even though arrays lack toUpperCase
// This may fail at runtime — any disables compile-time safety
value.toUpperCase();

// Declares newValue as unknown — safer than any; must narrow before using
let newValue: unknown;
// Assigning a string is allowed (unknown accepts any assignment)
newValue = "chai";
// Reassigning to a number is also allowed
newValue = 10;
// Reassigning to a boolean is also allowed
newValue = true;
// Narrows newValue: inside this block TypeScript knows it is a string
if (typeof newValue === "string") {
  // Safe to call string methods after the typeof check
  newValue.toUpperCase();
}

// Starts a try block (empty here — would hold code that might throw)
try {
  // Intentionally empty example body
} catch (error) {
  // In catch, error is unknown (or any depending on config); narrow it
  if (error instanceof Error) {
    // After instanceof, error is Error — .message is safe
    console.log(error.message);
  } else {
    // Non-Error throw values (string, number, etc.)
    console.log("An error occurred");
  }
}

// Declares data as unknown with a string value
const data: unknown = "chai is good";
// Asserts data is string and stores it in strData
const strData: string = data as string;
// Prints the asserted string
console.log(strData);

// Role is a union of three allowed string literals
type Role = "admin" | "user" | "guest";

// Function takes a Role and returns void (no return value used)
function redirectBasesOnRole(role: Role): void {
  // If role is exactly "admin", handle admin redirect
  if (role === "admin") {
    // Admin-specific page redirect message
    console.log("Redirecting to admin page");
    // Exit the function early
    return;
  }
  // If role is exactly "user", handle user redirect
  if (role === "user") {
    // User-specific page redirect message
    console.log("Redirecting to user page");
    // Exit the function early
    return;
  }
  // Remaining case must be "guest" given the Role union
  console.log("Redirecting to guest page");
  // Explicit return for consistency (void)
  return;
}
