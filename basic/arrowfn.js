// THIS KEYWORD

const user = {
  username: 'kanchan',
  price: '1000',
  welcomeMessage: function () {
    console.log(`hello ${this.username}, welcome to website`);
    // console.log(this);
  },
};

// this keyword refers to the current context

user.welcomeMessage(); // hello kanchan, welcome to website

user.username = 'Sammy';
user.welcomeMessage(); // hello Sammy, welcome to website

// console.log(this); // {}

// the context of this in browser refers to window object however in node environment, this refers to the global object if it is checked globally. This refers to the context when it is run inside a block

function thisFunction() {
  let username = 'user2';
  // console.log(this); // refers to global object
  console.log(this.username); // doesn't produce desired output, gives undefined
}

thisFunction();

const arrowfn = () => {
  console.log(this); // {}
};

arrowfn();

// ARROW FUNCTION

// explicit return
const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(4, 6)); // 10

//implicit return of arrow function used in single line code

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 6)); // 9
