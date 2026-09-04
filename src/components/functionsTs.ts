/**
 * TOPICS — Functions in TypeScript
 * --------------------------------
 * You type what goes in (parameters) and what comes out (return type).
 * That stops callers from passing a number where a string is needed,
 * and stops you from returning the wrong kind of value.
 *
 * What you practice here:
 * - Typed parameters and explicit / inferred returns
 * - void (side effects only)
 * - Early return of null (string | null)
 * - Optional parameters (?) and default values
 * - An inline object as a parameter
 *
 * EXAMPLE USES
 * - makeChai5("Masala", 2) → bill = 2 * 10
 * - getChaiPrice() → price shown on a menu card
 * - makeOrder("") → null, so the UI can show "order required"
 * - orderChai3() → defaults to "Masala" if the user skips flavour
 * - createChai({ type, sugar, size }) → compute a simple total
 */

// What I did: declared makeChai5 with a string type and a number of cups.
function makeChai5(type: string, cups: number) {
  // What I did: returned cups * 10 as a simple bill (log is commented out).
  //console.log(`Making ${cups} cups of ${type} chai`);
  return cups * 10;
}

// What I did: called makeChai5 for 2 cups of Masala.
makeChai5("Masala", 2);

// What I did: promised this function always returns a number.
function getChaiPrice(): number {
  // What I did: returned the fixed price 10.
  return 10;
}

// What I did: wrote a function that takes an order string.
function makeOrder(order: string) {
  // What I did: if order is empty/falsy, returned null right away.
  if (!order) return null;
  // What I did: otherwise returned the same order string.
  return order;
}

// What I did: marked the return as void — this function only logs.
function logChai(): void {
  // What I did: printed a ready message (side effect, no useful return).
  console.log("chai is ready");
}

// What I did: made `type` optional so callers can skip the argument.
function orderChai2(type?: string) {
  // What I did: logged a generic order note (this demo does not use type).
  console.log("chai order");
}

// What I did: gave `type` a default of "Masala" when the caller omits it.
function orderChai3(type: string = "Masala") {
  // What I did: logged the order including the chosen (or default) type.
  console.log(`chai order ${type}`);
}

// What I did: accepted one object argument with an inline shape, return number.
function createChai(order: {
  // What I did: required order.type to be a string.
  type: string;
  // What I did: required order.sugar to be a number.
  sugar: number;
  // What I did: required size to be only small, medium, or large.
  size: "small" | "medium" | "large";
}): number {
  // What I did: returned sugar + 10 as a made-up computed total.
  return order.sugar + 10; //number
}
