function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch(computerChoice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();

  if (playerChoice == "rock" && computerSelection == "Paper") {
    return "You lose! Paper beats Rock.";
  }
  else if (playerChoice == "rock" && computerSelection == "Scissors") {
    return "You win! Rock beats Scissors.";
  }
  else if (playerChoice == "paper" && computerSelection == "Rock") {
    return "You win! Paper beats Rock.";
  }
  else if (playerChoice == "paper" && computerSelection == "Scissors") {
    return "You lose! Scissors beats Paper.";
  }
  else if (playerChoice == "scissors" && computerSelection == "Paper") {
    return "You win! Scissors beats Paper.";
  }
  else if (playerChoice == "scissors" && computerSelection == "Rock") {
    return "You lose! Rock beats Scissors.";
  }
  else {
    return "It's a draw!";
  }
}
