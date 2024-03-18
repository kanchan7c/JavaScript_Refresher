// use of class
class User {
  constructor(username, email, isLoggedIn) {
    this.username = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn;
  }

  changeLoginStatus() {
    this.isLoggedIn = false;
  }
}

const user1 = new User('Jon', 'jon@email.com', true);

console.log(user1); // User { username: 'Jon', email: 'jon@email.com', isLoggedIn: true }
console.log(user1.changeLoginStatus());
console.log(user1); // User { username: 'Jon', email: 'jon@email.com', isLoggedIn: false }

// behind the scene
function person(username, email, isAvailable) {
  this.username = username;
  this.email = email;
  this.isAvailable = isAvailable;
}

person.prototype.availableStatus = function () {
  this.isAvailable = true;
};

const person1 = new person('Sam', 'sam@hiho.com', false);

console.log(person1); // person { username: 'Sam', email: 'sam@hiho.com', isAvailable: false }
person1.availableStatus();
console.log(person1); // person { username: 'Sam', email: 'sam@hiho.com', isAvailable: true }
