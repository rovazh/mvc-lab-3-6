function Book (id, title, author, year, available = true) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.available = available;
}

let lastId = 1;

const books = [];

books.push(new Book(lastId++, 'Book 1', 'Wade Davis'));
books.push(new Book(lastId++, 'Book 2', 'Wade Davis'));
books.push(new Book(lastId++, 'Book 3', 'Wade Davis'));
books.push(new Book(lastId++, 'Book 4', 'Wade Davis'));
books.push(new Book(lastId++, 'Book 5', 'Wade Davis'));

Book.getAll = () => books;

module.exports = Book;
