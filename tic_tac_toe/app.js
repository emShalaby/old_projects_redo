function createPlayer(name, value) {
  return { name, value };
}

function game(
  name1 = "Player1",
  name2 = "Player2",
  value1 = "x",
  value2 = "o"
) {
  let board = ["", "", "", "", "", "", "", "", ""];
  let turn = 1;
  let player1 = createPlayer(name1, value1);
  let player2 = createPlayer(name2, value2);
  let playerToGo = player1;
  let boardElement = DisplayBoard(board);
  let gameState = true;
  let result = document.querySelector("#result");
  boardElement.initialBoard();
  //i dont know where to fit this logic
  let squares = Array.from(document.querySelectorAll(".square"));
  squares.forEach((square) =>
    square.addEventListener("click", () => {
      if (!square.textContent && gameState) {
        square.textContent = playerToGo.value;
        board[squares.indexOf(square)] = playerToGo.value;
        checkWinner();
        turn++;
        playerToGo = turn % 2 ? player1 : player2;
      }
    })
  );

  function checkWinner() {
    if (
      (board[0] == board[1] && board[0] == board[2] && board[0] != "") ||
      (board[3] == board[4] && board[3] == board[5] && board[3] != "") ||
      (board[6] == board[7] && board[6] == board[8] && board[6] != "") ||
      (board[0] == board[4] && board[0] == board[8] && board[0] != "") ||
      (board[2] == board[4] && board[2] == board[6] && board[2] != "") ||
      (board[0] == board[3] && board[0] == board[6] && board[0] != "") ||
      (board[1] == board[4] && board[1] == board[7] && board[1] != "") ||
      (board[2] == board[5] && board[2] == board[8] && board[2] != "")
    ) {
      gameState = false;
      result.textContent = playerToGo.name + " Wins!";
      return;
    }
    if (!board.includes("")) result.textContent = "Draw!";
  }

  return { board };
}

function DisplayBoard(board) {
  function initialBoard() {
    const main = document.querySelector("#main");
    let boardElement = document.createElement("div");
    let squareElements = [];
    boardElement.id = "board";
    for (let i = 0; i < 9; i++) {
      squareElements[i] = document.createElement("div");
      squareElements[i].className = "square";
      squareElements[i].textContent = board[i];
      boardElement.append(squareElements[i]);
    }
    main.append(boardElement);
  }
  function addToBoard(index, value) {
    let squares = document.querySelectorAll(".square");
    squares[index].textContent = value;
  }
  return { addToBoard, initialBoard };
}
function gameWipe() {
  let board = document.querySelector("#board");
  let result = document.querySelector("#result");
  if (board) board.remove();
  result.textContent = "";
}
(function startGame() {
  const startBtn = document.querySelector("#start");

  startBtn.addEventListener("click", () => {
    const player1 = document.querySelector("#player1").value;
    const player2 = document.querySelector("#player2").value;
    gameWipe();
    game((name1 = player1), (name2 = player2));
  });
})();
