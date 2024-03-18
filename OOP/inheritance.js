// Inheritance

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, color, year) {
    super(make, model); // constructor method of parent class
    this.color = color;
    this.year = year;
  }

  // static methods can't be inherited or called outside the class
  static createID() {
    return '10292D2';
  }
}

const car1 = new Car('Toyota', 'Etios', 'White', 2017);

console.log(car1); // Car { make: 'Toyota', model: 'Etios', color: 'White', year: 2017 }
