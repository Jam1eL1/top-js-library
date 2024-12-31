const myLibrary = [];

function Book(title, author, created, ratings) {
  this.title = title;
  this.author = author;
  this.created = created;
  this.ratings = ratings;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// const book1 = new Book('abcde', 'jk', '2019', 5);