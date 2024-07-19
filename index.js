let computerScore = 0;
let humanScore = 0;

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.value = "ROCK";

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.value = "PAPER";

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.value = "SCISSORS";

const div = document.createElement("div");

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(div);

rock.addEventListener("click", () => playRound(rock.value));
paper.addEventListener("click", () => playRound(paper.value));
scissors.addEventListener("click", () => playRound(scissors.value));

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

function playRound(humanChoice) {
  const computerSelection = getComputerChoice();
  if (humanChoice === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `You lose! ${computerSelection} beats ${humanChoice}, You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "ROCK" && computerSelection === "ROCK") {
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `It's a tie ! You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "ROCK" && computerSelection === "SCISSORS") {
    humanScore++;
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `You win! ${humanChoice} beats ${computerSelection},You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `You lose! ${humanChoice} beats ${computerSelection},You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "PAPER" && computerSelection === "PAPER") {
    return humanScore > 5 || computerScore > 5
      ? (div.innerText = `It's a tie ! You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "PAPER" && computerSelection === "ROCK") {
    humanScore++;
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `You win! ${humanChoice} beats ${computerSelection}, You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `You lose! ${humanChoice} beats ${computerSelection}, You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "SCISSORS" && computerSelection === "SCISSORS") {
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `It's a tie ! You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  } else if (humanChoice === "SCISSORS" && computerSelection === "PAPER") {
    humanScore++;
    return humanScore >= 5 || computerScore >= 5
      ? (div.innerText = `You win! ${humanChoice} beats ${computerSelection},You: ${humanScore} - Computer: ${computerScore}`)
      : "";
  }
}
