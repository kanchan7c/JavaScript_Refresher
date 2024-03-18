// OBJECT LITERAL

const user = {
  username: 'kanchan7c',
  email: 'abc@somedomain.com',
  message: function () {
    console.log('Hello,');
    console.log(this.username); // kanchan7c
    console.log('How are you today?');
    console.log(this); // {username: 'kanchan7c', email: 'abc@somedomain.com', message: [Function: message]}
  },
};

console.log(user.message());
console.log(this); // {}

// `this` keyword value depends upon it's context where it is executed.
// `this` keyword inside a function or object has the context of that same function or Object
// When `this` keyword is used globally, then it returns value as per the environment in which JS is running
// `this` keyword inside global `node` environment returns an `empty object`

// `this` keyword run inside the browser returns `window` object.
// Example:
// Window {0: Window, 1: Window, 2: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// CONSTRUCTOR FUNCTION
// constructor function gives a new instance of function every time, so the values do not get overwritten every time the function is used

// const promise1 = new Promise();
// const date = new Date();

// new keyword creates new context of the function. It is used with constructor fn

function userDetails(username, isLoggedIn, device) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.device = device;

  return this;
}

const userDetails1 = new userDetails('Jon', true, 'Desktop');
const userDetails2 = new userDetails('Reeta', false, 'Mobile');

console.log(userDetails1); // userDetails { username: 'Jon', isLoggedIn: true, device: 'Desktop' }
console.log(userDetails2); // userDetails { username: 'Reeta', isLoggedIn: false, device: 'Mobile' }

console.log(userDetails1.constructor); //[Function: userDetails]
// a constructor is a reference to itself
