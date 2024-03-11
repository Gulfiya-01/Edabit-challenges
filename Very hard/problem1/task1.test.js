import { describe, expect, test } from "vitest"; 
import overTime from "./task1";

describe("very Hard-problem1", () => {
	test.each([
		{ input: [9, 17, 30, 1.5], expected: "$240.00" },
		{ input: [9, 18, 40, 2], expected:'$400.00'},
		{ input: [13, 20, 32.5, 2], expected: "$325.00"},
		{ input: [9, 13, 25, 1.5], expected:  "$100.00"},
		{ input: [11.5, 19, 40, 1.8], expected:"$364.00" },
		{ input: [10, 17, 30, 1.5], expected:"$210.00"},
		{ input: [10.5, 17, 32.25, 1.5], expected: "$209.63"},
		{ input: [16, 18, 30, 1.8], expected: "$84.00"},
		{ input: [18, 20, 32.5, 2], expected:  "$130.00" },
		{ input: [13.25, 15, 30, 1.5], expected:  "$52.50" },
		{ input: [13, 21, 38.6, 1.8], expected:"$432.32" },
		
	])(".overTime($input)", ({ input, expected }) => {
		expect(overTime(input)).toEqual(expected);
	  });
  });
  