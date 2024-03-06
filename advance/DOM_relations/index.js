// ACCESSING DOM ELEMENTS

const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]); // div Tuesday
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
// Monday Tuesday Wednesday Thursday

parent.children[1].style.color = 'red';

console.log(parent.firstElementChild); // <div class="day">Monday</div>
console.log(parent.lastElementChild); // <div class="day">Thursday</div>

const dayOne = document.querySelector('.day');

console.log(dayOne); // div Monday
console.log(dayOne.parentElement); // div parent
console.log(dayOne.nextElementSibling); // div Tuesday

console.log('NODES : ', parent.childNodes); // returns 9 nodeList. elements, text, comments and line breaks are also nodeList

// CREATING NEW ELEMENTS IN DOM

const headingH2 = document.createElement('h2');
console.log(headingH2);

headingH2.className = 'heading-h2';
headingH2.id = Math.round(Math.random() * 10 + 1);
headingH2.setAttribute('title', 'My Important Heading');
headingH2.style.color = 'blue';
// headingH2.innerText = 'My Important Heading'; // not an optimized method

// Right way of adding element --->>>>>
const textNode = document.createTextNode('My Important Heading'); // creates a text node that holds the contents of our heading that we created
headingH2.appendChild(textNode); // adding the text node to our heading
document.body.appendChild(headingH2); // adding our h2 element to the body of HTML
