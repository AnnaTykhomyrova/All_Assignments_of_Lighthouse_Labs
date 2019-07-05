class Pizza {

  constructor() {

    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }


  getSize() {
    return this._size;
  }
}

const pizza = new Pizza();
pizza.price;      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)