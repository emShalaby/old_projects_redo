const btnList = document.querySelectorAll(".visible");
const screen = document.querySelector("#screen");
btnList.forEach((btn) =>
  btn.addEventListener("click", () => (screen.textContent += btn.id))
);
function add() {
  return [...arguments].reduce((total, currentItem) => total + currentItem);
}
function subtract() {
  return [...arguments].reduce((total, currentItem) => total - currentItem);
}
function multiply() {
  return [...arguments].reduce((total, currentItem) => total * currentItem);
}

function divide() {
  return [...arguments].reduce((total, currentItem) => total / currentItem);
}
//recursive function that keeps operating on arguments untill 1 is left then returns it
function operate(arr) {
  if (arr.length == 1) return arr[0];
  //check for operation type
  if (arr[1] == "+")
    return operate([add(Number(arr[0]), Number(arr[2]))].concat(arr.slice(3)));
  else if (arr[1] == "-")
    return operate(
      [subtract(Number(arr[0]), Number(arr[2]))].concat(arr.slice(3))
    );
  else if (arr[1] == "x")
    return operate(
      [multiply(Number(arr[0]), Number(arr[2]))].concat(arr.slice(3))
    );
  else if (arr[1] == "/")
    return operate(
      [divide(Number(arr[0]), Number(arr[2]))].concat(arr.slice(3))
    );
}
