// WINDOW
// -- DOCUMENT
//  -- HTML
//     -- HEAD
//       -- TITLE
//         -- Text Node (Text value)
//       -- META
//         -- Attribute
//     -- BODY
//       -- div
//         -- attribute
//         -- h1
//           -- attribute
//           -- text node
//         -- p
//           -- text node

// document.querySelectorAll() gives a nodeList wherein each item can be accessed using forEach loop. It doesn't gives a traditional array so map function or other loops won't work

// document.getElementsByClassName returns a HTML collection that doesn't contain any array methods to loop therefore we need to convert it into an array to perform any operation

// use Array.from() method to convert a nodeList or HTML collection into an array

// Example:
const listArray = Array.from(document.getElementsByClassName('list-item')); // there are classNames called list-item

listArray.map((item) => (item.style.color = 'green'));
