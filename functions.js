function greeting(timeofday) {
  console.log(`Hello there, good ${timeofday}`);
}

greeting('Morning'); // Hello there, good Morning

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 8)); // 10

// rest operator
function totalCartValue(...item) {
  return item;
}

console.log(totalCartValue(89, 68, 900, 567)); // [ 89, 68, 900, 567 ]

function totalCartValue(val1, val2, ...item) {
  return item;
}
