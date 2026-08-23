/**
 * TOPICS COVERED — type vs interface, unions, intersections
 * ---------------------------------------------------------
 * 1. type aliases for object shapes
 * 2. Passing typed objects into functions
 * 3. interface definitions and class implements
 * 4. String literal unions ("small" | "medium" | "large")
 * 5. Intersection types (A & B = must have both shapes)
 * 6. Optional properties (?)
 * 7. readonly properties
 */

// Defines an Order type alias: the shape of an order object
type Order = {
  // type of chai as a string (e.g. "masala")
  type: string;
  // how much sugar (numeric)
  sugar: number;
  // whether the chai is strong
  strong: boolean;
};

// Function that accepts any value matching the Order type
function makeChai(order: Order) {
  // Logs the whole order object
  console.log(order);
}

// Another function that also requires an Order-shaped argument
function serverChai(order: Order) {
  // Logs the order (same pattern as makeChai)
  console.log(order);
}

// Interface describing a tea recipe's liquid amounts
interface TeaRecipe {
  // Milliliters (or units) of water
  water: number;
  // Milliliters (or units) of milk
  milk: number;
}

// Example of a class that would implement TeaRecipe (commented out)
// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// Interface that constrains size to one of three literal strings
interface CupSize {
  // size must be exactly "small", "medium", or "large"
  size: "small" | "medium" | "large";
}

// Class that promises to satisfy the CupSize interface
class Chai1 implements CupSize {
  // Property required by CupSize; default value is "small"
  size: "small" | "medium" | "large" = "small";
}

// Union of string literals: only these three tea names are allowed
type TeaType = "masala" | "ginger" | "lemon";

// Function parameter t must be one of the TeaType literals
function orderChai1(t: TeaType) {
  // Logs the chosen tea type
  console.log(t);
}

// Base object type with tea leaves amount
type BaseChai = {
  // Number of tea leaves (or units)
  teaLeaves: number;
};

// Extra ingredients type with masala amount
type Extra = { masala: number };

// Intersection (&): MasalaChai1 must have ALL properties of BaseChai AND Extra
type MasalaChai1 = BaseChai & Extra;

// Object that satisfies both teaLeaves and masala
const cup: MasalaChai1 = {
  // From Extra
  masala: 10,
  // From BaseChai
  teaLeaves: 100,
};

// User type with an optional bio field
type User = {
  // Required username string
  username: string;
  // Optional bio (? means it may be omitted)
  bio?: string;
};

// Valid: both username and bio provided
const u1: User = { username: "John", bio: "I am a developer" };
// Valid: bio omitted because it is optional
const u2: User = { username: "Jane" };

// Config type with a readonly property
type Config = {
  // appName can be set at creation but not reassigned later
  readonly appName: string;
  // version is a normal mutable number
  version: number;
};

// Creates a Config object with both required fields
const cfg: Config = {
  // Required readonly string
  appName: "My App",
  // Required mutable number
  version: 1.0,
};

// Would error: readonly properties cannot be reassigned after creation
// cfg.appName = "My App 2";
