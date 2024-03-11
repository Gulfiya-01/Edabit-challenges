import { describe, test, expect } from "vitest";
import sumsPowersTwo from "./task10"; 

let testData = [
  { input: 1, expected: [1] },
  { input: 5, expected: [1, 4] },
  { input: 7, expected: [1, 2, 4] },
  { input: 8, expected: [8] },
  { input: 10, expected: [2, 8] },
  { input: 21, expected: [1, 4, 16] },
  { input: 53, expected: [1, 4, 16, 32] },
  { input: 63, expected: [1, 2, 4, 8, 16, 32] },
  { input: 99, expected: [1, 2, 32, 64] },
  { input: 100, expected: [4, 32, 64] },
  { input: 556846320, expected: [16, 32, 64, 128, 1024, 2048, 16384, 32768, 1048576, 2097152, 16777216, 536870912] },
  { input: 509104470, expected: [2, 4, 16, 64, 256, 4096, 16384, 524288, 1048576, 4194304, 33554432, 67108864, 134217728, 268435456] },
  { input: 929640411, expected: [1, 2, 8, 16, 64, 128, 256, 512, 1024, 2048, 8192, 65536, 524288, 2097152, 4194304, 16777216, 33554432, 67108864, 268435456, 536870912] },
  { input: 341971175, expected: [1, 2, 4, 32, 64, 128, 4096, 131072, 2097152, 4194304, 67108864, 268435456] },
  { input: 329418410, expected: [2, 8, 32, 128, 512, 1024, 32768, 131072, 2097152, 8388608, 16777216, 33554432, 268435456] }
];

describe("sumsPowersTwo Test", () => {
  testData.forEach(({ input, expected }) => {
    test(`Input ${input} should return ${expected}`, () => {
      expect(sumsPowersTwo(input)).toEqual(expected);
    });
  });
});
