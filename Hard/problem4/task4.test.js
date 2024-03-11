import { describe, expect, test } from "vitest"; 
import isSmooth from "./task4";

describe("hard-problem4", () => {
	test.each([
		{ input: "Marta appreciated deep perpendicular right trapezoids", expected: true },
		{ input: "Someone is outside the doorway", expected: false },
		{ input: "She eats super righteously", expected: true },
		{ input: "Ben naps so often", expected: true },
		{ input: "Cute triangles are cute", expected: false },
		{ input: "Mad dislikes sharp pointy yoyos", expected: true },
		{ input: "Rita asks Sam mean numbered dilemmas", expected: true },
		{ input: "Marigold daffodils streaming happily.", expected: false },
		{ input: "Simply wonderful laughing.", expected: false },
	])(".isSmooth($input)", ({ input, expected }) => {
		expect(isSmooth(input)).toBe(expected);
	  });
  });
  