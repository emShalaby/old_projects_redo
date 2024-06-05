const body = document.querySelector("body");
const main = document.querySelector("#main");
let container = document.createElement("div");
container.id = "container";
let square = "";
let row = "";

for (let i = 0; i < 16; i++) {
  row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 16; j++) {
    square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", (x) => {
      x.currentTarget.style.backgroundColor = "black";
      console.log("hi");
    });
    row.append(square);
  }
  container.append(row);
}
main.append(container);
