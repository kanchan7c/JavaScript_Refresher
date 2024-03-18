# JS and classes

## OOPS

- Object is a collection of properties and methods

## why OOP

- reusability of code

## parts of OOP

- Object literal
- Constructor fn
- Classes
- Instances (new, this)

## 4 pillars of OOP

- ## Encapsulation
  Encapsulation means bundling the data and the methods that operate on the data into a single unit or object. This helps in hiding the internal state of an object and only exposing necessary functionalities.

```
// Encapsulation example
function Car(make, model) {
  let speed = 0; // private variable

  this.make = make;
  this.model = model;

  this.accelerate = function(increment) {
    speed += increment;
  };

  this.decelerate = function(decrement) {
    speed -= decrement;
  };

  this.getSpeed = function() {
    return speed;
  };
}

const myCar = new Car('Toyota', 'Camry');
myCar.accelerate(50);
console.log(myCar.getSpeed()); // Output: 50

```

Explanation:

- Encapsulation is achieved by bundling the `speed` variable and the methods (`accelerate`, `decelerate`, `getSpeed`) within the `Car` constructor function.
- The `speed` variable is private to the `Car` object, meaning it's not directly accessible from outside the `Car` function.
- The methods `accelerate` and `decelerate` modify the speed variable, and `getSpeed` retrieves the value of `speed`.
- Outside code interacts with the `Car` object through its public interface (`make`, `model`, `accelerate`, `decelerate`, `getSpeed`).

- ## Inheritance
  Inheritance allows objects to inherit properties and methods from other objects. This promotes code reusability and allows for creating a hierarchy of objects.

```
// Inheritance example
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

function Car(make, model, color) {
  Vehicle.call(this, make, model);
  this.color = color;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const myCar = new Car('Toyota', 'Camry', 'red');
console.log(myCar.make); // Output: Toyota

```

Explanation:

- Inheritance is demonstrated by the `Car` constructor function inheriting properties and methods from the `Vehicle` constructor function.
- The `Car` function calls the `Vehicle` function using `Vehicle.call(this, make, model)` to inherit the `make` and `model` properties.
- By setting `Car.prototype = Object.create(Vehicle.prototype)`, instances of `Car` will inherit methods defined in `Vehicle.prototype`.
- `myCar` is an instance of `Car` and can access properties inherited from `Vehicle`, such as `make`, along with its own property `color`.

- ## Abstraction
  Abstraction is the concept of hiding complex implementation details and showing only the necessary features of an object.

```
// Abstraction example
function Shape() {
  this.calculateArea = function() {
    throw new Error('Method calculateArea must be implemented');
  }
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.calculateArea = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // Output: 78.53981633974483

```

Explanation:

- Abstraction is achieved by defining a `Shape` class with a method `calculateArea` that must be implemented by its subclasses.
- The `Shape` class itself is abstract and doesn't provide an implementation for `calculateArea`, instead, it throws an error if called directly.
- `Circle` is a subclass of `Shape` and provides its own implementation of `calculateArea`, thus fulfilling the abstraction contract.
- Users interact with the concrete subclass `Circle` without needing to know the details of how `calculateArea` is implemented in the superclass `Shape`.

- ## Polymorphism
  Polymorphism means the ability to use the same method or property in different contexts. In JavaScript, this is often achieved by method overriding.

```
// Polymorphism example
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  return 'Animal sound';
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
  return 'Woof';
}

const myDog = new Dog('Buddy');
console.log(myDog.makeSound()); // Output: Woof

```

Explanation:

- Polymorphism is showcased by the `Dog` object having a `makeSound` method that overrides the same method defined in its parent class `Animal`.
- Both `Animal` and `Dog` objects have a `makeSound` method, but `Dog` provides its own implementation, allowing it to produce a different sound.
- Despite the method having the same name in both classes, the behavior differs based on the context of the object calling it (`Animal` or `Dog`).
