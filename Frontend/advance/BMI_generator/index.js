const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // This will load only when the submit button is clicked. We not want empty values therefore we wrote the following in an event
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  // height checks
  if (!height || height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Invalid height';
  }
  // weight check
  else if (!weight || weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Invalid weight';
  } else {
    // BMI calculations
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // result display
    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is ${bmi}. <div>You are underweight</div>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `Your BMI is ${bmi}. <div>You are overweight</div>`;
    } else {
      result.innerHTML = `Your BMI is ${bmi}. <div>You are in normal range</div>`;
    }
  }
});
