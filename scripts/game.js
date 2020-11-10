function game() {

  const btns = document.querySelectorAll("button");
  const choices = document.querySelector(".choices");
  const roundResult = document.querySelector(".round-result");
  const playerScoreDisplay = document.querySelector(".player-score");
  const computerScoreDisplay = document.querySelector(".computer-score");
  const gameResult = document.querySelector(".game-result");

  let playerScore = 0;
  let computerScore = 0;

  btns.forEach(button => button.addEventListener("click", (event) => {
    let result = playRound(event);
    updateScore(result);
    checkScore();
  }));

  function playRound(event) {
    let playerWin;
    let playerSelection = capitalise(event.target.value);
    let computerSelection = computerPlay();

    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper" ) {
      choices.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`;
      roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
      playerWin = true;
      return playerWin;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
      choices.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`
      roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
      playerWin = false;
      return playerWin;
    }
    else {
      choices.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`
      roundResult.textContent = "It's a draw!";
      playerWin = undefined;
      return playerWin;
    }
  }

  function capitalise(userChoice) {
    let capitalisedString = userChoice.substr(0,1).toUpperCase() + userChoice.substr(1);
    return capitalisedString;
  }

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

  function checkScore() {
    if (playerScore == 5) {
      choices.textContent = "";
      roundResult.textContent = "";
      gameResult.textContent = "Congratulations! You won the game!";
    }
    else if (computerScore == 5) {
      choices.textContent = "";
      roundResult.textContent = "";
      gameResult.textContent = "Commiserations! You lost the game!";
    }
    else return;
  }
}

//   function reset() {
//     choices.textContent = "";
//     roundResult.textContent = "";
//     playerScoreDisplay.textContent = "Your score: 0";
//     computerScoreDisplay.textContent = "Computer's score: 0";
//     playerScore = 0;
//     computerScore = 0;
//   }
//
