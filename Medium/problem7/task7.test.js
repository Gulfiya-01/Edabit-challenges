import { describe, expect, test } from 'vitest';
import generation from './task7'; 

describe("medium-problem7", () => {
  test.each([
    { input: [-3, 'm'], expected: 'great grandfather' },
    { input: [1, 'f'], expected: 'daughter' },
    { input: [-3, 'f'], expected: 'great grandmother' },
    { input: [-2, 'm'], expected: 'grandfather' },
    { input: [-2, 'f'], expected: 'grandmother' },
    { input: [-1, 'm'], expected: 'father' },
    { input: [-1, 'f'], expected: 'mother' },
    { input: [0, 'f'], expected: 'me!' },
    { input: [1, 'm'], expected: 'son' },
    { input: [1, 'f'], expected: 'daughter' },
    { input: [2, 'm'], expected: 'grandson' },
    { input: [2, 'f'], expected: 'granddaughter' },
    { input: [3, 'm'], expected: 'great grandson' },
    { input: [3, 'f'], expected: 'great granddaughter' },
    { input: [0, 'm'], expected: 'me!' },
  ])(".generationValues($input)", ({ input, expected }) => {
    expect(generation(...input)).toBe(expected);
  });
});
