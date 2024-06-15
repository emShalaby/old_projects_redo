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
  let item = bookToElement(book);
  libraryElement.append(item);
}
function displayLibraryBooks() {
  myLibrary.forEach((book) => {
    let element = bookToElement(book);
    libraryElement.append(element);
  });
}
function bookToElement(bookObj) {
  let item = document.createElement("div");
  item.className = "book";
  let p = document.createElement("p");
  p.textContent = bookObj.title;
  item.append(p);
  return item;
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
  libraryElement.append(newBookElement);
  modal.className = "off";
});
