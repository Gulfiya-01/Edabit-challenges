import { describe, test, expect } from "vitest";
import nearestChapter from "./task6";
describe("very Hard-problem6", () => {
	test.each([
		{ input: [{"Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37}, 10], expected: "Chapter 2" },
		{ input: [{"New Beginnings": 1, "Strange Developments": 62, "The End?": 194, "The True Ending": 460}, 200],expected:"The End?"},
		{ input: [{"Chapter 1a": 1, "Chapter 1b": 5}, 3], expected:  "Chapter 1b"},
		{ input: [{"Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100}, 75], expected: "Chapter 1d"},
		{ input: [{"Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100, "Chapter 1e": 200}, 150], expected:"Chapter 1e"},
		{ input: [{"Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100, "Chapter 1e": 200}, 74], expected:"Chapter 1c"},
		{ input: [{"Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100, "Chapter 1e": 200, "Chapter 1f": 400}, 300], expected:  "Chapter 1f"},
		{ input:     [{"Chapter Four": 46, "Chapter Five": 54}, 50], expected: "Chapter Five"}

		
	])(".Nearest Chapter Test($input)", ({input, expected }) => {
		expect(nearestChapter(...input)).toEqual(expected);
	  });
  });


