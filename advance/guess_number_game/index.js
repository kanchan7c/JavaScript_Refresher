// Getting DOM elements
const form = document.querySelector('form');
const reset = document.querySelector('.reset');
const submit = document.querySelector('form > button');
const guessDisplay = document.querySelector('.guesses');
const chancesLeft = document.querySelector('.guess-remaining');

// Declaring global variables for guessing game
let guesses = [];
let chances = 10;

// generating random number between 1 to 100 for the player to play the game
let random_num = Math.floor(Math.random() * 100);
console.log(random_num);

// Starting off with 10 chances in hand
chancesLeft.innerHTML = chances;

// Adding a submit handler to perform the tasks on submit of the button
form.addEventListener('submit', (e) => {
  // Preventing the default submissions
  e.preventDefault();

  // creating a function to display guessed numbers
  function guessedNumDisplay() {
    // storing the guessed numbers into array
    guesses.push(guessed_num);

    // converting the guessed numbers array to string for display
    guessDisplay.innerHTML = ` ${guesses.toString()} `;
  }

  // getting result element to display results
  const result = document.querySelector('#result');

  // getting more DOM elements
  const guess = document.querySelector('#guessed-num').value;
  // converting player guess into integer as input field returns a string value
  const guessed_num = parseInt(guess);

  // code will be executed if player still has chances
  if (chances > 0) {
    // if player guess is not a number
    if (guessed_num < 1 || guessed_num > 100 || isNaN(guessed_num)) {
      result.innerHTML = `You entered <span class='red'>${guess}</span>. Please guess between 1 to 100`;
      form.reset();
    }
    // else if the player guess is not equal to our random number
    else if (guessed_num !== random_num) {
      // for styling purpose only
      result.className = 'red';
      // displaying result to the player for incorrect guess
      result.innerHTML = `Incorrect guess! Try again!`;

      // reducing the number of chances as per player's attempt
      chances = chances - 1;
      chancesLeft.innerHTML = chances;

      // clearing the input box for player
      form.reset();

      // if chances are exhausted while playing the game
      if (chances === 0) {
        // submit guess button will be disabled
        submit.setAttribute('disabled', true);
        // reset function will be invoked
        resetButton();
      }

      // invoking guess display function
      guessedNumDisplay();
    } else {
      // for styling purpose only
      result.className = 'green';

      // displaying result to the player for the correct guess
      result.innerHTML = `Correct guess!, the number was ${random_num}. You win!`;

      // disabling submit guess button as the player has guessed correct number
      submit.setAttribute('disabled', true);

      // invoking guess display function
      guessedNumDisplay();

      // calling reset button function as player would like to play again
      resetButton();

      // clearing form input
      form.reset();

      // Generating random number again as now the player saw the random number we had
      random_num = Math.floor(Math.random() * 100);
    }
  }
  // if chances exhaust, then the following will execute
  else {
    result.innerHTML = `Game over! You have 0 chances left`;
  }
  // console.log(guesses);
});

// Resets for the player to start again
function resetButton() {
  reset.removeAttribute('disabled'), true;
  reset.addEventListener('click', () => {
    submit.removeAttribute('disabled', true);
    reset.setAttribute('disabled', true);
    chances = 10;
    chancesLeft.innerHTML = chances;
    guesses = [];
    guessDisplay.innerHTML = ` ${guesses.toString()} `;
    result.innerHTML = '';
  });
}
