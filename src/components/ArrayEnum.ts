/**
 * TOPICS — Arrays, tuples, and enums
 * ----------------------------------
 * Arrays hold many values of one type. Tuples hold a fixed list with a
 * known type at each position. Enums name a small set of related values
 * (sizes, statuses) instead of raw numbers or strings.
 *
 * What you practice here:
 * - string[], number[], Array<Number>
 * - Arrays of custom objects (ChaiType[])
 * - readonly arrays and 2D arrays
 * - Tuples, optional slots, labeled slots, readonly tuples
 * - Numeric, string, mixed, and const enums
 *
 * EXAMPLE USES
 * - chaiFlavours1 → menu flavour chips
 * - menu → shop catalog [{ name, price }, ...]
 * - cities → locked city list you should not mutate
 * - table → spreadsheet / grid of numbers
 * - chaiTuple → [flavour, price] pair from a scanner
 * - CupSize1 / Status → cup size picker or order status
 */

// What I did: made a string-only list of chai flavours.
const chaiFlavours1: string[] = ["Masala", "Adrak"];
// What I did: made a number-only list of prices.
const chaiPrices: number[] = [10, 20];
// What I did: used the generic Array<Number> form for ratings.
const rating: Array<Number> = [4.5, 4.7, 4.8];

// What I did: named a reusable object shape for one menu item.
type ChaiType = {
  // What I did: required a display name.
  name: string;
  // What I did: required a price.
  price: number;
};

// What I did: made a list where every item must match ChaiType.
const menu: ChaiType[] = [
  // What I did: added the first catalog row.
  { name: "Masala", price: 10 },
  // What I did: added the second catalog row.
  { name: "Adrak", price: 20 },
];

// What I did: made a city list that cannot be push/pop/changed later.
const cities: readonly string[] = ["Mumbai", "Delhi", "Chennai"];

// What I did: made a 2D grid: an array of number arrays.
const table: number[][] = [
  // What I did: first row of the grid.
  [1, 2, 3],
  // What I did: second row of the grid.
  [4, 5, 6],
];

// What I did: made a 2-slot tuple: [flavour string, price number].
let chaiTuple: [string, number] = ["Masala", 10];

// What I did: replaced the whole tuple with another valid pair.
chaiTuple = ["Adrak", 20];

// What I did: declared a tuple whose third boolean slot is optional.
let userInfo: [number, string, boolean?];
// What I did: filled all three slots (id, name, flag).
userInfo = [1, "John", true];
// What I did: omitted the optional third slot.
userInfo = [1, "John"];

// What I did: made a tuple that cannot be mutated after creation.
let readonlyChaiTuple: readonly [string, number] = ["Masala", 10];

// What I did: labeled the tuple slots (names are for readability only).
const chaiItems2: [name: string, price: number] = ["Masala", 10];

// What I did: used an empty block only as a visual "Enums" section break.
{
  /* -------------------------- Enums -------------------------- */
}

// What I did: created a numeric enum (SMALL=0, MEDIUM=1, LARGE=2).
enum CupSize1 {
  // What I did: first member → 0.
  SMALL,
  // What I did: second member → 1.
  MEDIUM,
  // What I did: third member → 2.
  LARGE,
}

// What I did: read the LARGE member (the number 2).
const size = CupSize1.LARGE;

// What I did: started an enum at 100 so later members become 101, 102.
enum Status {
  // What I did: set PENDING to 100 on purpose.
  PENDING = 100,
  // What I did: let SERVED auto-increment to 101.
  SERVED,
  // What I did: let CANCELLED auto-increment to 102.
  CANCELLED,
}

// What I did: created a string enum so values stay readable in logs.
enum ChaiTypeEnum {
  // What I did: mapped MASALA to the string "Masala".
  MASALA = "Masala",
  // What I did: mapped ADRAK to the string "Adrak".
  ADRAK = "Adrak",
}

// What I did: wrote a function that only accepts a ChaiTypeEnum member.
function makeChai4(type: ChaiTypeEnum) {
  // What I did: logged which enum value is being made.
  console.log(`Making ${type} chai`);
}

// What I did: called the function with MASALA.
makeChai4(ChaiTypeEnum.MASALA);
// What I did: called the function with ADRAK.
makeChai4(ChaiTypeEnum.ADRAK);

// What I did: mixed a number and a string in one enum (usually avoided).
enum RandomEnum {
  // What I did: numeric member ID = 1.
  ID = 1,
  // What I did: string member NAME = "John".
  NAME = "John",
}

// What I did: used a const enum so values can be inlined at compile time.
const enum Sugars {
  // What I did: low sugar → 1.
  LOW = 1,
  // What I did: medium sugar → 2.
  MEDIUM = 2,
  // What I did: high sugar → 3.
  HIGH = 3,
}

// What I did: read Sugars.MEDIUM (often compiled to the literal 2).
const s = Sugars.MEDIUM;

// What I did: created a mutable [string, number] tuple.
let t: [string, number] = ["Masala", 10];
// What I did: pushed extra values — TS still allows .push on tuples (known quirk).
t.push("Adrak", 20);
// What I did: left a bad push commented out to show a type mismatch.
// t.push(3, "Adrak");
