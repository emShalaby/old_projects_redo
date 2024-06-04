function getHumanChoice() {
  return prompt("Enter your choice").toLowerCase();
}
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let rng = Math.floor(Math.random() * 3);
  return choice[rng];
}
