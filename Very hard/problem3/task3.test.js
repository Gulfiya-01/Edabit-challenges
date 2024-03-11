import { expect, test, describe } from 'vitest'; 
import doesTriangleFit from './task3';

describe("very Hard-problem3", () => {
  test.each([
    { brick: [1, 1, 1], hole: [1, 1, 1], expected: true, description: "Same triangle" },
    { brick: [1, 1, 1], hole: [2, 2, 2], expected: true, description: "Smaller triangle" },
    { brick: [1, 6, 8], hole: [1, 6, 8], expected: false, description: "Not a triangle" },
    { brick: [12, 63, 42],hole: [1, 6, 8], expected: false, description: "Too small hole" },
    { brick: [3, 6, 8], hole: [23, 63, 42], expected: true, description: "Hole is too big" },
    { brick: [3, 6, 8], hole: [1, 10, 8], expected: false, description: "Impossible hole" },
  ])(".doesTriangleFit %s", ({ brick, hole, expected, description }) => {
    expect(doesTriangleFit(brick, hole)).toEqual(expected, description);
  });
});

  