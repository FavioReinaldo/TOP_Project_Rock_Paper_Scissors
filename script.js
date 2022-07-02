//Game logic
let playerScore = 0;
let computerScore = 0;

document.querySelector("#reset").addEventListener("click", resetGame);

let playerChoiceBtn = document.querySelectorAll(".playerChoiceBtn"); //this generates an array with the 3 buttons
playerChoiceBtn.forEach((button) => {
  button.addEventListener("click", game);//button.value
});

function game(button) {
    let playerSelection = button.target.value;
  playRound(playerSelection, computerPlay());
  checkWinner();
}

//Functions

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  let roundWinCombo = `${playerSelection}-${computerSelection}`;
  let playerWinCombo = ["Rock-Scissors", "Paper-Rock", "Scissors-Paper"];

  if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    result = "Its a Tie!";
    updateDOM(playerScore, computerScore, result);
  } else if (playerWinCombo.includes(roundWinCombo)) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    updateDOM(playerScore, computerScore, result);
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    updateDOM(playerScore, computerScore, result);
  }

  return result;
}

function updateDOM(playerScore, computerScore, result) {
  document.querySelector("#playerScore").innerHTML = `${playerScore}`;
  document.querySelector("#computerScore").innerHTML = `${computerScore}`;
  document.querySelector("#result").innerHTML = `${result}`;
}

function checkWinner() {
  if (computerScore === 5 || playerScore === 5) {
    if (computerScore === playerScore) {
      document.querySelector("#result").innerHTML = "The game is a Tie!";
    } else if (playerScore > computerScore) {
      document.querySelector("#result").innerHTML = "You win the game!";
    } else {
      document.querySelector("#result").innerHTML = "You lost the game!";
    }
    endGame();
  }
}

function endGame(){
    playerChoiceBtn.forEach((button) => {
        button.removeEventListener("click", game);
    });
}

function resetGame(){
    location.reload(); 
}
