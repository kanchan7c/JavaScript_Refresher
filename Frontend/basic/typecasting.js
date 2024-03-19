let age = '23';
console.log(typeof age); // returns string

let ageInNumber = Number(age);
console.log(typeof ageInNumber); // returns number

let weight = '67sdc';
let weightInNumber = Number(weight);
console.log(weightInNumber); // returns NaN as 67sdc can't be converted to number
