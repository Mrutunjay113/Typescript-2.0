function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `Chai Order: ${kind} cups of chai`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

console.log(getChai("sugar"));
console.log(getChai(10));
console.log(serveChai("sugar"));

function orderChai(size: "small" | "medium" | "large") {
  if (size === "small") {
    return `Serving small chai`;
  }
  if (size === "medium") {
    return `Serving medium chai`;
  }
  return `Serving ${size} chai`;
}

console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai("large"));

class KulhadChai {
  server() {
    return `Serving Kulhad chai`;
  }
}
class CuttingChai {
  server() {
    return `Serving Cutting chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.server();
  }
  return chai.server();
}

console.log(serve(new KulhadChai()));
console.log(serve(new CuttingChai()));

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving ${item} chai`;
}

console.log(serverOrder({ type: "sugar", sugar: 10 }));
console.log(serverOrder("sugar"));

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Making ${order.spiceLevel} masala chai`;
    case "ginger":
      return `Making ${order.amount} ginger chai`;
    case "elaichi":
      return `Making ${order.aroma} elaichi chai`;
    default:
      return `Making default chai`;
  }
}

function bew(order: MasalaChai | GingerChai | ElaichiChai) {
  if ("spiceLevel" in order) {
    return `Making ${order.spiceLevel} masala chai`;
  }
  if ("amount" in order) {
    return `Making ${order.amount} ginger chai`;
  }
  if ("aroma" in order) {
    return `Making ${order.aroma} elaichi chai`;
  }
  return `Making default chai`;
}
