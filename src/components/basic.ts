/**
 * TOPICS COVERED — TypeScript basics
 * ------------------------------------
 * 1. Function parameter types and return types
 * 2. Primitive types: string, number, boolean
 * 3. Array types (string[])
 * 4. Inline object types ({ name: string; age: number })
 * 5. Calling typed functions and logging values
 */

// Declares a function named greet that takes one argument
// name must be a string (TypeScript will error if you pass another type)
// : string after the parentheses means this function returns a string
function greet(name: string): string {
  // Returns a template string that inserts the name value
  return `Hello, ${name}!`;
}

// Declares a constant username; TypeScript knows it is a string
const username: string = "John";
// Declares a constant age; must be a number
const age: number = 20;
// Declares a constant isStudent; must be true or false
const isStudent: boolean = true;
// Declares hobbies as an array where every element must be a string
const hobbies: string[] = ["reading", "coding", "gaming"];
// Declares person as an object that must have name (string) and age (number)
const person: { name: string; age: number } = { name: "John", age: 20 };

// Calls greet with username and prints the returned greeting
console.log(greet(username));
// Prints the age number
console.log(age);
// Prints the boolean isStudent
console.log(isStudent);
// Prints the hobbies array
console.log(hobbies);
// Prints the person object
console.log(person);
