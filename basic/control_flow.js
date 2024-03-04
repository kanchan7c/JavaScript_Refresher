// if

// if the condition is true then if block will execute. If condition evaluates to false, then else block will run

// if block executes in this case
if (2 > 1) {
  console.log('if block: 2 > 1 condition is true');
} else {
  console.log('else block: 2 < 1 condition is false');
}

// else block executes in this case
if (2 < 1) {
  console.log('if block: 2 > 1 condition is true');
} else {
  console.log('else block: 2 < 1 condition is false');
}

// shorthand code
2 > 1 ? console.log(true) : console.log(false); // true

5 > 1 ? (4 > 2 ? true : false) : false;

// switch case

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// FALSY value
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY value
// "0", 'false', " ", [], {}, function(){}

// nullish coalescing operator (??)

let value1;
val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 20;
console.log(val1); // 20
