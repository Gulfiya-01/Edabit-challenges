import { describe, expect, test } from "vitest"; 
import countBoomerangs from "./task2";

describe("hard-problem2", () => {
	test.each([
		{ input: [9, 5, 9, 5, 1, 1, 1], expected: 2 },
		{ input: [5, 6, 6, 7, 6, 3, 9], expected: 1 },
		{ input: [4, 4, 4, 9, 9, 9, 9], expected: 0 },
		{ input: [5, 9, 5, 9, 5], expected: 3 },
		{ input: [4, 4, 4, 8, 4, 8, 4], expected: 3 },
		{ input: [2, 2, 2, 2, 2, 2, 3], expected: 0 },
		{ input: [2, 2, 2, 2, 3, 2, 3], expected: 2 },
		{ input: [1, 2, 1, 1, 1, 2, 1], expected: 2 },
		{ input: [5, 1, 1, 1, 1, 4, 1], expected: 1 },
		{ input: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2], expected: 3 },
		{ input: [1, 7, 1, 7, 1, 7, 1], expected: 5 },
		{ input: [5, 5, 5], expected: 0 },
	])(".countBoomerangs($input)", ({ input, expected }) => {
		expect(countBoomerangs(input)).toEqual(expected);
	  });
  });
  