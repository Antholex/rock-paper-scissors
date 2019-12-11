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
    console.log("You chose Rock. The computer chose Paper.")
    console.log("You lose! Paper beats Rock.");
  }
  else if (playerSelection == "rock" && computerSelection == "Scissors") {
    console.log("You chose Rock. The computer chose Scissors.")
    console.log("You win! Rock beats Scissors.");
  }
  else if (playerSelection == "paper" && computerSelection == "Rock") {
    console.log("You chose Paper. The computer chose Rock.")
    console.log("You win! Paper beats Rock.");
  }
  else if (playerSelection == "paper" && computerSelection == "Scissors") {
    console.log("You chose Paper. The computer chose Scissors.")
    console.log("You lose! Scissors beats Paper.");
  }
  else if (playerSelection == "scissors" && computerSelection == "Paper") {
    console.log("You chose Scissors. The computer chose Paper.")
    console.log("You win! Scissors beats Paper.");
  }
  else if (playerSelection == "scissors" && computerSelection == "Rock") {
    console.log("You chose Scissors. The computer chose Rock.")
    console.log("You lose! Rock beats Scissors.");
  }
  else {
    console.log("You chose " + playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1) + ". The computer chose " + computerSelection + ".");
    console.log("It's a draw!");
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      let playerChoice = getUserChoice();
      let computerChoice = computerPlay();
      playRound(playerChoice, computerChoice);
      alert("Play next round");
    }
    else {
      let playerChoice = getUserChoice();
      let computerChoice = computerPlay();
      playRound(playerChoice, computerChoice);
      alert("Finish game");
    }
  }
}
