class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}


class SuperCar extends Car {
    constructor(name, year, power) {
        super(name, year);
        this.power = power;
    }

    tax() { return this.power * 250; }
}



let myCar = new Car("Cadillac", 1959);
let mySuperCar = new SuperCar("Brabus", 2021, 800);

console.log(myCar.year);
console.log(mySuperCar.tax())
