let humanScore = 0;
let computerScore = 0;

const humanStars = document.querySelectorAll(".score__human-stars svg");
const computerStars = document.querySelectorAll(".score__computer-stars svg");

const getComputerChoice = () => {
  const n = Math.trunc((Math.random() * 10) % 3) + 1;
  if (n === 1) return "rock";
  else if (n === 2) return "paper";
  else return "scissors";
};

const playRound = (humanChoice) => {
  if (humanScore === 5 || computerScore === 5) {
    alert("Game is over! Refresh page to start a new game!");
    return;
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log(`Tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    humanStars[humanScore - 1].style.fill = "gold";
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    computerStars[computerScore - 1].style.fill = "gold";
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`Score: You [${humanScore}] - Computer [${computerScore}]`);

  if (humanScore === 5) {
    console.log("YOU WON!");
    setTimeout(() => alert("YOU WON!"), 100);
  } else if (computerScore === 5) {
    console.log("COMPUTER WON!");
    setTimeout(() => alert("COMPUTER WON!"), 100);
  }
};

const btnRock = document.querySelector(".content__rock");
const btnPaper = document.querySelector(".content__paper");
const btnScissors = document.querySelector(".content__scissors");

btnRock.addEventListener("click", () => playRound("rock"));
btnPaper.addEventListener("click", () => playRound("paper"));
btnScissors.addEventListener("click", () => playRound("scissors"));
