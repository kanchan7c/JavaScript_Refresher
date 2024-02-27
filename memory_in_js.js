// Stack memory, Heap memory

// Stack is used in Primitive datatypes
// Heap is used in Non Primitive data types

// In Stack, a copy of value is given. In Heap, reference of value if given

// In Stack, the original value doesn't change. In Heap, the original value changes

// Stack example (any change in value won't affect the original value)
let myName = 'Jon Doe';
let getMyName = myName;
console.log(getMyName);
getMyName = 'Jenna Doe';
console.log(getMyName);
console.log(myName);

// Heap example (any change in reference changes the original value)
let userOne = {
  name: 'Someone Smart',
  upi: 'smart@ybl',
};

let userTwo = userOne;
console.log(userTwo.upi);

userTwo.upi = 'smartguy@ybl';
console.log(userOne.upi);
