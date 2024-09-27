function getComputerChoice() {
  const rng = Math.floor(Math.random() * 3);
  if (rng === 1) {
    return "ROCK";
  } else if (rng === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You win!", humanChoice, " beats ", computerChoice);
    humanScore++;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You win!", humanChoice, " beats ", computerChoice);
    humanScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You win!", humanChoice, " beats ", computerChoice);
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Tie!", humanChoice, " against ", computerChoice);
  } else {
    console.log("You lose!", humanChoice, " doesn't beat ", computerChoice);
    computerScore++;
  }
}

function playGame() {
  console.log("The game starts!");
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("Final score is: ", humanScore, " - ", computerScore);
  if (humanScore > computerScore) console.log("You won the game!");
  else console.log("You lost, better luck next time!");
}

let humanScore = 0;
let computerScore = 0;
playGame();
