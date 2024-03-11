import { expect, test, vit } from 'vitest'; 
import getNotesDistribution from './task2';

const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
  key => actual[key] === expected[key]
);

const areEqual = (actual, expected, compare) => expected.every(
  (item, index) => compare(actual[index], item)
);

const testCases = [
  [['Jacek', [5, 4, 3, -1, 0]], ['Ewa', [3, 3, 3, 6]], ['Zygmunt', [1, 2, 3]]],
  [['Jacek', []], ['Ewa', []], ['Zygmunt', [6, 1, 2, 3]]],
  []
].map(
  set => ({
    actual: getNotesDistribution(
      set.map(([name, notes]) => ({ name, notes }))
    ),
    expected: set.map(([, notes]) => notes).reduce((result, next) => result.concat(next), []).filter(
      note => note > 0 && note < 6
    ).reduce(
      (result, next) => {
        result[next] = (result[next] || 0) + 1;
        return result;
      },
      {}
    )
  })
);

testCases.forEach(({ actual, expected }, index) => {
  test(`Test ${index + 1}: Result should be an array`, () => {
    expect(actual).toEqual(expected, `Test failed: ${JSON.stringify(actual)}`);
  });
});
