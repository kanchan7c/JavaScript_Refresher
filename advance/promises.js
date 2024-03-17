// 1st method : with variable
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Task 1 completed');
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log('Promise 1 is consumed');
});

// 2nd method: without taking any variable
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Task 2 completed');
    resolve();
  }, 1000);
}).then(() => console.log('Promise 2 consumed'));

// 3rd method : providing object in response
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Kanchan',
      id: 'kanchan7c',
      domain: 'github',
    });
  }, 1000);
});

promise3.then((user) => console.log(user));

// 4th method : then chaining, catch, finally

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({
        id: 1,
        email: '123@example.com',
      });
    } else {
      reject('Error:Invalid request');
    }
  }, 1000);
});

promise4
  .then((user) => {
    return user.email;
  })
  .then((email) => console.log(email))
  .catch((error) => console.log(error))
  .finally(() => console.log('Task 4 not completed'));

// 5th method: Promise with async await
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({
        lang: 'JavaScript',
        duration: '90 days',
        levels: ['beginner', 'intermediate', 'expert'],
      });
    } else {
      reject('Error:Invalid request');
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// Async await example : async returns a promise

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error: ', error);
  }
}
getUsers();

// fetch api example
function fetchAlbums() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
fetchAlbums();
