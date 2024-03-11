import { describe, test, expect } from "vitest";
import findFrequent from "./task7";
describe("very Hard-problem7", () => {
	test.each([
		{ input: [3, 7, 3], expected: 3 },
		{ input:[null, "hello", true, null],expected:null},
		{ input: [false, "up", "down", "left", "right", true, false], expected:  false},
		{ input: [undefined], expected:  undefined},
		{ input: [1, 2, -3, true, false, undefined, "yes", "yeah", "yup", 2], expected: 2},
		{ input:["Batman", "Superman", "Batman"], expected: "Batman"}
		
	])
	(".findFrequent Test($input)", ({input, expected }) => {
		expect(findFrequent(input)).toEqual(expected);
	  });
  });


