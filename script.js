const getComputerChoice = () => {
  const n = Math.trunc((Math.random() * 10) % 3) + 1;
  if (n === 1) return "rock";
  else if (n === 2) return "paper";
  else return "scissors";
};

const getHumanChoice = () => {
  const input = prompt(
    "Enter: r - for the rock, p - for the paper, s - for the scissors",
  ).toLowerCase();
  if (input === "r") return "rock";
  else if (input === "p") return "paper";
  else return "scissors";
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log(`Tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  };

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  const winner =
    humanScore > computerScore
      ? `You`
      : humanScore === computerScore
        ? `Nobody, it a TIE!`
        : `COMPUTER!`;
  console.log(
    `All round is over, the WINNER is ${winner} with score: ${humanScore} - ${computerScore}`,
  );
};

playGame();
