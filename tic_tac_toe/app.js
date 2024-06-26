function createPlayer(name, value) {
  return { name, value };
}

function game(
  name1 = "player1",
  name2 = "player2",
  value1 = "x",
  value2 = "o"
) {
  let board = ["", "", "", "", "", "", "", "", ""];
  let turn = 1;
  let player1 = createPlayer(name1, value1);
  let player2 = createPlayer(name2, value2);
  let playerToGo = player1;
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
      console.log(playerToGo.name);
    }
  }
  function add(index) {
    if (!board[index]) {
      board[index] = playerToGo.value;
      checkWinner();
      turn++;
      playerToGo = turn % 2 ? player1 : player2;
    }
  }
  return { board, add };
}

function Display() {}
