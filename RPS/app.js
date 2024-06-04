const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const btns = [rockBtn, paperBtn, scissorsBtn];
let roundCounter = 1;
let humanScore = 0;
let computerScore = 0;
let visualRoundCounter = document.querySelector("#round");
let visualComputerScore = document.querySelector("#computer-score");
let visualHumanScore = document.querySelector("#human-score");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    playRound(String(btn.id), getComputerChoice());
  })
);

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let rng = Math.floor(Math.random() * 3);
  return choice[rng];
}

function playRound(humanChoice, computerChoice) {
  if (roundCounter < 5) roundCounter++;
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("Draw");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! computer chose scissors");
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! computer chose paper");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! computer chose rock");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("Draw");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! computer chose paper");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! computer chose rock");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! computer chose scissors");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Draw");
  }
  updateScore(roundCounter);
}
function updateScore(round) {
  visualHumanScore.textContent = "Human score: " + humanScore;
  visualComputerScore.textContent = "Computer score: " + computerScore;
  visualRoundCounter.textContent = "Round: " + round;
}
