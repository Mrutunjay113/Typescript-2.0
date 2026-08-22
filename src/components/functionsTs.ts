// Function Types are used to describe the type of a function signature
// The type of a function is the type of the return value and the type of the arguments

function makeChai2(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai2("Masala", 2);

function getChaiPrice(): number {
  return 10;
}

//
function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("chai is ready");
}

// optional parameters

function orderChai2(type?: string) {
  console.log("chai order");
}
function orderChai3(type: string = "Masala") {
  console.log(`chai order ${type}`);
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "medium" | "large";
}): number {
  return order.sugar + 10;
}
