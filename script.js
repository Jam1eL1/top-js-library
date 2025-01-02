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

    console.log({
        title,
        author,
        pages,
        readStatus,
        rating
    });
}); 

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

cancelBookBtn.addEventListener('click', () => {
    bookDialog.close();
});



function Book(title, author, pages, read, ratings) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.ratings = ratings;
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
            <p>Read: ${book.read}</p>
            <p>Rating: ${book.ratings}</p>
        `;
        libraryContainer.appendChild(bookCard);
    });  
}
// test
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', '700','Y', 4.5));
addBookToLibrary(new Book('1984', 'George Orwell', '200', 'N', 4.8));
addBookToLibrary(new Book('Pride and Prejudice', 'Jane Austen', '1000', 'Y', 4.7));


