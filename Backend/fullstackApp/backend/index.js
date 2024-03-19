import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

// Home route that tells our server is running
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Simple API that serves jokes data
app.get('/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'A', desc: 'A joke' },
    { id: 2, title: 'B', desc: 'B joke' },
    { id: 3, title: 'C', desc: 'C joke' },
    { id: 4, title: 'D', desc: 'D joke' },
    { id: 5, title: 'E', desc: 'E joke' },
  ];
  res.send(jokes);
});

// Server listening on the port specified
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
