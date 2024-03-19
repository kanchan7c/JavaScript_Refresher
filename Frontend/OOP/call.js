function One(username) {
  this.username = username;
}

function Two(username, email, code) {
  One.call(this, username); // must use call and pass optional this to call the function One and get it's properties
  this.email = email;
  this.code = code;
}

const user1 = new Two('Jon', 'Something@sjsn.com', '232DC8');

console.log(user1); // Two { username: 'Jon', email: 'Something@sjsn.com', code: '232DC8' }
