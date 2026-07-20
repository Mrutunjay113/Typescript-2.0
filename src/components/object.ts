// Object Types (key-value pairs)

const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

//declare object type
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

//alias object type
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 30,
  ingredients: ["Adrak", "Chai", "Ginger", "Honey"],
};

//duck typing

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "200ml",
};

let bigCup: Cup = { size: "400ml" };

smallCup = bigCup;

type Brew = {
  brewTime: number;
};
const coffee = { brewTime: 10, beans: "arabica" };

const chaiBrew: Brew = coffee;

type User1 = {
  username: string;
  password: string;
};

const u3: User1 = { username: "John", password: "123456" };

//split datatypes

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type Order1 = {
  id: number;
  items: Item[];
};

type Chai2 = {
  name: string;
  price: number;
  isHot: boolean;
};

// Partial is used to make all properties of an object type optional
const updatedChai = (updates: Partial<Chai2>) => {
  return { ...chai, ...updates };
};

updatedChai({ price: 25 });

type ChaiOrder2 = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder2>) => {
  console.log(order);
};
placeOrder({
  name: "Masala Chai",
  quantity: 1,
});

type Chai3 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

// Pick is used to pick a subset of properties from an object type
type BasicChaiInfo = Pick<Chai3, "name" | "price">;
const chaiInfo2: BasicChaiInfo = {
  name: "Masala Chai",
  price: 20,
};

// Omit is used to omit a subset of properties from an object type
// PublicChaiInfo will not have the secretIngredient property
type Chai4 = {
  name: string;
  price: number;
  secretIngredient: string;
  isHot: boolean;
};

type PublicChaiInfo = Omit<Chai4, "secretIngredient">; // PublicChaiInfo will have the name, price, and isHot properties
