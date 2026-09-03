interface Chai_1 {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai_1 = {
  flavor: "masala",
  price: 10,
};

interface Chai_Shop {
  readonly id: number;
  name: string;
}

const s1: Chai_Shop = {
  id: 1,
  name: "Chai Shop",
};

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (price: number) => {
  return price * 0.5;
};

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine1: TeaMachine = {
  start() {
    console.log("Starting the machine");
  },
  stop() {
    console.log("Stopping the machine");
  },
};

//index signature

interface ChaiRating {
  [flavour: string]: number; //flavour is the key and number is the value
}

const ratings: ChaiRating = {
  masala: 5,
  tea: 4,
  coffee: 3,
  chocolate: 2,
  vanilla: 1,
  strawberry: 0,
  mango: 0,
  pineapple: 0,
  orange: 0,
  apple: 0,
};

interface User2 {
  name: string;
}
interface User2 {
  age: number;
}

const user2: User2 = {
  name: "John",
  age: 20,
};

//extend interface

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {
  c: string;
}

//generic interface

