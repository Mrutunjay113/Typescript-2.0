/**
 * TOPICS COVERED — Unions, literal types, and undefined
 * ------------------------------------------------------
 * 1. Union types (A | B): a value can be one of several types
 * 2. String literal unions: only specific string values allowed
 * 3. Variables that may be undefined until assigned
 * 4. for...of loops over arrays
 * 5. break to exit a loop early after finding a match
 */

// subs can be either a number OR a string (union type)
// Currently assigned the number 10
let subs: number | string = 10;

// apiRequestStatus may only be exactly one of these three strings
// Starting value is "pending"
let apiRequestStatus: "pending" | "success" | "error" = "pending";

// airLineSeat may only be "window", "aisle", or "middle"
// Starting value is "window"
let airLineSeat: "window" | "aisle" | "middle" = "window";

// Declares a constant array of order id strings
const orders = ["12", "20", "30", "40", "50"];

// currentOrder is either a string or undefined (not set yet)
let currentOrder: string | undefined;

// Loops over each string in the orders array
for (let order of orders) {
  // When the current order id equals "30"...
  if (order === "30") {
    // ...store it in currentOrder (now a string, not undefined)
    currentOrder = order;
    // Stop looping; we found what we wanted
    break;
  }
}

// Prints currentOrder: "30" if found, otherwise undefined
console.log(currentOrder);
