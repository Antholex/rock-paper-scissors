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

function capitalise(userChoice) {
  let capitalisedString = userChoice.substr(0,1).toUpperCase() + userChoice.substr(1);
  return capitalisedString;
}

function playRound() {
  let playerWin;
  let playerSelection = getUserChoice();
  let computerSelection = computerPlay();

  if (playerSelection == "rock" && computerSelection == "Paper") {
    console.log("You chose Rock. The computer chose Paper.")
    console.log("You lose! Paper beats Rock.");
    playerWin = false;
    return playerWin;
  }
  else if (playerSelection == "rock" && computerSelection == "Scissors") {
    console.log("You chose Rock. The computer chose Scissors.")
    console.log("You win! Rock beats Scissors.");
    playerWin = true;
    return playerWin;
  }
  else if (playerSelection == "paper" && computerSelection == "Rock") {
    console.log("You chose Paper. The computer chose Rock.")
    console.log("You win! Paper beats Rock.");
    playerWin = true;
    return playerWin;
  }
  else if (playerSelection == "paper" && computerSelection == "Scissors") {
    console.log("You chose Paper. The computer chose Scissors.")
    console.log("You lose! Scissors beats Paper.");
    playerWin = false;
    return playerWin;
  }
  else if (playerSelection == "scissors" && computerSelection == "Paper") {
    console.log("You chose Scissors. The computer chose Paper.")
    console.log("You win! Scissors beats Paper.");
    playerWin = true;
    return playerWin;
  }
  else if (playerSelection == "scissors" && computerSelection == "Rock") {
    console.log("You chose Scissors. The computer chose Rock.")
    console.log("You lose! Rock beats Scissors.");
    playerWin = false;
    return playerWin;
  }
  else {
    console.log("You chose " + capitalise(playerSelection) + ". The computer chose " + computerSelection + ".");
    console.log("It's a draw!");
    playerWin = undefined;
    return playerWin;
  }
}

function result(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  }
  else if (computerScore > playerScore) {
    console.log("Commiserations! You lost the game!");
  }
  else {
    console.log("You neither won or lost; the game is a draw!");
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      let winner = playRound();
      if (winner == true) {
        ++playerWins;
      }
      else if (winner == false) {
        ++computerWins;
      }
      alert("Play next round");
    }
    else {
      let winner = playRound();

      if (winner == true) {
        ++playerWins;
      }
      else if (winner == false) {
        ++computerWins;
      }
      alert("Finish game");
    }
  }
  result(playerWins, computerWins);
}
