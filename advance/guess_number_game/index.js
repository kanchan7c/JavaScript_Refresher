const form = document.querySelector('form');
const reset = document.querySelector('.reset');
const submit = document.querySelector('form > button');
// console.log(reset);
let guesses = [];
let chances = 10;

const guessDisplay = document.querySelector('.guesses');
const chancesLeft = document.querySelector('.guess-remaining');

chancesLeft.innerHTML = chances;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const guessed_num = parseInt(document.querySelector('#guessed-num').value);
  const result = document.querySelector('#result');
  const random_num = Math.floor(Math.random() * 100);

  if (chances > 0) {
    if (guessed_num < 1 || guessed_num > 100 || isNaN(guessed_num)) {
      result.innerHTML = 'Guess number should be between 1 and 100';
    } else if (guessed_num !== random_num) {
      result.className = 'red';

      result.innerHTML = `Incorrect guess, the number was ${random_num}. Try again!`;

      chances = chances - 1;
      chancesLeft.innerHTML = chances;

      if (chances === 0) {
        submit.setAttribute('disabled', true);
        resetButton();
      }
      guesses.push(guessed_num);
      guessDisplay.innerHTML = ` ${guesses.toString()} `;
    } else {
      result.className = 'green';

      result.innerHTML = `Correct guess!, the number was ${random_num}. You win!`;
      submit.setAttribute('disabled', true);
      guesses.push(guessed_num);
      guessDisplay.innerHTML = ` ${guesses.toString()} `;
      resetButton();
    }
  } else {
    result.innerHTML = `Game over! You have 0 chances left`;
  }
  // console.log(guesses);
});

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
