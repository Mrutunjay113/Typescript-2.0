/**
 * TOPICS — Object types and utility types
 * ---------------------------------------
 * Objects are named key–value pairs. TypeScript can infer the shape, or you
 * can write it yourself. Compatibility is structural ("duck typing"): if it
 * has the required fields, it matches. Utility types transform existing types
 * (Partial, Required, Pick, Omit) instead of rewriting them by hand.
 *
 * What you practice here:
 * - Inferred vs explicit object types
 * - type aliases
 * - Assigning objects that share a shape
 * - Extra properties when assigning from a variable
 * - Partial, Required, Pick, Omit
 *
 * EXAMPLE USES
 * - chai / tea → one drink card on a menu
 * - Tea.ingredients → recipe list
 * - smallCup = bigCup → both are just { size: string }
 * - chaiBrew = coffee → coffee has extra beans; Brew only needs brewTime
 * - updatedChai({ price: 25 }) → PATCH-style update (Partial)
 * - placeOrder(...) → checkout that requires every field (Required)
 * - BasicChaiInfo / PublicChaiInfo → public API without secrets
 */

// What I did: created an object and let TS infer name, price, and isHot.
const chai = {
  // What I did: set the drink name (inferred string).
  name: "Masala Chai",
  // What I did: set the price (inferred number).
  price: 20,
  // What I did: set hot/cold (inferred boolean).
  isHot: true,
};

// What I did: declared tea with an explicit inline type (no value yet).
let tea: {
  // What I did: required name.
  name: string;
  // What I did: required price.
  price: number;
  // What I did: required isHot.
  isHot: boolean;
};

// What I did: assigned an object that matches that inline type.
tea = {
  // What I did: filled name.
  name: "Masala Chai",
  // What I did: filled price.
  price: 20,
  // What I did: filled isHot.
  isHot: true,
};

// What I did: named a reusable Tea shape including an ingredients list.
type Tea = {
  // What I did: required name.
  name: string;
  // What I did: required price.
  price: number;
  // What I did: required a string array of ingredients.
  ingredients: string[];
};

// What I did: created one Tea value with all required fields.
const adrakChai: Tea = {
  // What I did: set the name.
  name: "Adrak Chai",
  // What I did: set the price.
  price: 30,
  // What I did: listed the ingredients.
  ingredients: ["Adrak", "Chai", "Ginger", "Honey"],
};

// What I did: defined Cup as "anything with a size string".
type Cup = {
  // What I did: required only size.
  size: string;
};

// What I did: made a small cup that matches Cup.
let smallCup: Cup = {
  // What I did: set size to 200ml.
  size: "200ml",
};

// What I did: made a big cup that also matches Cup.
let bigCup: Cup = { size: "400ml" };

// What I did: assigned bigCup to smallCup because both have { size: string }.
smallCup = bigCup;

type Brew = {
  // What I did: required only brewTime.
  brewTime: number;
};
// What I did: created coffee with brewTime plus an extra beans field.
const coffee = { brewTime: 10, beans: "arabica" };

// What I did: assigned coffee to Brew — extra fields are OK from an existing variable.
const chaiBrew: Brew = coffee;

type User1 = {
  // What I did: required username.
  username: string;
  // What I did: required password.
  password: string;
};

// What I did: created a User1 object with both fields.
const u3: User1 = { username: "John", password: "123456" };

// What I did: split a larger idea into smaller reusable types.

type Item = {
  // What I did: required item name.
  name: string;
  // What I did: required quantity.
  quantity: number;
};

type Address = {
  // What I did: required street.
  street: string;
  // What I did: required city.
  city: string;
  // What I did: required state.
  state: string;
  // What I did: required zip.
  zip: string;
};

type Order1 = {
  // What I did: required an order id.
  id: number;
  // What I did: required a list of Item objects.
  items: Item[];
};

type Chai2 = {
  // What I did: required name.
  name: string;
  // What I did: required price.
  price: number;
  // What I did: required isHot.
  isHot: boolean;
};

// What I did: used Partial so every Chai2 field becomes optional for updates.
const updatedChai = (updates: Partial<Chai2>) => {
  // What I did: copied chai, then overwrote only the fields in updates.
  return { ...chai, ...updates };
};

// What I did: updated only price; Partial allows skipping the other fields.
updatedChai({ price: 25 });

type ChaiOrder2 = {
  // What I did: made name optional on the base type.
  name?: string;
  // What I did: made quantity optional on the base type.
  quantity?: number;
};

// What I did: used Required so both optional fields become required here.
const placeOrder = (order: Required<ChaiOrder2>) => {
  // What I did: logged the complete order.
  console.log(order);
};
// What I did: passed both fields because Required demands them.
placeOrder({
  // What I did: provided name.
  name: "Masala Chai",
  // What I did: provided quantity.
  quantity: 1,
});

type Chai3 = {
  // What I did: included name.
  name: string;
  // What I did: included price.
  price: number;
  // What I did: included isHot.
  isHot: boolean;
  // What I did: included ingredients.
  ingredients: string[];
};

// What I did: picked only name and price from Chai3.
type BasicChaiInfo = Pick<Chai3, "name" | "price">;
// What I did: created an object with only those two picked fields.
const chaiInfo2: BasicChaiInfo = {
  // What I did: set name.
  name: "Masala Chai",
  // What I did: set price.
  price: 20,
};

type Chai4 = {
  // What I did: included a public name.
  name: string;
  // What I did: included a public price.
  price: number;
  // What I did: included a secret that should not leak in public types.
  secretIngredient: string;
  // What I did: included isHot.
  isHot: boolean;
};

// What I did: omitted secretIngredient so the public type cannot include it.
type PublicChaiInfo = Omit<Chai4, "secretIngredient">;
