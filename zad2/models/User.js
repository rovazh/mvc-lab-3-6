function User (id, login, borrowedBooks = []) {
  this.id = id;
  this.login = login;
  this.borrowedBooks = borrowedBooks;
}

let lastId = 1;

const users = [];

users.push(new User(lastId++, 'user1'));
users.push(new User(lastId++, 'user2'));
users.push(new User(lastId++, 'user3'));
users.push(new User(lastId++, 'user4'));
users.push(new User(lastId++, 'user5'));

User.getAll = () => users;

module.exports = User;
