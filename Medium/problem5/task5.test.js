import { describe, expect, test } from "vitest"; 
import perimeter from "./task5";


describe("medium-problem5", () => {
  test.each([
    { input: ["s", 1], expected: 4},
    { input: ["s", 4], expected: 16},
    { input: ["s", 9], expected: 36},
    { input: ["s", 13], expected: 52},
    { input: ["s", 30], expected: 120},
    { input: ["c", 1], expected: 6.28},
    { input: ["c", 4], expected: 25.12},
    { input: ["c", 9], expected: 56.52 },
    { input: ["c", 13], expected: 81.64},
    { input: ["c", 30], expected: 188.4},
  ])(".perimetrValues($input)", ({ input, expected }) => {
    expect(perimeter(...input)).toBe(expected);
  });
});