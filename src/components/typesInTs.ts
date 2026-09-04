/**
 * TOPICS — Type inference
 * -----------------------
 * You do not always write a type. TypeScript looks at the value you assign
 * and picks the type for you. That is inference.
 *
 * What you practice here:
 * - Inferring string from a string literal
 * - Inferring number from both sides of a ternary
 * - Using Math.random() to pick one of two numbers
 *
 * EXAMPLE USES
 * - drink = "hello" → a label or toast message (inferred as string)
 * - cups = 10 or 5 → random stock / A-B test quantity (inferred as number)
 * - Later you can write drink.toUpperCase() safely, but not drink + true
 */

// What I did: assigned "hello". I did not write : string; TS inferred string.
let drink = "hello";
// What I did: if a random number is above 0.5, cups is 10; otherwise 5.
// Both branches are numbers, so TS infers cups as number.
let cups = Math.random() > 0.5 ? 10 : 5;
