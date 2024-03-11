import sevenBoom from './task10'; 
import { describe,expect,test } from 'vitest';

describe("sevenBoom Function Tests", () => {
    test.each`
      inputArray                 | expectedOutput
      ${[2, 6, 7, 9, 3]}         | ${"Boom!"}
      ${[33, 68, 400, 5]}        | ${"there is no 7 in the array"}
      ${[86, 48, 100, 66]}       | ${"there is no 7 in the array"}
      ${[76, 55, 44, 32]}        | ${"Boom!"}
      ${[35, 4, 9, 37]}          | ${"Boom!"}
    `("returns $expectedOutput when given $inputArray", ({ inputArray, expectedOutput }) => {
      expect(sevenBoom(inputArray)).toEqual(expectedOutput);
    });
  });
  