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
    return getUserChoice();
  }
  else {
    userChoice = capitalise(userChoice);
    if (userChoice == "Rock" || userChoice == "Paper" || userChoice == "Scissors") {
      return userChoice;
    }
    else {
      alert("Please enter a valid choice");
      return getUserChoice();
    }
  }
}

function capitalise(userChoice) {
  let allLowerCase = userChoice.toLowerCase();
  let capitalisedString = allLowerCase.substr(0,1).toUpperCase() + allLowerCase.substr(1);
  return capitalisedString;
}

function playRound() {
  let playerWin;
  let playerSelection = getUserChoice();
  let computerSelection = computerPlay();

  if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper" ) {
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerWin = true;
    return playerWin;
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    playerWin = false;
    return playerWin;
  }
  else {
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}`);
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
