/**
 * TOPICS — Assertions, any, unknown, and role literals
 * ----------------------------------------------------
 * `as Type` tells TypeScript "treat this value as that type." It does not
 * convert the value at runtime. `any` turns checking off. `unknown` is safer:
 * you must narrow (typeof / instanceof) before you use the value.
 *
 * What you practice here:
 * - Type assertions (`as string`, `as Book`, `as HTMLInputElement`)
 * - any vs unknown
 * - JSON.parse + asserting a shape
 * - Catch-block narrowing
 * - Role union + early returns
 *
 * EXAMPLE USES
 * - (response as string).length → you know an API field is text
 * - JSON.parse(...) as Book → typed book after reading JSON
 * - getElementById(...) as HTMLInputElement → read .value from an input
 * - unknown + typeof → safe handling of mixed runtime data
 * - redirectBasesOnRole("admin") → send the user to the right page
 */

// What I did: stored a string in an any variable (checking is off).
let response: any = "42";

// What I did: asserted response is a string so I could read .length as a number.
let numericLength: number = (response as string).length;

// What I did: named a Book shape with a required name.
type Book = {
  // What I did: required name to be a string.
  name: string;
};

// What I did: stored a JSON string that looks like a book object.
let bookString = '{ "name": "The Great Gatsby" }';

// What I did: parsed JSON and asserted the result is a Book.
let bookObject: Book = JSON.parse(bookString) as Book;

// What I did: printed the book's name after the assertion.
console.log(bookObject.name);

// What I did: looked up a DOM node and asserted it is an <input>.
const inputElement = document.getElementById("username") as HTMLInputElement;

// What I did: declared value as any so any type is allowed later.
let value: any;
// What I did: assigned a string (allowed because of any).
value = "chai";
// What I did: reassigned a number array (also allowed because of any).
value = [1, 2, 3, 4, 5];

// What I did: called toUpperCase — TS allows it on any, but an array will crash at runtime.
value.toUpperCase();

// What I did: declared unknown — I can assign anything, but I cannot use it yet.
let newValue: unknown;
// What I did: assigned a string to unknown.
newValue = "chai";
// What I did: reassigned a number.
newValue = 10;
// What I did: reassigned a boolean.
newValue = true;
// What I did: narrowed with typeof so TS knows it is a string inside the block.
if (typeof newValue === "string") {
  // What I did: called a string method only after the check.
  newValue.toUpperCase();
}

// What I did: opened a try block (empty demo of code that might throw).
try {
  // What I did: left the body empty on purpose.
} catch (error) {
  // What I did: checked whether the thrown value is a real Error object.
  if (error instanceof Error) {
    // What I did: printed Error.message after instanceof narrowing.
    console.log(error.message);
  } else {
    // What I did: handled non-Error throws (string, number, etc.).
    console.log("An error occurred");
  }
}

// What I did: stored a string in an unknown constant.
const data: unknown = "chai is good";
// What I did: asserted data is a string and copied it.
const strData: string = data as string;
// What I did: printed the asserted string.
console.log(strData);

// What I did: allowed only three role words.
type Role = "admin" | "user" | "guest";

// What I did: wrote a void function that branches on Role.
function redirectBasesOnRole(role: Role): void {
  // What I did: handled the admin role first.
  if (role === "admin") {
    // What I did: logged the admin redirect.
    console.log("Redirecting to admin page");
    // What I did: left the function so later branches do not run.
    return;
  }
  // What I did: handled the user role.
  if (role === "user") {
    // What I did: logged the user redirect.
    console.log("Redirecting to user page");
    // What I did: left the function early.
    return;
  }
  // What I did: treated the leftover role as guest.
  console.log("Redirecting to guest page");
  // What I did: returned explicitly (still void).
  return;
}
