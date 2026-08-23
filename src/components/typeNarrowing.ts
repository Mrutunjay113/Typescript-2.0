/**
 * TOPICS COVERED — Type narrowing
 * --------------------------------
 * 1. Narrowing unions with typeof
 * 2. Truthiness checks for optional values
 * 3. Equality checks on string literal unions
 * 4. instanceof for class instances
 * 5. User-defined type guards (`obj is Type`)
 * 6. Discriminated unions (shared literal `type` field)
 * 7. switch on a discriminant
 * 8. The `in` operator to check for property existence
 */

// kind is a union: callers may pass a string or a number
function getChai(kind: string | number) {
  // typeof narrows kind to string inside this branch
  if (typeof kind === "string") {
    // Safe to treat kind as string in the template
    return `Making ${kind} chai`;
  }
  // Else branch: TypeScript knows kind must be number
  return `Chai Order: ${kind} cups of chai`;
}

// msg is optional (?); may be string or undefined
function serveChai(msg?: string) {
  // Truthiness check narrows msg to a non-empty string-like value
  if (msg) {
    // msg is definitely a usable string here
    return `Serving ${msg}`;
  }
  // msg was missing or falsy — use a default message
  return `Serving default masala chai`;
}

// Calls getChai with a string argument
console.log(getChai("sugar"));
// Calls getChai with a number argument
console.log(getChai(10));
// Calls serveChai with an optional message provided
console.log(serveChai("sugar"));

// size is a union of three string literals only
function orderChai(size: "small" | "medium" | "large") {
  // Equality check narrows size to the literal "small"
  if (size === "small") {
    // Only the "small" branch runs this return
    return `Serving small chai`;
  }
  // After the previous if, size is "medium" | "large"; this narrows to "medium"
  if (size === "medium") {
    // Only the "medium" branch runs this return
    return `Serving medium chai`;
  }
  // Remaining possibility is "large"
  return `Serving ${size} chai`;
}

// Exercise each literal branch
console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai("large"));

// Class representing Kulhad-style chai
class KulhadChai {
  // Instance method that returns a serving message
  server() {
    // Message specific to Kulhad chai
    return `Serving Kulhad chai`;
  }
}
// Class representing Cutting-style chai
class CuttingChai {
  // Instance method with the same method name (duck-typed similarity)
  server() {
    // Message specific to Cutting chai
    return `Serving Cutting chai`;
  }
}

// Parameter may be an instance of either class
function serve(chai: KulhadChai | CuttingChai) {
  // instanceof narrows chai to KulhadChai in this branch
  if (chai instanceof KulhadChai) {
    // Call KulhadChai.server
    return chai.server();
  }
  // Else: chai is CuttingChai
  return chai.server();
}

// Pass a new KulhadChai instance
console.log(serve(new KulhadChai()));
// Pass a new CuttingChai instance
console.log(serve(new CuttingChai()));

// Type alias for a structured chai order object
type ChaiOrder = {
  // Kind/flavor of chai
  type: string;
  // Sugar amount
  sugar: number;
};

// User-defined type guard: return type `obj is ChaiOrder` narrows the caller's type
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    // Must be an object (not a primitive)
    typeof obj === "object" &&
    // Must not be null (typeof null === "object" in JS)
    obj !== null &&
    // type property must be a string
    typeof obj.type === "string" &&
    // sugar property must be a number
    typeof obj.sugar === "number"
  );
}

// item is either a ChaiOrder object or a plain string
function serverOrder(item: ChaiOrder | string) {
  // If the type guard returns true, item is narrowed to ChaiOrder
  if (isChaiOrder(item)) {
    // Safe to read .type and .sugar after the guard
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  // Else item is string
  return `Serving ${item} chai`;
}

// Pass an object that matches ChaiOrder
console.log(serverOrder({ type: "sugar", sugar: 10 }));
// Pass a string instead
console.log(serverOrder("sugar"));

// Discriminated union members: each has a unique literal `type` field
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

// Chai is the union of all three order shapes
type Chai = MasalaChai | GingerChai | ElaichiChai;

// switch on the discriminant property `type` to narrow each case
function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      // order narrowed to MasalaChai — spiceLevel is available
      return `Making ${order.spiceLevel} masala chai`;
    case "ginger":
      // order narrowed to GingerChai — amount is available
      return `Making ${order.amount} ginger chai`;
    case "elaichi":
      // order narrowed to ElaichiChai — aroma is available
      return `Making ${order.aroma} elaichi chai`;
    default:
      // Fallback if somehow no case matched
      return `Making default chai`;
  }
}

// Alternative narrowing with the `in` operator (checks property existence)
function bew(order: MasalaChai | GingerChai | ElaichiChai) {
  // If spiceLevel exists, treat as MasalaChai
  if ("spiceLevel" in order) {
    // order is MasalaChai here
    return `Making ${order.spiceLevel} masala chai`;
  }
  // If amount exists, treat as GingerChai
  if ("amount" in order) {
    // order is GingerChai here
    return `Making ${order.amount} ginger chai`;
  }
  // If aroma exists, treat as ElaichiChai
  if ("aroma" in order) {
    // order is ElaichiChai here
    return `Making ${order.aroma} elaichi chai`;
  }
  // Should be unreachable if all union members were covered
  return `Making default chai`;
}
