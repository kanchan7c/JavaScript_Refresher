// constructor ==> singleton (example Object.create)
// literals ==> multiple instances

//object literals
const user = {
  name: 'user1',
  age: 20,
  address: '23 street 1, bshe, 382922',
  city: 'Gurgaon',
  email: 'abc@someone.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'Sunday'],
  greeting: function () {
    console.log('Hello');
  },
};

console.log(user.name); // user1
console.log(user['city']); // Gurgaon
console.log(user['address']); // 23 street 1, bshe, 382922

console.log(user.greeting()); // Hello
console.log(`${user.greeting()}, ${user.name}`); // Hello, user1

user.message = function () {
  console.log('This is the message xyz');
};

console.log(user.message()); // This is the message xyz

console.log(user);
// {
//   name: 'user1',
//   age: 20,
//   address: '23 street 1, bshe, 382922',
//   city: 'Gurgaon',
//   email: 'abc@someone.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Sunday' ],
//   greeting: [Function: greeting],
//   message: [Function (anonymous)]
// }

// More on objects

const obj1 = {
  email: 'some@djsd.com',
  fullname: {
    fname: 'jsk',
    lname: 'shsjs',
  },
  age: 45,
  country: 'NZ',
};

console.log(obj1.fullname.fname); //jsk

const obj2 = { 1: 'a', 2: 'b' };
const obj3 = { 3: 'c', 4: 'd' };
const obj4 = Object.assign({}, obj2, obj3); // {} empty object is treated as target in Object.assign method and rest are treated as source. This operation copies all the values of obj2, obj3 into the empty target object. This is optional to provide

console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Another method is using spread operator
const resultObj = { ...obj2, ...obj3 }; // copies both object values into resultObj

// Data coming from database

const users = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

console.log(Object.keys(user));
// [
//   'name',
//   'age',
//   'address',
//   'city',
//   'email',
//   'isLoggedIn',
//   'lastLoginDays',
//   'greeting',
//   'message',
// ];
console.log(Object.values(user));
// [
//   'user1',
//   20,
//   '23 street 1, bshe, 382922',
//   'Gurgaon',
//   'abc@someone.com',
//   false,
//   [ 'Monday', 'Sunday' ],
//   [Function: greeting],
//   [Function (anonymous)]
// ]

console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('country')); // false

// Object destructuring
