const myLibrary = ["book1", "book2", "book3"];
const libraryElement = document.querySelector("#library");
const newBookBtn = document.querySelector("#newbook");
const modal = document.querySelector("#book_modal");
const submitBtn = document.querySelector("#submit");

function Book() {}
function addBookToLibrary(book) {
  myLibrary.push(book);
  let item = bookToElement(book);
  libraryElement.append(item);
}
function displayLibraryBooks() {
  myLibrary.forEach((book) => {
    let item = bookToElement(book);
    libraryElement.append(item);
  });
}
function bookToElement(book) {
  let item = document.createElement("div");
  item.className = "book";
  let p = document.createElement("p");
  p.textContent = book;
  item.append(p);
  return item;
}

displayLibraryBooks();
newBookBtn.addEventListener("click", () => {
  modal.className = "on";
});
submitBtn.addEventListener("click", (event) => {
  modal.className = "off";
  event.preventDefault();
});
