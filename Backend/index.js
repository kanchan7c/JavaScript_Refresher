// creating server using express

require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/greeting', (req, res) => {
  res.send('Good Day! User');
});

app.get('/login', (req, res) => {
  res.send('enter your login details');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
