import { describe, expect, test } from "vitest"; 
import possibleBonus from "./task1";

describe("medium-problem1", () => {
	test.each([
		{ input: [3, 7], expected: true },
		{ input: [0, 6], expected: true },
		{ input: [1, 6], expected: true },
		{ input: [2, 6], expected: true },
		{ input: [3, 6], expected: true },
		{ input: [4, 6], expected: true },
		{ input: [5, 6], expected: true },
		{ input: [6, 6], expected: false },
		{ input: [7, 6], expected: false },
		{ input: [23, 27], expected: true },
		{ input: [1, 9], expected: false },
		{ input: [5, 3], expected: false },
	])(".possibleBonus($input)", ({ input, expected }) => {
		expect(possibleBonus(...input)).toBe(expected);
	  });
  });
  