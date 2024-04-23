function User (id, login, borrowedBooks = []) {
  this.id = id;
  this.login = login;
  this.borrowedBooks = borrowedBooks;
}

User.prototype.borrowBook = function (book) {
  this.borrowedBooks.push(book);
}

User.prototype.returnBook = function(bookId) {
  const indx = this.borrowedBooks.findIndex((book) => book.id === bookId);
  if (indx !== -1) {
    this.borrowedBooks.splice(indx, 1);
  }
}

User.prototype.findBorrowedBookById =function(bookId) {
  return this.borrowedBooks.some(book => book.id === bookId);
}

let lastId = 1;

const users = [];

users.push(new User(lastId++, 'user1'));
users.push(new User(lastId++, 'user2'));
users.push(new User(lastId++, 'user3'));
users.push(new User(lastId++, 'user4'));
users.push(new User(lastId++, 'user5'));

User.getAll = () => users;

User.getById = (id) => users.find(user => user.id === id);

module.exports = User;
