const myLibrary = ["book1", "book2", "book3"];
const libraryElement = document.querySelector("#library");

function Book() {}
function addBookToLibrary() {}
function displayBooks() {
  myLibrary.forEach((element) => {
    let item = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = element;
    item.append(p);
    libraryElement.append(item);
  });
}
displayBooks();
