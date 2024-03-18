const myObj = {
  name: 'Kanchan',
  lang: 'JS',
  price: 3000,
};

console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

// {
//   value: 'Kanchan',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// changing properties of Object
Object.defineProperty(myObj, 'name', {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

// {
//   value: 'Kanchan',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
