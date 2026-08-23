/**
 * TOPICS COVERED — Functions in TypeScript
 * ----------------------------------------
 * 1. Typed parameters and inferred/explicit return types
 * 2. void return type (function for side effects only)
 * 3. Early returns and union return values (string | null)
 * 4. Optional parameters (?)
 * 5. Default parameter values
 * 6. Inline object types as function parameters
 * 7. String literal unions inside object shapes
 **/

// Declares makeChai5: type is string, cups is number; return type is inferred as void
function makeChai5(type: string, cups: number) {
  // Logs how many cups of which chai type are being made
  //console.log(`Making ${cups} cups of ${type} chai`);
  return cups * 10;
}

//Calls makeChai5 with type "Masala" and 2 cups
makeChai5("Masala", 2);

// Declares getChaiPrice with an explicit return type of number
function getChaiPrice(): number {
  // Returns the numeric price 10
  return 10;
}

// Declares makeOrder which takes a string order
function makeOrder(order: string) {
  // If order is falsy (e.g. ""), return null early
  if (!order) return null;
  // Otherwise return the order string as-is
  return order;
}

// Declares logChai with explicit return type void (no useful return value)
function logChai(): void {
  // Side effect only: prints a message
  console.log("chai is ready");
}

// Optional parameters: the ? means type may be omitted when calling

// type is optional; callers can pass a string or skip the argument
function orderChai2(type?: string) {
  // Logs a generic order message (does not use type here)
  console.log("chai order");
}

// type has a default value "Masala" if the caller omits it
function orderChai3(type: string = "Masala") {
  // Logs the order including the resolved type string
  console.log(`chai order ${type}`);
}

// createChai takes one object argument with a typed shape inline
function createChai(order: {
  // order.type must be a string
  type: string;
  // order.sugar must be a number
  sugar: number;
  // order.size must be one of these three string literals
  size: "small" | "medium" | "large";
  // Function return type is explicitly number
}): number {
  // Returns sugar plus 10 as a simple computed number
  return order.sugar + 10;
}
