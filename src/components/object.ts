/**
 * TOPICS COVERED — Object types and utility types
 * ------------------------------------------------
 * 1. Inferred vs explicit object types
 * 2. type aliases for reusable object shapes
 * 3. Structural / duck typing (shape compatibility)
 * 4. Excess property checks vs assigning existing variables
 * 5. Composing larger types from smaller ones
 * 6. Utility types: Partial, Required, Pick, Omit
 */

// Object Types: values stored as named key–value pairs

// Object literal; TypeScript infers name:string, price:number, isHot:boolean
const chai = {
  // Inferred as string
  name: "Masala Chai",
  // Inferred as number
  price: 20,
  // Inferred as boolean
  isHot: true,
};

// Declares tea with an explicit inline object type (not assigned yet)
let tea: {
  // Must have a string name
  name: string;
  // Must have a number price
  price: number;
  // Must have a boolean isHot
  isHot: boolean;
};

// Assigns a matching object to tea
tea = {
  // Satisfies name: string
  name: "Masala Chai",
  // Satisfies price: number
  price: 20,
  // Satisfies isHot: boolean
  isHot: true,
};

// Type alias: reusable name for an object shape
type Tea = {
  // Display name
  name: string;
  // Price in currency units
  price: number;
  // ingredients must be an array of strings
  ingredients: string[];
};

// Variable typed as Tea — must include all required fields
const adrakChai: Tea = {
  // Required name
  name: "Adrak Chai",
  // Required price
  price: 30,
  // Required ingredients list
  ingredients: ["Adrak", "Chai", "Ginger", "Honey"],
};

// Duck typing: compatibility is based on shape, not declared type name

type Cup = {
  // Only requires a size string
  size: string;
};

// smallCup matches Cup
let smallCup: Cup = {
  // Only required field
  size: "200ml",
};

// bigCup also matches Cup
let bigCup: Cup = { size: "400ml" };

// Assignment works because both share the same required shape
smallCup = bigCup;

type Brew = {
  // Only brewTime is required by Brew
  brewTime: number;
};
// coffee has brewTime plus an extra beans property
const coffee = { brewTime: 10, beans: "arabica" };

// Extra properties are allowed when assigning from an existing variable (excess property check is relaxed here)
const chaiBrew: Brew = coffee;

type User1 = {
  // Login name
  username: string;
  // Secret password string
  password: string;
};

// Object that satisfies User1
const u3: User1 = { username: "John", password: "123456" };

// Split larger concepts into smaller reusable types

type Item = {
  // Item display name
  name: string;
  // How many of this item
  quantity: number;
};

type Address = {
  // Street line
  street: string;
  // City name
  city: string;
  // State / region
  state: string;
  // Postal code
  zip: string;
};

type Order1 = {
  // Unique order id
  id: number;
  // items is an array of Item objects
  items: Item[];
};

type Chai2 = {
  // Chai name
  name: string;
  // Chai price
  price: number;
  // Whether it is served hot
  isHot: boolean;
};

// Partial<T> makes every property of T optional
const updatedChai = (updates: Partial<Chai2>) => {
  // Spreads original chai then overlays only the provided updates
  return { ...chai, ...updates };
};

// Calls updatedChai with only price changed (other fields optional via Partial)
updatedChai({ price: 25 });

type ChaiOrder2 = {
  // Optional name
  name?: string;
  // Optional quantity
  quantity?: number;
};

// Required<T> makes every property of T required (undoes ?)
const placeOrder = (order: Required<ChaiOrder2>) => {
  // Logs the fully-required order object
  console.log(order);
};
// Both name and quantity must be provided because of Required
placeOrder({
  // Now required by Required<ChaiOrder2>
  name: "Masala Chai",
  // Now required by Required<ChaiOrder2>
  quantity: 1,
});

type Chai3 = {
  // Name field
  name: string;
  // Price field
  price: number;
  // Hot/cold flag
  isHot: boolean;
  // List of ingredients
  ingredients: string[];
};

// Pick<T, Keys> builds a type with only the listed keys from T
type BasicChaiInfo = Pick<Chai3, "name" | "price">;
// Must only include name and price (not isHot or ingredients)
const chaiInfo2: BasicChaiInfo = {
  // Picked from Chai3
  name: "Masala Chai",
  // Picked from Chai3
  price: 20,
};

// Omit removes listed keys from a type

type Chai4 = {
  // Public name
  name: string;
  // Public price
  price: number;
  // Should stay internal / hidden from public API types
  secretIngredient: string;
  // Public hot flag
  isHot: boolean;
};

// PublicChaiInfo has name, price, and isHot — but not secretIngredient
type PublicChaiInfo = Omit<Chai4, "secretIngredient">;
