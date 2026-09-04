/**
 * TOPICS — TypeScript basics
 * --------------------------
 * TypeScript adds types on top of JavaScript so mistakes (wrong value kinds)
 * show up while you write code, not only when the app runs.
 *
 * What you practice here:
 * - Function parameter types and return types
 * - Primitive types: string, number, boolean
 * - Array types (string[])
 * - Inline object types ({ name: string; age: number })
 * - Calling a typed function and printing values
 *
 * EXAMPLE USES
 * - greet("Ada") → "Hello, Ada!" for a welcome banner
 * - username / age / isStudent as form fields on a signup page
 * - hobbies as a list of tags under a profile
 * - person as one user record sent to an API
 */

// What I did: declared greet so it only accepts a string name
// and must return a string (the greeting text).
function greet(name: string): string {
  // What I did: built the greeting by inserting name into a template string.
  return `Hello, ${name}!`;
}

// What I did: stored a string user name. Only other strings can replace this type.
const username: string = "John";
// What I did: stored a numeric age.
const age: number = 20;
// What I did: stored a true/false student flag.
const isStudent: boolean = true;
// What I did: stored a list where every item must be a string.
const hobbies: string[] = ["reading", "coding", "gaming"];
// What I did: stored one object that must have name (string) and age (number).
const person: { name: string; age: number } = { name: "John", age: 20 };

// What I did: called greet with username and printed the result.
console.log(greet(username));
// What I did: printed age.
console.log(age);
// What I did: printed the student flag.
console.log(isStudent);
// What I did: printed the hobbies list.
console.log(hobbies);
// What I did: printed the person object.
console.log(person);
