/**
 * TOPICS — Type narrowing
 * -----------------------
 * A union starts wide (string | number). Narrowing uses checks so TypeScript
 * knows which member you have in that branch. Then you can use the right
 * properties/methods safely.
 *
 * What you practice here:
 * - typeof
 * - Truthiness for optional values
 * - Equality on literal unions
 * - instanceof
 * - User-defined type guards (`obj is Type`)
 * - Discriminated unions + switch
 * - The `in` operator
 *
 * EXAMPLE USES
 * - getChai("masala") vs getChai(10) → flavour name or cup count
 * - serveChai() with/without a message → default vs custom serve text
 * - orderChai("small") → size-specific copy
 * - instanceof KulhadChai → pick the right serve method
 * - isChaiOrder(item) → API payload is object or leftover string
 * - MakeChai({ type: "ginger", amount: 2 }) → only `amount` exists on ginger
 */

// What I did: accepted either a string flavour or a number of cups.
function getChai(kind: string | number) {
  // What I did: narrowed kind to string with typeof.
  if (typeof kind === "string") {
    // What I did: built a message using the flavour string.
    return `Making ${kind} chai`;
  }
  // What I did: treated the leftover type as number (cup count).
  return `Chai Order: ${kind} cups of chai`;
}

// What I did: made msg optional — it may be a string or undefined.
function serveChai(msg?: string) {
  // What I did: used a truthiness check to treat msg as a real message.
  if (msg) {
    // What I did: returned a custom serve line.
    return `Serving ${msg}`;
  }
  // What I did: returned a default when msg is missing or empty.
  return `Serving default masala chai`;
}

// What I did: called getChai with a string.
console.log(getChai("sugar"));
// What I did: called getChai with a number.
console.log(getChai(10));
// What I did: called serveChai with a custom message.
console.log(serveChai("sugar"));

// What I did: limited size to three literal words.
function orderChai(size: "small" | "medium" | "large") {
  // What I did: narrowed size to "small".
  if (size === "small") {
    // What I did: returned the small-cup message.
    return `Serving small chai`;
  }
  // What I did: narrowed the remaining union to "medium".
  if (size === "medium") {
    // What I did: returned the medium-cup message.
    return `Serving medium chai`;
  }
  // What I did: treated the last leftover as "large".
  return `Serving ${size} chai`;
}

// What I did: exercised all three size branches.
console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai("large"));

// What I did: defined a Kulhad chai class with a serve method.
class KulhadChai {
  // What I did: returned Kulhad-specific text.
  server() {
    return `Serving Kulhad chai`;
  }
}
// What I did: defined a Cutting chai class with the same method name.
class CuttingChai {
  // What I did: returned Cutting-specific text.
  server() {
    return `Serving Cutting chai`;
  }
}

// What I did: accepted either class instance.
function serve(chai: KulhadChai | CuttingChai) {
  // What I did: used instanceof to narrow to KulhadChai.
  if (chai instanceof KulhadChai) {
    // What I did: called KulhadChai.server().
    return chai.server();
  }
  // What I did: called CuttingChai.server() in the leftover branch.
  return chai.server();
}

// What I did: served a new Kulhad instance.
console.log(serve(new KulhadChai()));
// What I did: served a new Cutting instance.
console.log(serve(new CuttingChai()));

// What I did: named an order object with type and sugar.
type ChaiOrder = {
  // What I did: required a type string.
  type: string;
  // What I did: required a sugar number.
  sugar: number;
};

// What I did: wrote a type guard — if this returns true, TS treats obj as ChaiOrder.
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    // What I did: checked it is an object (not a primitive).
    typeof obj === "object" &&
    // What I did: ruled out null (typeof null is "object").
    obj !== null &&
    // What I did: checked type is a string.
    typeof obj.type === "string" &&
    // What I did: checked sugar is a number.
    typeof obj.sugar === "number"
  );
}

// What I did: accepted either a ChaiOrder object or a plain string.
function serverOrder(item: ChaiOrder | string) {
  // What I did: used the type guard to narrow item to ChaiOrder.
  if (isChaiOrder(item)) {
    // What I did: safely read .type and .sugar after the guard.
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  // What I did: treated the leftover as a string flavour name.
  return `Serving ${item} chai`;
}

// What I did: passed an object that matches ChaiOrder.
console.log(serverOrder({ type: "sugar", sugar: 10 }));
// What I did: passed a string instead.
console.log(serverOrder("sugar"));

// What I did: defined three variants, each with a unique literal `type`.
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

// What I did: united all three shapes into one Chai type.
type Chai = MasalaChai | GingerChai | ElaichiChai;

// What I did: switched on the discriminant so each case is narrowed.
function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      // What I did: used spiceLevel (only exists on MasalaChai).
      return `Making ${order.spiceLevel} masala chai`;
    case "ginger":
      // What I did: used amount (only exists on GingerChai).
      return `Making ${order.amount} ginger chai`;
    case "elaichi":
      // What I did: used aroma (only exists on ElaichiChai).
      return `Making ${order.aroma} elaichi chai`;
    default:
      // What I did: returned a fallback if no case matched.
      return `Making default chai`;
  }
}

// What I did: narrowed with `in` instead of switch.
function bew(order: MasalaChai | GingerChai | ElaichiChai) {
  // What I did: if spiceLevel exists, treated the order as masala.
  if ("spiceLevel" in order) {
    return `Making ${order.spiceLevel} masala chai`;
  }
  // What I did: if amount exists, treated the order as ginger.
  if ("amount" in order) {
    return `Making ${order.amount} ginger chai`;
  }
  // What I did: if aroma exists, treated the order as elaichi.
  if ("aroma" in order) {
    return `Making ${order.aroma} elaichi chai`;
  }
  // What I did: returned a default if none of the keys were found.
  return `Making default chai`;
}
