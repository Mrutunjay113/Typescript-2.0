/**
 * TOPICS COVERED — Arrays, tuples, and enums
 * -------------------------------------------
 * 1. Typed arrays: string[], number[], Array<T>
 * 2. Arrays of custom object types (type aliases)
 * 3. readonly arrays (cannot push/pop/mutate)
 * 4. Multidimensional arrays (number[][])
 * 5. Tuples: fixed length + typed positions
 * 6. Optional tuple elements and labeled tuple slots
 * 7. Numeric enums, string enums, heterogeneous enums
 * 8. const enums (often inlined at compile time)
 */

// Array of strings: every element must be a string
const chaiFlavours1: string[] = ["Masala", "Adrak"];
// Array of numbers: every element must be a number
const chaiPrices: number[] = [10, 20];
// Generic Array<Number> form (same idea as number[], but Number is the object wrapper type)
const rating: Array<Number> = [4.5, 4.7, 4.8];

// Type alias for a chai menu item object
type ChaiType = {
  // Display name of the chai
  name: string;
  // Price of the chai
  price: number;
};

// Array where each element must match ChaiType
const menu: ChaiType[] = [
  // First menu item object
  { name: "Masala", price: 10 },
  // Second menu item object
  { name: "Adrak", price: 20 },
];

// readonly string[]: you cannot push/pop or reassign elements
const cities: readonly string[] = ["Mumbai", "Delhi", "Chennai"];

// Multidimensional (2D) array: array of number arrays
const table: number[][] = [
  // First row
  [1, 2, 3],
  // Second row
  [4, 5, 6],
];

// Tuple: fixed-length array with known types per position
// Index 0 is string, index 1 is number
let chaiTuple: [string, number] = ["Masala", 10];

// Reassigning the whole tuple with another valid [string, number] pair
chaiTuple = ["Adrak", 20];

// Tuple with an optional third boolean element (?)
let userInfo: [number, string, boolean?];
// All three positions filled
userInfo = [1, "John", true];
// Third element omitted because it is optional
userInfo = [1, "John"];

// Readonly tuple: contents cannot be mutated after creation
let readonlyChaiTuple: readonly [string, number] = ["Masala", 10];

// Labeled tuple elements: names are for documentation/readability only
const chaiItems2: [name: string, price: number] = ["Masala", 10];

// Block used only as a visual section marker for enums
{
  /* -------------------------- Enums -------------------------- */
}

// Numeric enum: SMALL=0, MEDIUM=1, LARGE=2 by default (auto-increment from 0)
enum CupSize1 {
  // First member → 0
  SMALL,
  // Second member → 1
  MEDIUM,
  // Third member → 2
  LARGE,
}

// Reads the LARGE member value from the enum (number 2)
const size = CupSize1.LARGE;

// Prefer named/string enums over auto-incremented numeric ones in most code
// Enum with a custom starting value; later members auto-increment
enum Status {
  // Explicitly start at 100
  PENDING = 100,
  // Becomes 101 automatically
  SERVED,
  // Becomes 102 automatically
  CANCELLED,
}

// String enum: each member has an explicit string value
enum ChaiTypeEnum {
  // Member MASALA holds the string "Masala"
  MASALA = "Masala",
  // Member ADRAK holds the string "Adrak"
  ADRAK = "Adrak",
}

// Function parameter must be a ChaiTypeEnum member
function makeChai4(type: ChaiTypeEnum) {
  // Logs which chai type is being made (uses the enum's string value)
  console.log(`Making ${type} chai`);
}

// Call with the MASALA enum member
makeChai4(ChaiTypeEnum.MASALA);
// Call with the ADRAK enum member
makeChai4(ChaiTypeEnum.ADRAK);

// Mixing value kinds in one enum is generally discouraged
// Heterogeneous enum: mixes number and string members (usually avoided)
enum RandomEnum {
  // Numeric member
  ID = 1,
  // String member in the same enum
  NAME = "John",
}

// const enum: inlined at compile time (no runtime enum object in many configs)
const enum Sugars {
  // Low sugar level → 1
  LOW = 1,
  // Medium sugar level → 2
  MEDIUM = 2,
  // High sugar level → 3
  HIGH = 3,
}

// Uses the MEDIUM member (compiles to the literal 2 when const enums are inlined)
const s = Sugars.MEDIUM;

// Mutable tuple variable
let t: [string, number] = ["Masala", 10];
// Tuples still allow .push at runtime in TypeScript's typing (known quirk)
t.push("Adrak", 20);
// Invalid push types would error — commented example of a type mismatch
// t.push(3, "Adrak");
