import { describe, expect, test } from "vitest"; 
import mostExpensive from "./task6";

const testCases = [
	{
	  input: {'Diamond Earrings': 980, 'Gold Watch': 250, 'Pearl Necklace': 4650},
	  expected: "The most expensive one is the Pearl Necklace"
	},
	{
	  input: {'Silver Bracelet': 280,'Gemstone Earrings': 180, 'Diamond Ring': 3500},
	  expected: "The most expensive one is the Diamond Ring"
	},
	{
	  input: {'Simple Gold Ring': 310, 'Silver Anklet': 110, 'Crystal Bracelet': 190},
	  expected: "The most expensive one is the Simple Gold Ring"
	}
  ];
  
  
  describe("hard-problem6", () => {
	test.each(testCases)('.mostExpensive($input)', ({ input, expected }) => {
	  expect(mostExpensive(input)).toBe(expected);
	});
  });