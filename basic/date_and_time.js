// JS Date object represents a single moment in time that is platform independent
// The date starts midnight from Jan 1, 1970, UTC (also known as epoch)

// Date object is calculated in milliseconds

// Temporal object is to be made global in future

// current way of using Date object

let myDate = new Date();

console.log(myDate); // 2024-02-29T06:05:03.721Z
console.log(myDate.toString()); // Thu Feb 29 2024 11:35:29 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Feb 29 2024
console.log(myDate.toISOString()); // 2024-02-29T06:07:10.280Z
console.log(myDate.toLocaleDateString()); // 2/29/2024
console.log(myDate.toLocaleString()); // 2/29/2024, 11:37:10 AM
console.log(myDate.toLocaleTimeString()); // 11:37:10 AM
console.log(myDate.toUTCString()); // Thu, 29 Feb 2024 06:07:10 GMT

console.log(typeof myDate); // object

// Month starts from 0 in Js
let myRequiredDate = new Date(2024, 1, 12);
console.log(myRequiredDate.toLocaleString()); // 2/12/2024, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1709187215862 milliseconds
console.log(Math.floor(myTimeStamp / 1000)); // 1709187359 seconds

let myDateOptions = myDate.toLocaleString('default', {
  weekday: 'long',
  day: '2-digit',
});
console.log(myDateOptions); // 29 Thursday
