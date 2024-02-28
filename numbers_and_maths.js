// numbers

const age = 30;
console.log(age); // 30

const balanceInAccount = new Number(2000);
console.log(balanceInAccount); // [Number: 2000]

console.log(balanceInAccount.toString()); // 2000
console.log(balanceInAccount.toFixed(2)); // 2000.00

const weight = 89.7609;
const someNum = 7892.829;
console.log(weight.toPrecision(3)); // 89.8
console.log(someNum.toPrecision(6)); // 7892.83

const money = 129268998.89;
console.log(money.toLocaleString('en-IN')); // 12,92,68,998.89

// Maths

console.log(Math); // object
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min([8, 7, 0, 3, 7, 5])); // 0

console.log(Math.random()); // output between 0 & 1
console.log(Math.random() * 10); // output between 0 & 9
console.log(Math.random() * 10 + 1); // output between 1 & 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
