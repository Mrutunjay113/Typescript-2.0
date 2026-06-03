function greet(name: string): string {
  return `Hello, ${name}!`;
}

const username: string = "John";
const age: number = 20;
const isStudent: boolean = true;
const hobbies: string[] = ["reading", "coding", "gaming"];
const person: { name: string; age: number } = { name: "John", age: 20 };

console.log(greet(username));
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(person);
