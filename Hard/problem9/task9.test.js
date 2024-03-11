import Smoothie from './task9'; 
import { expect,test } from 'vitest';

const smoothieTestData = [
  [["Banana"], "$0.50", "$1.25", "Banana Smoothie"],
  [["Raspberries", "Strawberries", "Blueberries"], "$3.50", "$8.75", "Blueberry Raspberry Strawberry Fusion"],
  [["Mango", "Apple", "Pineapple"], "$7.75", "$19.38", "Apple Mango Pineapple Fusion"],
  [["Pineapple", "Strawberries", "Blueberries", "Mango"], "$8.50", "$21.25", "Blueberry Mango Pineapple Strawberry Fusion"],
  [["Blueberries"], "$1.00", "$2.50", "Blueberry Smoothie"]
];


test.each(smoothieTestData)(
  "Smoothie with ingredients %s, have cost %s, and price %s and name %s",
  (ingredients, expectedCost, expectedPrice, expectedName) => {
    const smoothie = new Smoothie(ingredients);

    expect(smoothie.ingredients).toBe(ingredients);
    expect(smoothie.getCost()).toEqual(expectedCost);
    expect(smoothie.getPrice()).toEqual(expectedPrice);
    expect(smoothie.getName()).toEqual(expectedName);
  }
);
