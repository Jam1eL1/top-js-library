const myLibrary = [];

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
    }
    );  
}