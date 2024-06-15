const myLibrary = [
  new Book("abc", "abc", "abc", "aaa"),
  new Book("abc", "abc", "abc", "aaa"),
  new Book("cba", "cba", "cba", "aaa"),
];
const libraryElement = document.querySelector("#library");
const newBookBtn = document.querySelector("#newbook");
const modal = document.querySelector("#book_modal");
const submitBtn = document.querySelector("#submit");
let author = document.querySelector("#author");
let title = document.querySelector("#title");
let pages = document.querySelector("#pages");
let bookStatus = document.querySelector("#status");

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}
function addBookToLibrary(book) {
  myLibrary.push(book);
  let bookElement = bookToElement(book);
  for (prop in bookElement) {
    libraryElement.append(bookElement[prop]);
  }
}
function displayLibraryBooks() {
  myLibrary.forEach((book) => {
    let bookElement = bookToElement(book);
    for (let prop in bookElement) {
      libraryElement.append(bookElement[prop]);
    }
  });
}
function bookToElement(bookObj) {
  let titleElement = document.createElement("p.title");
  let authorElement = document.createElement("p.author");
  let pagesElement = document.createElement("P.author");
  let statusElement = document.createElement("p.author");
  titleElement.textContent = bookObj.title;
  authorElement.textContent = bookObj.author;
  pagesElement.textContent = bookObj.pages;
  statusElement.textContent = bookObj.status;
  return { titleElement, authorElement, pagesElement, statusElement };
}

displayLibraryBooks();
newBookBtn.addEventListener("click", () => {
  modal.className = "on";
});
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let newBook = new Book(
    author.value,
    title.value,
    pages.value,
    bookStatus.value
  );
  let newBookElement = bookToElement(newBook);
  for (let prop in newBookElement) {
    libraryElement.append(newBookElement[prop]);
  }
  modal.className = "off";
});
