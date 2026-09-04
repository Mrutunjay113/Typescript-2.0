/**
 * TOPICS — Union types, literal types, and undefined
 * --------------------------------------------------
 * A union (A | B) means "this value is one of these types, not both at once."
 * A string literal union means only those exact words are allowed.
 * string | undefined is common when a value is not found yet.
 *
 * What you practice here:
 * - number | string
 * - Status / seat literals
 * - Looping an array and stopping with break
 *
 * EXAMPLE USES
 * - subs: number | string → subscriber count or a label like "10k+"
 * - apiRequestStatus → spinner / success / error UI
 * - airLineSeat → booking form: only window, aisle, or middle
 * - currentOrder → "the matching order, or nothing if not found"
 */

// What I did: allowed subs to be a number or a string; started it as 10.
let subs: number | string = 10;

// What I did: locked status to only "pending", "success", or "error".
let apiRequestStatus: "pending" | "success" | "error" = "pending";

// What I did: locked the seat choice to three airline seat words.
let airLineSeat: "window" | "aisle" | "middle" = "window";

// What I did: made a list of order ids as strings.
const orders = ["12", "20", "30", "40", "50"];

// What I did: said currentOrder might be a string later, or still undefined.
let currentOrder: string | undefined;

// What I did: walked each order id in the list.
for (let order of orders) {
  // What I did: checked whether this id is the one I want ("30").
  if (order === "30") {
    // What I did: saved that id into currentOrder.
    currentOrder = order;
    // What I did: left the loop as soon as I found it.
    break;
  }
}

// What I did: printed the found id ("30") or undefined if none matched.
console.log(currentOrder);
