class Drink {
  #temperature = null;

  constructor(name, volume, price) {
    this.name = name;
    this.volume = volume;
    this.price = price;
  }

  getInfo() {
    return { name: this.name, volume: this.volume, price: this.price };
  }

  setTemp(temp) {
    this.#temperature = temp;
  }

  getTemp() {
    return this.#temperature;
  }

  #makeDrink() {
    if (this.getTemp() < 100) {
      this.setTemp(100);
      console.log("Напиток готов");
    }
  }

  serveDrink() {
    this.#makeDrink();
  }

}

class Tea extends Drink {
  constructor(name, volume, price, teaType) {
    super(name, volume, price);
    this.teaType = teaType;
  }

  getInfo() {
    return { ...super.getInfo(), teaType: this.teaType };
  }

}

class Coffee extends Drink {
  constructor(name, volume, price, beanType) {
    super(name, volume, price);
    this.beanType = beanType;
  }

  getInfo() {
    return { ...super.getInfo(), beanType: this.beanType };
  }

}

class Lemonade extends Drink {
  constructor(name, volume, price, beanType, carbonated) {
    super(name, volume, price);
    this.carbonated = carbonated;
  }

}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return { name: this.name, location: this.location }
  }

  orderDrink(drink) {
    drink.serveDrink();
  }

}

const coffee = new Coffee("americano", 200, 150, "arabica");
const tea = new Tea("Ahmad", 200, 100, "black");
const lemonade = new Lemonade("citrusMix", 300, 250, true);

const cafe = new Cafe("Волна", "Россия, г.Москва, ул.Ленина 65");

console.log(cafe.getInfo());

cafe.orderDrink(coffee);

console.log(coffee.getInfo());
console.log(tea.getInfo());
console.log(coffee.getTemp());