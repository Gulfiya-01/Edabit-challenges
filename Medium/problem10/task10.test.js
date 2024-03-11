import { describe, expect, test } from 'vitest';
import  arrayOfMultiples from './task10'; 

describe('medium-problem10', () => {
  test.each([
    { input: [7, 5], expected: [7, 14, 21, 28, 35] },
    { input: [12, 10], expected:  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] },
    { input: [17, 7], expected: [17, 34, 51, 68, 85, 102, 119]},
    { input: [630, 14], expected:[630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820] },
    { input: [140, 3], expected: [140, 280, 420] },
    { input: [7, 8], expected: [7, 14, 21, 28, 35, 42, 49, 56]},
    { input: [11, 21], expected: [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231] },
  ])(".arrayOfMultiples($input)", ({input, expected }) => {
    expect(arrayOfMultiples(...input)).toEqual(expected);
  });
});

