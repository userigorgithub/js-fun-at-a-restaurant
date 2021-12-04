class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;

  }
  greetCustomer(custName) {

    return `Hello, ${custName}!`
  }
}

module.exports = Chef;
