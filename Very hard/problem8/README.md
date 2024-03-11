# Souvenir Shop

On a vacation abroad, you see a souvenir shop and decide to head inside. There are snow globes, postcards, fridge magnets and all the other goodies you'd typically find.

Given an array of prices of things in the store and the amount of money you have, return the maximum number of items you could possibly buy.
Examples
```js

maxItems(["$1", "$1", "$2"], "$3") ➞ 2

maxItems(["$10", "$7", "$2", "$60"], "$20") ➞ 3

maxItems(["$15", "$5", "$30", "$30", "$10"], "$2") ➞ "Not enough funds!"
```
### Notes

  * If you cannot afford anything, return "Not enough funds!"
  * Prices will be whole numbers.