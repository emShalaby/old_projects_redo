//i skipped the error handling steps as the best way i can do that rn is thorugh if statements so its just whatever
// also skipped dealing with long decimals
const btnList = document.querySelectorAll(".visible");
const screen = document.querySelector("#screen");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");
const operators = ["+", "x", "/", "-"];
const backSpaceBtn = document.querySelector("#del");
let screenArr = [""]; //array of everything being typed on screen

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
function updateScreen(str) {
  screen.textContent += str;
  if (
    !operators.includes(str) &&
    !operators.includes(screenArr[screenArr.length - 1])
  ) {
    screenArr[screenArr.length - 1] += str;
  } else screenArr.push(str);
}
function clearScreen() {
  screen.textContent = "";
  screenArr = [""];
}
function evalulation() {
  if (operate(screenArr)) {
    screen.textContent = "";
    updateScreen(operate(screenArr));
    screenArr = [screen.textContent];
  }
}
function Delete() {
  screen.textContent
    ? (screen.textContent = screen.textContent.slice(0, "-1"))
    : true;
  screenArr[screenArr.length - 1].length > 1
    ? (screenArr[screenArr.length - 1] = screenArr[screenArr.length - 1].slice(
        0,
        -1
      ))
    : screenArr.pop();
  if (screenArr.length == 0) screenArr.push("");
}

clearBtn.addEventListener("click", clearScreen);
equalBtn.addEventListener("click", evalulation);
btnList.forEach((btn) =>
  btn.addEventListener("click", () => updateScreen(btn.textContent))
);
backSpaceBtn.addEventListener("click", Delete);
