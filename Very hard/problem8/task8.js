function maxItems(prices, budget) {
    let count = 0;
    let sum = 0;
    let budgetNum = parseInt(budget.replace("$", ""), 10);
  
    prices.sort((a, b) => parseInt(a.replace("$", ""), 10) - parseInt(b.replace("$", ""), 10));
  
    for (let i = 0; i < prices.length; i++) {
        
      if (sum + parseInt(prices[i].replace("$", ""), 10) <= budgetNum) {
        sum += parseInt(prices[i].replace("$", ""), 10);
        count++;
      }
    }
      if (count==0){
          return "Not enough funds!"
      }
     else  return count;
  }

export default maxItems;