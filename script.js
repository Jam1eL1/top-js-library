const myLibrary = [];
const bookDialog = document.getElementById('book-dialog');
const addBookBtn = document.getElementById('add-book');
const saveBookBtn = document.getElementById('save-book');
const cancelBookBtn = document.getElementById('cancel-book');

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

saveBookBtn.addEventListener('click', () => {
    bookDialog.close();
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


