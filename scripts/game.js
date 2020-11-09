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

// function updatePlayerScore(result, currentScore) {
//   const playerScore = document.querySelector(".player-score");
//   if (result == true) {
//     currentScore++
//     playerScore.textContent = `Your score: ${currentScore}`;
//     return currentScore;
//   }
//   else {
//     return currentScore;
//   }
// }

// function updateComputerScore(result, currentScore) {
//   const computerScore = document.querySelector(".computer-score");
//   if (result == false) {
//     currentScore++
//     computerScore.textContent = `Computer's score: ${currentScore}`;
//     return currentScore;
//   }
//   else {
//     return currentScore;
//   }
// }


function game() {

  const btns = document.querySelectorAll("button");
  const playerScoreDisplay = document.querySelector(".player-score");
  const computerScoreDisplay = document.querySelector(".computer-score");

  // function counter() {
  //   let count = 0;

  //   return () => {
  //     count++;
  //     return count;
  //   };
  // }

  // let playerScore = counter();
  // let computerScore = counter();

  let playerScore = 0;
  let computerScore = 0;

  btns.forEach(button => button.addEventListener("click", (event) => {
    let result = playRound(event);
    updateScore(result);
  }));

  function updateScore(result) {
    if (result == true ) {
      playerScore++;
      playerScoreDisplay.textContent = `Your score: ${playerScore}`;
    }
    else if (result == false) {
      computerScore++;
      computerScoreDisplay.textContent = `Computer's score: ${computerScore}`;
    }
  }
}
