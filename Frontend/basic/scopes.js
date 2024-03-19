// global scope
let a = 2;
const b = 4;
var c = 23;

console.log(a, b, c); // 2 3 23

if (true) {
  // block scope
  let d = 5;
  const e = 6;
  var f = 7;
}

// console.log(d) // error
// console.log(e) // error
// console.log(f) // 7

// let  and const obeys the scope however var doesn't obey block scope

let aa = 100; // global scope

if (true) {
  let aa = 200; // block scope
  console.log('inner aa: ', aa); // inner aa:  200
}

console.log('outer aa: ', aa); // outer aa:  100

// scope in functions

// CLOSURE

function one() {
  const username = 'user1';

  function two() {
    const website = 'youtube';
    console.log(username);
  }
  // console.log(website); // error

  two();
}

one(); // user1

// one is the parent function. Two is the child function. fn two can access variables of parent fn one however parent fn one can't access the variables of its child fn two

// same happens in if else statements

if (true) {
  const username = 'kanchan';
  if (username === 'kanchan') {
    const website = 'none';
    console.log(username + website); // kanchannone
  }
  // console.log(website); // error
}

// console.log(username); // error

// HOISTING

console.log(addone(5)); // 6

function addone(num) {
  return num + 1;
}

// console.log(addTwo(5)); // error
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); // 7

// if fn is declared as a variable then the fn can't be accessed before declaration because of hoisting
