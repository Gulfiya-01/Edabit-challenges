import { describe, expect, test } from "vitest"; 
import derivative from "./task6";


describe("medium-problem6", () => {
  test.each([
    { input: [1, 4], expected: 1},
    { input: [3, -2], expected: 12},
    { input: [4, -3], expected: -108},
    { input: [9, -5], expected: 3515625},
    { input: [1254, 0], expected: 0},
    { input: [-2, 10], expected: -0.002},

  ])(".derivativeValues($input)", ({ input, expected }) => {
    expect(derivative(...input)).toBe(expected);
  });
});
