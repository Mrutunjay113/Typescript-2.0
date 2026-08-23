// Array of strings
const chaiFlavours1: string[] = ["Masala", "Adrak"];
// Array of numbers
const chaiPrices: number[] = [10, 20];
// Array of numbers using generics
const rating: Array<Number> = [4.5, 4.7, 4.8];

// Array of objects
type ChaiType = {
  name: string;
  price: number;
};

// Array of objects
const menu: ChaiType[] = [
  { name: "Masala", price: 10 },
  { name: "Adrak", price: 20 },
];

//readonly array
const cities: readonly string[] = ["Mumbai", "Delhi", "Chennai"];

// multidimensional array
// 2D array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//tuple

let chaiTuple: [string, number] = ["Masala", 10];

chaiTuple = ["Adrak", 20];

let userInfo: [number, string, boolean?];
userInfo = [1, "John", true];
userInfo = [1, "John"];

//readonly tuple
let readonlyChaiTuple: readonly [string, number] = ["Masala", 10];

const chaiItems2: [name: string, price: number] = ["Masala", 10];

{
  /* -------------------------- Enums -------------------------- */
}

enum CupSize1 {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize1.LARGE;

//enuum auto incremented

//AVOID USING AUTO INCREMENTED ENUMS
enum Status {
  PENDING = 100,
  SERVED,
  CANCELLED,
}

enum ChaiTypeEnum {
  MASALA = "Masala",
  ADRAK = "Adrak",
}

function makeChai(type: ChaiTypeEnum) {
  console.log(`Making ${type} chai`);
}

makeChai(ChaiTypeEnum.MASALA);
makeChai(ChaiTypeEnum.ADRAK);

//heterogeneous enum

//AVOID USING HETEROGENEOUS ENUMS in standard code
enum RandomEnum {
  ID = 1,
  NAME = "John",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.MEDIUM;

let t: [string, number] = ["Masala", 10];
t.push("Adrak", 20);
//t.push(3, "Adrak"); // Error: Argument of type 'number' is not assignable to type 'string'.