const myLibrary = [
  new Book("abc", "abc", "abc"),
  new Book("abc", "abc", "abc"),
  new Book("cba", "cba", "cba"),
];
const libraryElement = document.querySelector("#library");
const newBookBtn = document.querySelector("#newbook");
const modal = document.querySelector("#book_modal");
const submitBtn = document.querySelector("#submit");
let author = document.querySelector("#author");
let title = document.querySelector("#title");
let pages = document.querySelector("#pages");

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
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

  let newBook = new Book(author.value, title.value, pages.value);
  let newBookElement = bookToElement(newBook);
  libraryElement.append(newBookElement);
  modal.className = "off";
});
