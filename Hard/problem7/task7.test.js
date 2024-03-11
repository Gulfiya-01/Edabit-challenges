import { describe, expect, test } from "vitest"; 
import Circle from "./task7";

const c1 = new Circle(3);
const c2 = new Circle(5);

describe('Circle properties and methods', () => {
  test.each`
    radius | expectedDiameter | expectedC    | expectedA
    ${3}   | ${6}             | ${18.85}      | ${28.27}
    ${5}   | ${10}            | ${31.42}      | ${78.54}
  `('with radius $radius', ({ radius, expectedDiameter, expectedC, expectedA }) => {
    const circle = new Circle(radius);

    expect(circle.radius).toEqual(radius);
    expect(circle.diameter).toEqual(expectedDiameter);
    expect(circle.getC()).toEqual(expectedC);
    expect(circle.getA()).toEqual(expectedA);
  });
});
