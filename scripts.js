function makeBook(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
};

let myLibrary = [];

const submitButton = document.getElementById('submitBook');
const bookList = document.getElementById('bookList');

function addBookToLibrary() {
    submitButton.addEventListener('click', function() {
        event.preventDefault(); //prevent page reload
        const userInputBookName = document.getElementById('name').value;
        const userInputAuthor = document.getElementById('author').value;
        const userInputPages = document.getElementById('pages').value;

        let tempBook = new makeBook(userInputBookName, userInputAuthor, userInputPages);

        myLibrary.push(tempBook);

        const newNode = document.createElement('li');
        newNode.innerText = `${userInputBookName}, written by ${userInputAuthor}, ${userInputPages} pages`;

        bookList.appendChild(newNode);

        console.log(myLibrary);
    });
};

addBookToLibrary();

myLibrary.forEach(book => {
    console.log(book);
});