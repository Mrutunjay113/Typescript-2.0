/**
 * TOPICS — type aliases vs interfaces, unions, intersections
 * ----------------------------------------------------------
 * `type` names a shape (or a union / intersection). `interface` also names
 * an object shape and is often used with `implements` on classes.
 * A union (A | B) is "one of". An intersection (A & B) is "both".
 *
 * What you practice here:
 * - type Order passed into functions
 * - interface + class implements
 * - string literal unions
 * - intersection types
 * - optional (?) and readonly fields
 *
 * EXAMPLE USES
 * - makeChai(order) / serverChai(order) → kitchen + waiter share one Order type
 * - Chai1 implements CupSize → cup object must be small | medium | large
 * - orderChai1("masala") → only three tea names in a dropdown
 * - cup: MasalaChai1 → must have teaLeaves AND masala
 * - User.bio? → profile bio can be skipped
 * - Config.appName readonly → brand name locked after boot
 */

// What I did: named the shape of one chai order.
type Order = {
  // What I did: required the chai type as a string.
  type: string;
  // What I did: required a numeric sugar amount.
  sugar: number;
  // What I did: required a strong/not-strong flag.
  strong: boolean;
};

// What I did: wrote a function that only accepts Order-shaped objects.
function makeChai(order: Order) {
  // What I did: logged the whole order.
  console.log(order);
}

// What I did: wrote a second function that also requires Order (same contract).
function serverChai(order: Order) {
  // What I did: logged the order again (serve step).
  console.log(order);
}

// What I did: described a tea recipe with water and milk amounts.
interface TeaRecipe {
  // What I did: required water units.
  water: number;
  // What I did: required milk units.
  milk: number;
}

// What I did: left a class example commented — it would implement TeaRecipe.
// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// What I did: constrained size to three exact words.
interface CupSize {
  // What I did: size must be "small", "medium", or "large".
  size: "small" | "medium" | "large";
}

// What I did: made a class that promises to satisfy CupSize.
class Chai1 implements CupSize {
  // What I did: added the required size field, defaulting to "small".
  size: "small" | "medium" | "large" = "small";
}

// What I did: allowed only three tea name strings.
type TeaType = "masala" | "ginger" | "lemon";

// What I did: required the function argument to be one of those tea names.
function orderChai1(t: TeaType) {
  // What I did: logged the chosen tea.
  console.log(t);
}

// What I did: described the base recipe: tea leaves only.
type BaseChai = {
  // What I did: required teaLeaves.
  teaLeaves: number;
};

// What I did: described extra masala spice.
type Extra = { masala: number };

// What I did: combined both shapes — MasalaChai1 must have teaLeaves and masala.
type MasalaChai1 = BaseChai & Extra;

// What I did: created an object that satisfies the intersection.
const cup: MasalaChai1 = {
  // What I did: filled Extra.masala.
  masala: 10,
  // What I did: filled BaseChai.teaLeaves.
  teaLeaves: 100,
};

// What I did: described a user with an optional bio.
type User = {
  // What I did: required username.
  username: string;
  // What I did: allowed bio to be omitted.
  bio?: string;
};

// What I did: created a user with both fields.
const u1: User = { username: "John", bio: "I am a developer" };
// What I did: created a user without bio (valid because bio is optional).
const u2: User = { username: "Jane" };

// What I did: described config with a locked app name.
type Config = {
  // What I did: marked appName readonly after creation.
  readonly appName: string;
  // What I did: left version mutable.
  version: number;
};

// What I did: created a config object with both required fields.
const cfg: Config = {
  // What I did: set the app name (cannot change later).
  appName: "My App",
  // What I did: set version to 1.0.
  version: 1.0,
};

// What I did: left a forbidden reassignment commented out (readonly).
// cfg.appName = "My App 2";
