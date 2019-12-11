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

function getUserChoice() {
  let userChoice = prompt("Please choose Rock, Paper, or Scissors", "");

  if (userChoice == "" || userChoice == null) {
    alert("Please enter a valid choice");
    getUserChoice();
  }
  else {
    userChoice = userChoice.toLowerCase();
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
      return userChoice;
    }
    else {
      alert("Please enter a valid choice");
      getUserChoice();
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "Paper") {
    return "You lose! Paper beats Rock.";
  }
  else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return "You win! Rock beats Scissors.";
  }
  else if (playerSelection == "paper" && computerSelection == "Rock") {
    return "You win! Paper beats Rock.";
  }
  else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return "You lose! Scissors beats Paper.";
  }
  else if (playerSelection == "scissors" && computerSelection == "Paper") {
    return "You win! Scissors beats Paper.";
  }
  else if (playerSelection == "scissors" && computerSelection == "Rock") {
    return "You lose! Rock beats Scissors.";
  }
  else {
    return "It's a draw!";
  }
}

function game() {
  let playerChoice = getUserChoice();
  let computerChoice = computerPlay();
  let outcome = playRound (playerChoice, computerChoice);

  return outcome;
}
