import { describe, test, expect } from "vitest";
import depth from "./task9";

describe("very Hard-problem9", () => {
	const testCases = [
		{ input: [1, 2, 3, 4], expected: 1 },
		{ input: [1, [2, 3, 4]], expected: 2 },
		{ input: [1, [2, [3, 4]]], expected: 3 },
		{ input: [1, [2, [3, [4]]]], expected: 4 },
		{ input: [1, [2, [3, [4]]], 4], expected: 4},
		{ input: [1, [2], 3, [4], 5, [6]], expected: 2 },
		{ input: [1, 2, 3, 4, [[5]], [6], 7], expected: 3 },
	  ];

	
	testCases.forEach(({ input, expected }, index) => {
		test(`Test Case ${index + 1}`, () => {
		  const result = depth(input, input[input.length - 1]);
		  return result === expected;
		});
	  });
	})
  


