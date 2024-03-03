// for loop

for (let index = 0; index < 10; index++) {
  // console.log(index + 1); // prints 1 to 10
}

// while loop
let index = 5;
while (index > 0) {
  // console.log(index);
  index--;
}

// do while loop
do {
  // console.log(index);
  index--;
} while (index > 0);

// pattern printing using loops

for (let line = 1; line <= 5; line++) {
  // console.log('* '.repeat(line));
}
//  o/p
// *
// **
// ***
// ****
// *****

for (let i = 5; i >= 1; i--) {
  // console.log('* '.repeat(i));
}
// *****
// ****
// ***
// **
// *

// for of loop
// works on arrays
const arr1 = [1, 2, 3, 4, 5];

for (const element of arr1) {
  // console.log(element);
}

// as well as string
for (const char of 'Jon Doe') {
  // console.log(char);
}

// Maps
// Map contains unique values in the order of insertion of the elements
const map = new Map();

map.set(1, 'a');
map.set(2, 'b');
map.set('IN', 'India');
map.set('AU', 'Australia');

// console.log(map); // Map(4) { 1 => 'a', 2 => 'b', 'IN' => 'India', 'AU' => 'Australia' }

for (const [key, value] of map) {
  // console.log(key, ' - ', value);
}
// 1 - a;
// 2 - b;
// IN - India;
// AU - Australia;

// For in

const langs = {
  js: 'javascript',
  cpp: 'c++',
  py: 'python',
};

for (const key in langs) {
  // console.log(key, ' : ', langs[key]);
}

// js: javascript;
// cpp: c++;
// py: python;

const arr2 = ['hgh', 'ghhdr', '78gh', 'bhjbjhbjh', 78];

for (const key in arr2) {
  // console.log(key);
  // console.log(arr2[key]);
}

// 0
// hgh
// 1
// ghhdr
// 2
// 78gh
// 3
// bhjbjhbjh
// 4
// 78

// for each

arr2.forEach((item) => {
  console.log(item + 2);
});
// hgh2
// ghhdr2
// 78gh2
// bhjbjhbjh2
// 80
