const lang = ['js', 'ruby', 'java', 'C#', 'Python'];

// for each loop doesn't return any value
const values = lang.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values); // undefined

// filter

const myNums = [1, 3, 4, 5, 2, 6, 2, 6, 8, 6];

const filteredNums = myNums.filter((num) => num > 4);
console.log(filteredNums); // [ 5, 6, 6, 8, 6 ]

const filteredNums2 = myNums.filter((num) => {
  return num % 2 == 0;
});
console.log(filteredNums2); // [4, 2, 6, 2, 6, 8, 6]

// map

const addNum = myNums.map((num) => num + 10);
console.log(addNum);
// [
//   11, 13, 14, 15, 12,
//   16, 12, 16, 18, 16
// ]

// reduce

const reduceNums = myNums.reduce((acc, curr) => {
  // console.log('acc: ', acc);
  // console.log('curr: ', curr);
  return acc + curr;
}, 0);

console.log(reduceNums); // 43
