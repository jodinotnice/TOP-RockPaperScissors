function getComputerChoice() {
  let computerRandomChoice = Math.random();

  if (computerRandomChoice >= 0 && computerRandomChoice <= 0.33) {
    return "ROCK";
  } else if (computerRandomChoice >= 0.34 && computerRandomChoice <= 0.66) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors ?").toUpperCase();
}

let computerScore = 0;
let humanScore = 0;
for (let gameRound = 0; gameRound < 5; gameRound++) {
  function playGame() {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++;
        return console.log(
          `You lose! ${computerSelection} beats ${humanSelection}, You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "ROCK" && computerChoice === "ROCK") {
        return console.log(
          `It's a tie ! You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore++;
        return console.log(
          `You win! ${humanSelection} beats ${computerSelection},You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++;
        return console.log(
          `You lose! ${humanSelection} beats ${computerSelection},You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "PAPER" && computerChoice === "PAPER") {
        return console.log(
          `It's a tie ! You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
        return console.log(
          `You win! ${humanSelection} beats ${computerSelection}, You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++;
        return console.log(
          `You lose! ${humanSelection} beats ${computerSelection}, You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        return console.log(
          `It's a tie ! You: ${humanScore} - Computer: ${computerScore}`
        );
      } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore++;
        return console.log(
          `You win! ${humanSelection} beats ${computerSelection},You: ${humanScore} - Computer: ${computerScore}`
        );
      }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(humanSelection);
    console.log(computerSelection);

    playRound(humanSelection, computerSelection);
  }
  playGame();
}
