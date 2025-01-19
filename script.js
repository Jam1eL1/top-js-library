const myLibrary = [];
const bookDialog = document.getElementById('book-dialog');
const addBookBtn = document.getElementById('add-book');
const saveBookBtn = document.getElementById('save-book');
const cancelBookBtn = document.getElementById('cancel-book');
const deleteBookBtn = document.getElementById('delete-book');
const bookForm = document.getElementById('book-form');

addBookBtn.addEventListener('click', () => {
  bookDialog.classList.add('open');
  bookDialog.showModal();
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const pages = document.getElementById('book-pages').value;
  const readStatus = document.querySelector('input[name="read-status"]:checked').value;
  const rating = document.getElementById('book-rating').value;
  const newBook = new Book(title, author, pages, readStatus, rating);
  addBookToLibrary(newBook);
  displayBooks();
  bookForm.reset();
});

cancelBookBtn.addEventListener('click', () => {
  bookDialog.close();
});

class Book {
  constructor(title, author, pages, readStatus, ratings) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.readStatus = readStatus;
    this.ratings = Number(ratings);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.readStatus}</p>
            <p>Rating: ${book.ratings}</p>
            <button id="delete-book" class="btn-delete-book">x</button>
        `;
    libraryContainer.appendChild(bookCard);
  });
}

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, "Read", 5));
myLibrary.push(new Book("1984", "George Orwell", 328, "Read", 4));
myLibrary.push(new Book("Pride and Prejudice", "Jane Austen", 432, "Not Read", 0));
myLibrary.push(new Book("Dune", "Frank Herbert", 412, "Reading", 4));
myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read", 3));

// Adding 5 more books
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 281, "Read", 5));
myLibrary.push(new Book("The Name of the Wind", "Patrick Rothfuss", 662, "Reading", 4));
myLibrary.push(new Book("The Catcher in the Rye", "J.D. Salinger", 234, "Not Read", 0));
myLibrary.push(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, "Read", 5));
myLibrary.push(new Book("Brave New World", "Aldous Huxley", 311, "Reading", 3));

displayBooks();