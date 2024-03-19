// string concatenation
let myName = 'Nobody@lovesme';
console.log(`Hello, ${myName}! How are you?`);

// string declaration in another way
const myString = new String('Meow');

console.log(myString[0]); // M
console.log(myString.__proto__); // {}

// string methods
console.log(myName.charAt(2)); // b
console.log(myName.indexOf('d')); // 4

console.log(myName.substring(0, 8)); // Nobody@l
const newStr = myName.slice(2, 8); // body@l
const newStr2 = myName.slice(-8, -2); // @loves
console.log(newStr);
console.log(newStr2);
