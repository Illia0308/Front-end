class Order {
  constructor(price, city, type) {
    this.id = Math.random().toFixed(4);
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type;
  }
  checkPrice() {
    return this.price > 1000;
  }
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }
  isValidType() {
    return this.type === "Buy" || this.type === "Sell";
  }
}
const order1 = new Order(1100, "Alaska", "Buy");
console.log(order1.confirmOrder());
let order2 = new Order(900, "Hawai", "Sell");
console.log(order2);
