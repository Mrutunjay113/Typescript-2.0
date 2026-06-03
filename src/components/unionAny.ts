let subs: number | string = 10;

let apiRequestStatus: "pending" | "success" | "error" = "pending";

let airLineSeat: "window" | "aisle" | "middle" = "window";

const orders = ["12", "20", "30", "40", "50"];

let currentOrder: string | undefined ;

for (let order of orders) {
  if (order === "30") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
