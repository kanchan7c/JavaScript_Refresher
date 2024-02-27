'use strict'; //treat all JS code as newer version as per ECMA Standard

// alert('hello') // available inside browser, we are using node JS here

let name = 'nobody'; // String
let age = 29; // Number
let isTall = false; // Boolean
// bigint -> very big number greater than 2^53
let cat = null; // null
let state; // undefined
// symbol => unique
// object

console.log(typeof cat); //output is object

//Primitive datatypes (call by value)
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false

// Reference type (Non Primitive)(Call by reference)
// Array, Objects, Functions

// Array
const myArray = [23, 'me', 87.29, 'hello world'];
// Object
let myObject = {
  name: 'abc',
  age: 30,
};
// 3 ways to write function
// 1st method
function myfunc() {
  console.log('Hello myfunc');
}

// 2nd method
let anotherFunction = function () {
  console.log('hello anotherFunction');
};

// 3rd method or arrow function
const thirdFunc = () => {
  console.log('hello thirdFunc');
};
