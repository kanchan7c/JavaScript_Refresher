import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [0]);

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>

      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
