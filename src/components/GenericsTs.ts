// generic

//basic generic
function wrapeInArray<T>(item: T): T[] {
  return [item];
}

// using generic we can pass any type of data to the function and it will return an array of that type
wrapeInArray(1);
wrapeInArray("Hello");
wrapeInArray(true);
wrapeInArray({ a: 1, b: 2 });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair(1, "Hello");
pair(true, { a: 1, b: 2 });
pair("Hello", [1, 2, 3]);
pair(true, { a: 1, b: 2 });

//generice interface

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 1 };
const stringBox: Box<string> = { content: "Hello" };
 
interface ApiPromise<T> {
  status: number;
  data: T;
  error?: string;
}

const res1: ApiPromise<{
  flavour: string;
}> = {
  status: 200,
  data: { flavour: "masala" },
};
