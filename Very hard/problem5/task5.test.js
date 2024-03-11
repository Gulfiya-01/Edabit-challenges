import { describe, expect, test } from 'vitest';
import CoffeeShop from './task5'; 

describe('CoffeeShop Tests', () => {
  const [menuA, menuB, menuC] = [
      [
        ["orange juice", "drink", 2.13], ["lemonade", "drink", 0.85], ["cranberry juice", "drink", 3.36],
        ["pineapple juice", "drink", 1.89], ["lemon iced tea", "drink", 1.28], ["apple iced tea", "drink", 1.28],
        ["vanilla chai latte", "drink", 2.48], ["hot chocolate", "drink", 0.99], ["iced coffee", "drink", 1.12],
        ["tuna sandwich", "food", 0.95], ["ham and cheese sandwich", "food", 1.35], ["bacon and egg", "food", 1.15],
        ["steak", "food", 3.28], ["hamburger", "food", 1.05], ["cinnamon roll", "food", 1.05]
      ],
      [
        ["turkey english muffin", "food", 7.99], ["avocado toast", "food", 5.05], ["chocolate croissant", "food", 3.00],
        ["espresso", "drink", 2.99], ["iced caramel macchiato", "drink", 4.50], ["cortado", "drink", 4.00],
        ["nitro cold brew tester", "drink", 8.00]
      ],
      [
        ["cheeseburger with fries", "food", 5.44],
        ["cinnamon roll", "food", 4.99],
        ["hot chocolate", "drink", 2.99],
        ["lemon tea", "drink", 2.50],
        ["iced coffee", "drink", 3.00],
        ["vanilla chai latte", "drink", 4.00]
      ]
    ].reduce((a, r) => [...a, [...r.map(([n, t, p]) => ({item: n, type: t, price: p}))]], []),


  [shopA, shopB, shopC] = [
    new CoffeeShop('*** Deep Into Coffee ***', menuA, []),
    new CoffeeShop('*** Xavier\'s ***', menuB, []),
    new CoffeeShop('*** Tesha\'s ***', menuC, [])
  ];

  test('Shop A Orders and Fulfillment', () => {
    expect(shopA.addOrder('cinnamon roll')).toEqual('Order added!');
    expect(shopA.addOrder('iced coffee')).toEqual('Order added!');
    expect(shopA.listOrders()).toEqual(['cinnamon roll', 'iced coffee']);
    expect(shopA.dueAmount()).toEqual("2.17");
    expect(shopA.fulfillOrder()).toEqual('The cinnamon roll is ready!');
    expect(shopA.fulfillOrder()).toEqual('The iced coffee is ready!');
    expect(shopA.fulfillOrder()).toEqual('All orders have been fulfilled!');
    expect(shopA.addOrder('hot cocoa')).toEqual('This item is currently unavailable!');
    expect(shopA.addOrder('iced tea')).toEqual('This item is currently unavailable!');
    expect(shopA.listOrders()).toEqual([]);
    expect(shopA.dueAmount()).toEqual("0.00");
    expect(shopA.cheapestItem()).toEqual('lemonade');
    expect(shopA.drinksOnly()).toEqual([
      'orange juice', 'lemonade', 'cranberry juice', 'pineapple juice', 'lemon iced tea', 'apple iced tea',
      'vanilla chai latte', 'hot chocolate', 'iced coffee'
    ]);
    expect(shopA.foodOnly()).toEqual([
      'tuna sandwich', 'ham and cheese sandwich', 'bacon and egg', 'steak', 'hamburger', 'cinnamon roll'
    ]);
    
  });
  test('Shop B Orders and Fulfillment', () => {
    expect(shopB.addOrder('cortado')).toEqual('Order added!');
    expect(shopB.fulfillOrder()).toEqual('The cortado is ready!');
    expect(shopB.fulfillOrder()).toEqual('All orders have been fulfilled!');
    expect(shopB.addOrder('avocado toast')).toEqual('Order added!');
    expect(shopB.listOrders()).toEqual(['avocado toast']);
    expect(shopB.dueAmount()).toEqual("5.05");
    expect(shopB.cheapestItem()).toEqual('espresso');
    expect(shopB.drinksOnly()).toEqual(["espresso", "iced caramel macchiato", "cortado", "nitro cold brew tester"]);
    expect(shopB.foodOnly()).toEqual(["turkey english muffin", "avocado toast", "chocolate croissant"]);
  });

  test('Shop C Orders and Fulfillment', () => {
    expect(shopC.addOrder('hot cocoa')).toEqual('This item is currently unavailable!');
    expect(shopC.dueAmount()).toEqual("0.00");
    expect(shopC.addOrder('cheeseburger with fries')).toEqual('Order added!');
    expect(shopC.addOrder('lemon tea')).toEqual('Order added!');
    expect(shopC.addOrder('iced coffee')).toEqual('Order added!');
    expect(shopC.listOrders()).toEqual(["cheeseburger with fries", "lemon tea", "iced coffee"]);
    expect(shopC.dueAmount()).toEqual("10.94");
    expect(shopC.fulfillOrder()).toEqual('The cheeseburger with fries is ready!');
    expect(shopC.fulfillOrder()).toEqual('The lemon tea is ready!');
    expect(shopC.fulfillOrder()).toEqual('The iced coffee is ready!');
    expect(shopC.listOrders()).toEqual([]);
    expect(shopC.cheapestItem()).toEqual('lemon tea');
    expect(shopC.drinksOnly()).toEqual(["hot chocolate", "lemon tea", "iced coffee", "vanilla chai latte"]);
    expect(shopC.foodOnly()).toEqual(["cheeseburger with fries", "cinnamon roll"]);
  });
});

