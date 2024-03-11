import { describe, expect, test } from "vitest";
import isHappy from "./task4"; // Replace with the actual file path or module name

let [numVector, resVector] = [
  [1, 10, 44, 67, 89, 139, 1327, 2871, 3970, 5209, 6329, 8888, 9331, 10000],
  [true, true, true, false, false, true, false, false, true, false, true, false, true, true]
]

describe("veryHard problem4", () => {
  test.each(numVector.map((num, index) => [num, resVector[index]]))(
    ".isHappy(%i) should be %s",
    (num, expected) => {
      expect(isHappy(num)).toEqual(expected);
    }
  );
});

  