import { describe, expect, test } from 'vitest';
import concat from './task8'; 

describe('medium-problem8', () => {
  test.each([
    { input: [[1, 2, 3], [4, 5], [6, 7]], expected: [1, 2, 3, 4, 5, 6, 7] },
    { input: [[1], [2], [3], [4], [5], [6], [7]], expected: [1, 2, 3, 4, 5, 6, 7] },
    { input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },
    { input: [[4, 4, 4, 4, 4]], expected: [4, 4, 4, 4, 4] },
    { input: [['a'], ['b', 'c']], expected: ['a', 'b', 'c'] },
  ])(".concatValues($input)", ({input, expected }) => {
    expect(concat(...input)).toEqual(expected);
  });
});
