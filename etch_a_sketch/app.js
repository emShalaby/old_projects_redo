const body = document.querySelector("body");
const main = document.querySelector("#main");
const sizeBtn = document.querySelector("#size");

let square = "";
let row = "";

function createGrid() {
  document.querySelector("#container")?.remove();
  let container = document.createElement("div");
  container.id = "container";
  for (let i = 0; i < 16; i++) {
    row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; j++) {
      square = document.createElement("div");
      square.className = "square";
      square.addEventListener("mouseover", (x) => {
        x.currentTarget.style.backgroundColor = "black";
      });
      row.append(square);
    }
    container.append(row);
  }
  main.append(container);
}
createGrid();
