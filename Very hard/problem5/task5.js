class CoffeeShop {

        constructor(name, menu, orders) {
          this.name = name;
          this.menu = menu.map(({ item, type, price }) => ({ item, type, price }));
          this.orders = orders;
        }
      
     addOrder(name) {
          const menuItem = this.menu.find((menuItem) => menuItem.item === name);
  
          if (menuItem) {
              this.orders.push(menuItem);
              return "Order added!";
          } else {
              return "This item is currently unavailable!";
          }
      }
  
      fulfillOrder() {
          if (this.orders.length !== 0) {
              const orderItem = this.orders.shift();
              return `The ${orderItem.item} is ready!`;
          } else {
              return "All orders have been fulfilled!";
          }
      }
  
      listOrders() {
          return this.orders.map((orderItem) => orderItem.item);
      }
  
      dueAmount() {
        const amount =  this.orders.reduce((total, orderItem) => total + orderItem.price, 0).toFixed(2);
        return amount;
      }
      
      cheapestItem() {
        const minPrice = Math.min(...this.menu.map((menuItem) => menuItem.price));
    
        const cheapestItem = this.menu
          .filter((menuItem) => menuItem.price === minPrice)
          .map((menuItem) => menuItem.item)
          .join(', ');
    
        return cheapestItem;
      
    }
    

      drinksOnly() {
          const menuDrinks = this.menu.filter((menuItem) => menuItem.type === "drink").map((menuItem) => menuItem.item);
  
          return menuDrinks.length > 0 ? menuDrinks : "No drinks available in the menu.";
      }
      foodOnly() {
          const menuFoods = this.menu.filter((menuItem) => menuItem.type === "food").map((menuItem) => menuItem.item);
  
          return menuFoods.length > 0 ? menuFoods : "No drinks available in the menu.";
      }
  }

  export default CoffeeShop;
  