import { describe, expect, test } from "vitest"; 
import isDisarium from "./task5";

let [numVector, resVector] = [
	[6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
	[true, false, true, false, false, true, true, false, false, true, true, true]
  ]
	
  describe("hard-problem5", () => {
		for (let i = 0; i < numVector.length; i++) {
		  const num = numVector[i];
		  const expected = resVector[i];
	  
		  test(`returns ${expected} for input ${num}`, () => {
			expect(isDisarium(num)).toBe(expected);
		  });
		}
	  });

  