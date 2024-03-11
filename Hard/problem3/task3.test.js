import { describe, expect, test } from "vitest"; 
import getLength from "./task3";

describe("hard-problem3", () => {
	test.each([
		{ input: [1, [2,3]], expected: 3 },
		{ input: [1, [2, [3, 4]]], expected: 4 },
		{ input: [1, [2, [3, [4, [5, 6]]]]], expected: 6 },
		{ input: [1, 7, 8], expected: 3 },
		{ input: [2], expected: 1 },
		{ input: [2, [3], 4, [7]], expected: 4 },
		{ input: [2, [3, [5, 7]], 4, [7]], expected: 6 },
		{ input: [2, [3, [4, [5]]], [9]], expected: 5 },
		{ input: [], expected: 0 },
	])(".getLength($input)", ({ input, expected }) => {
		expect(getLength(input)).toEqual(expected);
	  });
  });
  