const body = document.querySelector("body");
const main = document.querySelector("#main");
let container = document.createElement("div");
container.id = "container";
let square = "";
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    square = document.createElement("div");
    square.className = "square";
    container.append(square);
  }
}
main.append(container);
