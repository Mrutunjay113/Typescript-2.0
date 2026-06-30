type Order = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: Order) {
  console.log(order);
}

function serverChai(order: Order) {
  console.log(order);
}

interface TeaRecipe {
  water: number;
  milk: number;
}

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "medium" | "large";
}

class Chai1 implements CupSize {
  size: "small" | "medium" | "large" = "small";
}

// Union Type (OR) literal types
type TeaType = "masala" | "ginger" | "lemon";

function orderChai1(t: TeaType) {
  console.log(t);
}

type BaseChai = {
  teaLeaves: number;
};

type Extra = { masala: number };

// Intersection Type (AND) object types
type MasalaChai1 = BaseChai & Extra;

const cup: MasalaChai1 = {
  masala: 10,
  teaLeaves: 100,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "John", bio: "I am a developer" };
const u2: User = { username: "Jane" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "My App",
  version: 1.0,
};

// cfg.appName = "My App 2";  // Error: Cannot assign to 'appName' because it is a read-only property.
