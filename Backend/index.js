// creating server using express

require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const data = {
  login: 'kanchan7c',
  id: 40591211,
  node_id: 'MDQ6VXNlcjQwNTkxMjEx',
  avatar_url: 'https://avatars.githubusercontent.com/u/40591211?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/kanchan7c',
  html_url: 'https://github.com/kanchan7c',
  followers_url: 'https://api.github.com/users/kanchan7c/followers',
  following_url:
    'https://api.github.com/users/kanchan7c/following{/other_user}',
  gists_url: 'https://api.github.com/users/kanchan7c/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/kanchan7c/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/kanchan7c/subscriptions',
  organizations_url: 'https://api.github.com/users/kanchan7c/orgs',
  repos_url: 'https://api.github.com/users/kanchan7c/repos',
  events_url: 'https://api.github.com/users/kanchan7c/events{/privacy}',
  received_events_url: 'https://api.github.com/users/kanchan7c/received_events',
  type: 'User',
  site_admin: false,
  name: 'Kanchan Chaudhary',
  company: 'Accenture',
  blog: '',
  location: 'Gurugram',
  email: null,
  hireable: true,
  bio: 'Programming lover, problem solver',
  twitter_username: null,
  public_repos: 29,
  public_gists: 5,
  followers: 2,
  following: 1,
  created_at: '2018-06-26T06:35:08Z',
  updated_at: '2024-03-17T09:16:50Z',
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/greeting', (req, res) => {
  res.send('Good Day! User');
});

app.get('/login', (req, res) => {
  res.send('enter your login details');
});

app.get('/github', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
