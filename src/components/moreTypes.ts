// forceful type assertion

let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{ "name": "The Great Gatsby" }';

let bookObject: Book = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3, 4, 5];

value.toUpperCase();

let newValue: unknown;
newValue = "chai";
newValue = 10;
newValue = true;
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("An error occurred");
  }
}

const data: unknown = "chai is good";
const strData: string = data as string;
console.log(strData);

type Role = "admin" | "user" | "guest";

function redirectBasesOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin page");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user page");
    return;
  }
  console.log("Redirecting to guest page");
  return;
}
