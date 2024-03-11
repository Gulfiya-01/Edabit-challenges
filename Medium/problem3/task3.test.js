import { describe, expect, test } from "vitest"; 
import redundant from "./task3";


describe("medium-problem3", () => {
  const f1 = redundant("apple");
  const f2 = redundant("pear");
  const f3 = redundant("");

  test("should return 'apple' when invoked", () => {
    expect(f1()).toBe("apple");
  });

  test("should return 'pear' when invoked", () => {
    expect(f2()).toBe("pear");
  });

  test("should return an empty string when invoked", () => {
    expect(f3()).toBe("");
  });
});