// Immediately invoked function

(function dbconnect() {
  console.log('DB connected');
})();

(() => {
  console.log('DB connected 2nd example');
})();

((value) => {
  console.log(`the value of 2 is ${value}`);
})(2);
