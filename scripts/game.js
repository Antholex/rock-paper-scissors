function game() {

  const playerChoice = document.querySelectorAll(".player-choice");
  const choices = document.querySelector(".choices");
  const roundResult = document.querySelector(".round-result");
  const playerScoreDisplay = document.querySelector(".current-player-score");
  const computerScoreDisplay = document.querySelector(".current-computer-score");
  const gameResult = document.querySelector(".game-result");
  const startGame = document.querySelector(".start-game");
  const nextRound = document.querySelector(".next-round");
  const newGame = document.querySelector(".new-game");
  const choicesText = document.querySelector(".choices-text");
  const newGameText = document.querySelector(".new-game-text");
  const nextRoundText = document.querySelector(".next-round-text");

  let playerScore = 0;
  let computerScore = 0;

  playerScoreDisplay.textContent = `${playerScore}`;
  computerScoreDisplay.textContent = `${computerScore}`;

  startGame.addEventListener("click", () => {
    beginGame();
  } )

  playerChoice.forEach(button => button.addEventListener("click", (event) => {
    let result = playRound(event);
    updateScore(result);
    checkScore();
    hidePlayerChoice();
  }));

  nextRound.addEventListener("click", () => {
    playNextRound();
  })

  newGame.addEventListener("click", () => {
    resetGame();
  });

  function beginGame() {
    startGame.classList.toggle("hidden");
    playerChoice.forEach(button => button.classList.toggle("hidden"));
    newGame.classList.toggle("hidden");
    newGameText.classList.toggle("hidden");
    choicesText.classList.toggle("hidden");
  }

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
      playerScoreDisplay.textContent = `${playerScore}`;
    }
    else if (result == false) {
      computerScore++;
      computerScoreDisplay.textContent = `${computerScore}`;
    }
  }

  function checkScore() {
    if (playerScore == 5) {
      gameResult.textContent = "Congratulations! You won the game!";
      nextRound.classList.toggle("hidden");
      nextRoundText.classList.toggle("hidden");
    }
    else if (computerScore == 5) {
      gameResult.textContent = "Commiserations! You lost the game!";
      nextRound.classList.toggle("hidden");
      nextRoundText.classList.toggle("hidden");
    }
    else return;
  }

  function hidePlayerChoice() {
    playerChoice.forEach(button => button.classList.toggle("hidden"));
    nextRound.classList.toggle("hidden");
    choicesText.classList.toggle("hidden");
    nextRoundText.classList.toggle("hidden");
  }

  function playNextRound() {
    playerChoice.forEach(button => button.classList.toggle("hidden"));
    nextRound.classList.toggle("hidden");
    choicesText.classList.toggle("hidden");
    nextRoundText.classList.toggle("hidden");
    choices.textContent = "";
    roundResult.textContent = "";
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameResult.textContent = "";
    choices.textContent = "";
    roundResult.textContent = "";
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
    playerChoice.forEach(button => button.classList.remove("hidden"));
    nextRound.classList.add("hidden");
    nextRoundText.classList.add("hidden");
    choicesText.classList.remove("hidden");
  }

}
