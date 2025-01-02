const myLibrary = [];

const bookDialog = document.getElementById('book-dialog');
const addBookBtn = document.getElementById('add-book');
const saveBookBtn = document.getElementById('save-book');
const cancelBookBtn = document.getElementById('cancel-book');

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const readStatus = document.querySelector('input[name="read-status"]:checked').value;
    const rating = document.getElementById('book-rating').value;
    }); 

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
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

// function addNewBook() {

// }

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book)=> {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.readStatus}</p>
            <p>Rating: ${book.ratings}</p>
        `;
        libraryContainer.appendChild(bookCard);
    });  
}

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, "Read", 5));
myLibrary.push(new Book("1984", "George Orwell", 328, "Read", 4));
myLibrary.push(new Book("Pride and Prejudice", "Jane Austen", 432, "Not Read", 0));
myLibrary.push(new Book("Dune", "Frank Herbert", 412, "Reading", 4));
myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read", 3));
displayBooks();