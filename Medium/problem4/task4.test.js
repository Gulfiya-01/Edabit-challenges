import { describe, expect, test } from "vitest"; 
import shiftToRight from "./task4";

describe("medium-problem4", () => {
  
  const opCheck = f => !`${f}`.match(RegExp('>>', 'gm'));

  describe('shiftToRight function', () => {
    test('should not use right shift operator (>>)', () => {
      expect(opCheck(shiftToRight)).toBe(true, "The use of right shift operator (>>) is prohibited!");
    });
  
    const numVector = [[80, 3], [-24, 2], [-5, 1], [38, 0], [192, 4], [4666, 6], [3777, 6], [1024, 5], [-512, 10]];
    const resVector = [10, -6, -3, 38, 12, 72, 59, 32, -1];
  
    for (let i in numVector) {
      test(`should return ${resVector[i]} for input ${JSON.stringify(numVector[i])}`, () => {
        expect(shiftToRight(...numVector[i])).toBe(resVector[i]);
      });
    }
  });
});