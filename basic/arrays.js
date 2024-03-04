// shallow copy --> call by reference
// deep copy --> call by value (do not share reference)

// arrays follow shallow copy

let myArr = [27, 'sshdghs', 282, 2, 09];

// array methods
myArr.push(6); // adds 6 in the end of the array
myArr.pop(); // removes last element from the array

myArr.unshift(9); // adds element at the 0th index of the array
myArr.shift(); // removes element from 0th index

myArr.includes(2); // true
myArr.indexOf(282); // 2

myArr.join(); // 27,'sshdghs',282,2,09 (converts into string)

let myArr2 = [1, 0, 3, 5, 2, 9, 5];

// slice operation does not change original array
console.log(myArr2); // [1, 0, 3, 5, 2, 9, 5]
console.log(myArr2.slice(1, 3)); // [ 0, 3 ]
console.log('Original array after slice ', myArr2); // [1, 0, 3, 5, 2, 9, 5]

// splice operation changes the original array
console.log(myArr2.splice(1, 3)); // [ 0, 3, 5 ]
console.log('Original array after splice ', myArr2); // [ 1, 2, 9, 5 ]

// More on arrays

const arr1 = ['2', 32, 22, 'xsxs', 'm', 0];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

// merging arrays

// do not push the array into each other as it will push the entire array instead of values

// 1st method

const resultArray = arr1.concat(arr2);
console.log(resultArray); // [ '2',    32,  22, 'xsxs', 'm', 0,'a',    'b', 'c','d',    'e']

// 2nd method: spread op

const resultArr2 = [...arr1, ...arr2];
console.log(resultArr2); // [ '2',    32,  22, 'xsxs', 'm', 0,'a',    'b', 'c','d',    'e']

const newArray = [1, 2, 3, [4, 5], [6, [7, 8, 9]]];
const flattenedArr = newArray.flat(Infinity);
console.log(flattenedArr); // [1, 2, 3, 4, 5,6, 7, 8, 9]

console.log(Array.isArray('White Horse')); // false
console.log(Array.from('White Horse')); // ['W', 'h', 'i', 't','e', ' ', 'H', 'o', 'r', 's', 'e']

console.log(Array.from({ name: 'Someone' })); // []

let a = 20;
let b = 29;
let c = 78;

console.log(Array.of(a, b, c)); // [ 20, 29, 78 ]
