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

function capitalise(userChoice) {
  let capitalisedString = userChoice.substr(0,1).toUpperCase() + userChoice.substr(1);
  return capitalisedString;
}

function playRound(event) {
  let playerWin;
  let playerSelection = capitalise(event.target.value);
  let computerSelection = computerPlay();

  const choices = document.querySelector(".choices");
  const result = document.querySelector(".result");

  if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper" ) {
    choices.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerWin = true;
    return playerWin;
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
    choices.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
    playerWin = false;
    return playerWin;
  }
  else {
    choices.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`
    result.textContent = "It's a draw!";
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

  const btns = document.querySelectorAll("button");
  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");

  btns.forEach(button => button.addEventListener("click", function(event) {
    let result = playRound(event);

    if (result == true) {
      playerWins++;
      playerScore.textContent = `Your score: ${playerWins}`;
    }
    else if (result == false) {
      computerWins++;
      computerScore.textContent = `Computer's score: ${computerWins}`;
    }

  }));
}
