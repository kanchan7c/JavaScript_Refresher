// Prototype is a empty object that is available with everything in JS
// It lets users use methods that is available throughout the chain

// We can create our own methods using prototype
// Example

// Our function is

function myFun(name, number) {
  this.name = name;
  this.number = number;
}

myFun.prototype.increment = function () {
  this.number++;
};

myFun.prototype.printFn = function () {
  console.log(this.number++);
};

// we need to use new keyword to link the proto methods we created for our function

const myFunOne = new myFun('One', 1);
const myFunTwo = new myFun('Two', 2);

myFunOne.increment();
myFunOne.printFn();

myFunTwo.increment();
myFunTwo.printFn();

// When new keyword is used, it does the following this behind the scene
// 1. Creates a new instance of our function
// 2. Links the prototype methods
// 3. Creates and calls a constructor
// 4. Return values of the Object

// Creating a prototype method for all Strings globally

function getLength() {
  console.log(this);
  console.log(`The true length is: `, this.trim().length);
}

// Liking our function getLength  as truelength method in String using proto
String.prototype.truelength = getLength;

// As a result, now we can see that the truelength method works with every string
'Kanchan'.truelength(); // The true length is:  7
'   Hello, my name is       '.truelength(); // The true length is:  17
