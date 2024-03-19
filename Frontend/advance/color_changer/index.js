// Taking access of DOM elements to perform changes

const parent = document.querySelector('.parent');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const colors = document.querySelectorAll('.button');

// Checking if values received correctly

// console.log(colors);
// console.log(colors[1]);
// console.log(colors[1].getAttribute('id'));

// Looping over the nodeList received
colors.forEach((item) => {
  // applying a click event on the color options
  item.addEventListener('click', (e) => {
    // saving received color in a variable
    // let receivedColor = item.getAttribute('id');
    let receivedColor = e.target.id;

    // using the received color variable to change body background
    body.style.backgroundColor = receivedColor;

    // Ternary operator approach
    receivedColor == 'grey' || receivedColor == 'blue'
      ? ((h1.style.color = 'white'), (h2.style.color = 'white'))
      : ((h1.style.color = 'black'), (h2.style.color = 'black'));

    // Traditional conditional approach

    // if (receivedColor == 'grey' || receivedColor == 'blue') {
    //   h1.style.color = 'white';
    //   h2.style.color = 'white';
    // } else {
    //   h1.style.color = 'black';
    //   h2.style.color = 'black';
    // }
  });
});
