import { describe, expect, test } from "vitest"; 
import towerHanoi from "./task1";

describe("hard-problem1", () => {
	test.each([
		{ input: [3], expected: 7 },
		{ input: [5], expected: 31 },
		{ input: [8], expected: 255 },
		{ input: [19], expected: 524287},
		{ input: [9], expected: 511},
		{ input: [13], expected: 8191},
		{ input: [0], expected: 0 },
	])(".towerHanoi($input)", ({ input, expected }) => {
		expect(towerHanoi(input)).toBe(expected);
	  });
  });
  