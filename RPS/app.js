const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const btns = [rockBtn, paperBtn, scissorsBtn];
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    playGame(String(btn.id), getComputerChoice());
  })
);


function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let rng = Math.floor(Math.random() * 3);
  return choice[rng];
}

function playGame(humanChoice = "", computerChoice = "") {
  let humanScore = 0;
  let computerScore = 0;
  let visualComputerScore = document.querySelector("#computer-score");
  let visualHumanScore = document.querySelector("#human-score");
  function playRound() {
    if (humanChoice == "rock" && computerChoice == "rock") {
      console.log("Draw");
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! computer chose scissors");
      humanScore++;
      visualHumanScore.textContent = "Human score: " + humanScore;
      return;
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! computer chose paper");
      computerScore++;
      visualComputerScore.textContent = "Computer score: " + computerScore;
      return;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! computer chose rock");
      computerScore++;
      visualComputerScore.textContent = "Computer score: " + computerScore;
      return;
    }
    if (humanChoice == "scissors" && computerChoice == "scissors") {
      console.log("Draw");
      return;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! computer chose paper");
      humanScore++;
      visualHumanScore.textContent = "Human score: " + humanScore;
      return;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! computer chose rock");
      humanScore++;
      visualHumanScore.textContent = "Human score: " + humanScore;
      return;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! computer chose scissors");
      computerScore++;
      visualComputerScore = "Computer score: " + computerScore;
      return;
    }
    if (humanChoice == "paper" && computerChoice == "paper") {
      console.log("Draw");
      return;
    }
  }
  playRound();
}
