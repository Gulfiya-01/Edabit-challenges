import { describe, expect, test } from 'vitest';
import  Circle from './task9'; 

function round(number) {
  var factor = Math.pow(10, 5);
  return Math.round(number * factor) / factor;
}
let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
describe('medium-problem9', () => {
  test.each([
    { radius: 20, area: 1256.63706, perimeter: 125.66371 },
    { radius: 2, area: 12.56637, perimeter: 12.56637 },
    { radius: 4.4, area: 60.82123, perimeter: 27.64602 },
    { radius: randomInt, area: round(Math.PI*Math.pow(randomInt,2)), perimeter: round(2*Math.PI*randomInt) }, 
  ])('.getArea and .getPerimeter for Circle with radius ($radius)', ({ radius, area, perimeter }) => {
    let circo = new Circle(radius);
    expect(round(circo.getArea())).toEqual(area);
    expect(round(circo.getPerimeter())).toEqual(perimeter);
  });
});
