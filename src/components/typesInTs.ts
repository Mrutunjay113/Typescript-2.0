/**
 * TOPICS COVERED — Type inference & conditional values
 * ----------------------------------------------------
 * 1. Type inference: TypeScript figures out the type from the value
 * 2. Ternary expressions that produce different numbers
 * 3. Math.random() used to pick between two outcomes
 */

// Declares drink; TypeScript infers type string from the "hello" value
let drink = "hello";
// Declares cups; Math.random() > 0.5 is true about half the time
// If true → cups is 10; if false → cups is 5
// TypeScript infers cups as number (both branches are numbers)
let cups = Math.random() > 0.5 ? 10 : 5;
