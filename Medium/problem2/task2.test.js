import { describe, expect, test } from "vitest"; 
import countTrue from "./task2";

describe("medium-problem2", () => {
  test.each([
    { input: [true, false, false, true, false], expected: 2},
    { input: [false, false, false, false], expected: 0},
    { input: [false, false, true, true, false, false, false, true, true, true, true, false, true, true, false], expected: 8 },
    { input: [true, false, true, true, false, false, false, false, false], expected: 3},
    { input: [false, true, true, false, true, true, false, true, false, true, false, true, false, true, false], expected: 8},
    { input: [true, false, true, true, true, false, true, true, false, false], expected: 6},
    { input: [false, false, false, false, true, false, true, false, true, false, false], expected: 3 },
    { input: [true, false, false, false, true, false, false, true, false, false, false], expected: 3 },
    { input: [true, true, false, true, false, false, false, false, true, false], expected: 4},
    { input: [true, false, true, true, false, true, true, true, true, false, true, false, true, false], expected: 9 },
    { input:[true, false, true, true, true, true, false, true, true, false, true, false, false, false, false], expected: 8},
    { input: [true, true, false, false, false, false, true, false, true, true, false, true], expected: 6},
  ])(".shouldCountTrueValues($input)", ({ input, expected }) => {
    expect(countTrue(input)).toBe(expected);
  });
});
