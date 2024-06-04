function getHumanChoice() {
  return prompt("Enter your choice").toLowerCase();
}
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let rng = Math.floor(Math.random() * 3);
  return choice[rng];
}

function playRound(
  humanChoice = getHumanChoice(),
  computerChoice = getComputerChoice()
) {
  let humanScore = 0;
  let computerScore = 0;
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("Draw");
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! computer chose scissors");
    humanScore++;
    return;
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! computer chose paper");
    computerScore++;
    return;
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! computer chose rock");
    computerScore++;
    return;
  }
  if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("Draw");
    return;
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! computer chose paper");
    humanScore++;
    return;
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! computer chose rock");
    humanScore++;
    return;
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! computer chose scissors");
    computerScore++;
    return;
  }
  if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Draw");
    return;
  }
}
playRound();
