/**
 * TOPICS — Generics
 * -----------------
 * A generic is a type placeholder (often T, A, B). You write the function or
 * interface once; the caller fills in the real type. That keeps reuse without
 * falling back to `any`.
 *
 * What you practice here:
 * - Generic function: wrapeInArray<T>(item: T): T[]
 * - Two type parameters: pair<A, B>
 * - Generic interface: Box<T>, ApiPromise<T>
 *
 * EXAMPLE USES
 * - wrapeInArray(1) → [1] for a single-item cart
 * - wrapeInArray("Hello") → ["Hello"] for a tag list
 * - pair(1, "Hello") → [1, "Hello"] for id + label
 * - Box<number> → { content: 1 } for a typed wrapper
 * - ApiPromise<{ flavour: string }> → typed API response body
 */

// What I did: wrote a generic helper. T is whatever type the caller passes.
function wrapeInArray<T>(item: T): T[] {
  // What I did: put that one item into an array of the same type.
  return [item];
}

// What I did: passed a number; T became number, result is number[].
wrapeInArray(1);
// What I did: passed a string; T became string.
wrapeInArray("Hello");
// What I did: passed a boolean; T became boolean.
wrapeInArray(true);
// What I did: passed an object; T became { a: number; b: number }.
wrapeInArray({ a: 1, b: 2 });

// What I did: wrote a function with two placeholders, A and B, returning a tuple.
function pair<A, B>(a: A, b: B): [A, B] {
  // What I did: returned both values as a two-slot tuple.
  return [a, b];
}

// What I did: paired a number with a string → [number, string].
pair(1, "Hello");
// What I did: paired a boolean with an object.
pair(true, { a: 1, b: 2 });
// What I did: paired a string with a number array.
pair("Hello", [1, 2, 3]);
// What I did: paired a boolean with an object again (same pattern as above).
pair(true, { a: 1, b: 2 });

// What I did: defined a reusable box whose content type is chosen later (T).
interface Box<T> {
  // What I did: said the box always has a content field of type T.
  content: T;
}

// What I did: made a box that only holds a number.
const numberBox: Box<number> = { content: 1 };
// What I did: made a box that only holds a string.
const stringBox: Box<string> = { content: "Hello" };

// What I did: described an API result where `data` can be any shape (T).
interface ApiPromise<T> {
  // What I did: HTTP-style status code.
  status: number;
  // What I did: the payload; type depends on T.
  data: T;
  // What I did: optional error text if the request failed.
  error?: string;
}

// What I did: typed one success response whose data has a flavour string.
const res1: ApiPromise<{
  flavour: string;
}> = {
  // What I did: set status 200 (OK).
  status: 200,
  // What I did: set the payload to a masala flavour object.
  data: { flavour: "masala" },
};
