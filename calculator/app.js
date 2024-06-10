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
