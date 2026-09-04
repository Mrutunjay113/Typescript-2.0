/**
 * TOPICS — Interfaces in TypeScript
 * ---------------------------------
 * An interface names an object (or function) shape. Anything that matches
 * that shape can be used where the interface is required. Interfaces can
 * also merge if you declare the same name twice, and they can extend others.
 *
 * What you practice here:
 * - Object interfaces and optional fields (?)
 * - readonly fields
 * - Call-signature interfaces (function types)
 * - Method interfaces
 * - Index signatures ([key: string]: value)
 * - Declaration merging
 * - extends (combine interfaces)
 *
 * EXAMPLE USES
 * - Chai_1 → one drink on a menu (milk optional)
 * - Chai_Shop.id → id that should never be rewritten after create
 * - DiscountCalculator → reusable 50% off helper
 * - TeaMachine → start/stop buttons on a kiosk
 * - ChaiRating → flavour → score map from reviews
 * - User2 merge → name + age from two interface blocks
 * - C extends A & B → one object that must have a, b, and c
 */

// What I did: described a chai item: flavour, price, optional milk flag.
interface Chai_1 {
  // What I did: required the flavour name.
  flavor: string;
  // What I did: required the price.
  price: number;
  // What I did: allowed milk to be missing.
  milk?: boolean;
}

// What I did: created a Chai_1 value without milk (allowed because milk is optional).
const masala: Chai_1 = {
  // What I did: set flavour to masala.
  flavor: "masala",
  // What I did: set price to 10.
  price: 10,
};

// What I did: described a shop record whose id cannot be reassigned.
interface Chai_Shop {
  // What I did: marked id as readonly.
  readonly id: number;
  // What I did: required a shop name.
  name: string;
}

// What I did: created shop #1 named "Chai Shop".
const s1: Chai_Shop = {
  // What I did: set the readonly id.
  id: 1,
  // What I did: set the shop name.
  name: "Chai Shop",
};

// What I did: described a function type: take a price, return a number.
interface DiscountCalculator {
  // What I did: call signature (price in, discounted price out).
  (price: number): number;
}

// What I did: implemented that function type as a 50% off arrow function.
const apply50: DiscountCalculator = (price: number) => {
  // What I did: returned half the price.
  return price * 0.5;
};

// What I did: described an object that must have start() and stop() methods.
interface TeaMachine {
  // What I did: start has no useful return (void).
  start(): void;
  // What I did: stop has no useful return (void).
  stop(): void;
}

// What I did: created an object that implements TeaMachine with two methods.
const machine1: TeaMachine = {
  // What I did: logged a start message.
  start() {
    console.log("Starting the machine");
  },
  // What I did: logged a stop message.
  stop() {
    console.log("Stopping the machine");
  },
};

// What I did: used an index signature so any string key maps to a number score.
interface ChaiRating {
  // What I did: said every flavour name is a string key, value is a number.
  [flavour: string]: number;
}

// What I did: filled a ratings map with flavour → score pairs.
const ratings: ChaiRating = {
  // What I did: scored masala 5.
  masala: 5,
  // What I did: scored tea 4.
  tea: 4,
  // What I did: scored coffee 3.
  coffee: 3,
  chocolate: 2,
  vanilla: 1,
  strawberry: 0,
  mango: 0,
  pineapple: 0,
  orange: 0,
  apple: 0,
};

// What I did: started User2 with only a name field.
interface User2 {
  name: string;
}
// What I did: declared User2 again — TS merges this with the first (adds age).
interface User2 {
  age: number;
}

// What I did: created a user that must have both merged fields.
const user2: User2 = {
  // What I did: set name from the first interface block.
  name: "John",
  // What I did: set age from the second merged block.
  age: 20,
};

// What I did: made interface A with field a.
interface A {
  a: string;
}
// What I did: made interface B with field b.
interface B {
  b: string;
}
// What I did: made C extend both A and B, plus its own field c.
interface C extends A, B {
  c: string;
}
