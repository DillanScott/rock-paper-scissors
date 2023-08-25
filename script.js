// GAME LOGIC

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice + "  " + computerChoice);
    if (playerChoice === computerChoice) {
        roundWinner = "TIE";
    } else if ((computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
        (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
        (computerChoice === 'PAPER' && playerChoice === 'ROCK')) {
        computerScore++;
        roundWinner = "COMPUTER";
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK')) {
        playerScore++;
        roundWinner = "PLAYER";
    }
    updateScoreboard(roundWinner, playerChoice, computerChoice);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

// UI

const outcome = document.getElementById("outcome");
const outcomeInfo = document.getElementById("outcomeInfo");
const playerScoreDisp = document.getElementById("playerScore");
const computerScoreDisp = document.getElementById("computerScore");
const playerChoiceDisp = document.getElementById("playerChoice");
const computerChoiceDisp = document.getElementById("computerChoice");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const endGameWindow = document.getElementById("endGameWindow");
const playAgainBtn = document.getElementById("playAgainBtn");
const finalResult = document.getElementById("finalResult");

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
playAgainBtn.addEventListener("click", () => location.reload());


function handleClick(playerChoice) {
    if (isGameOver()) {
        showEndGameWindow();
        console.log("GAME OVER!");
        return;
    }

    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateChoice(playerChoiceDisp, playerChoice);
    updateChoice(computerChoiceDisp, computerChoice);
    updateScore();

    if (isGameOver()) {
        console.log("GAME OVER!");
        showEndGameWindow();
    }
}

function updateChoice(playerDisp, choice) {
    switch (choice) {
        case "ROCK":
            playerDisp.textContent = "✊";
            break;
        case "PAPER":
            playerDisp.textContent = "✋";
            break;
        case "SCISSORS":
            playerDisp.textContent = "✌";
    }
}

function updateScore() {
    if (roundWinner === 'TIE') {
        outcome.textContent = "It's a tie!";
    } else if (roundWinner === 'PLAYER') {
        outcome.textContent = 'You won!';
    } else if (roundWinner === 'COMPUTER') {
        outcome.textContent = 'You lost!';
    }

    playerScoreDisp.textContent = `Player: ${playerScore}`;
    computerScoreDisp.textContent = `Computer: ${computerScore}`;
}

function updateScoreboard(winner, playerChoice, computerChoice) {
    if (winner === 'PLAYER') {
        outcomeInfo.textContent = `${playerChoice} beats ${computerChoice}`;
        return;
    }
    if (winner === 'COMPUTER') {
        outcomeInfo.textContent = `${playerChoice} is beaten by 
            ${computerChoice}`;
        return;
    }

    outcomeInfo.textContent = `${playerChoice} ties with 
        ${ computerChoice}`;
}

function showEndGameWindow() {
    if (playerScore > computerScore) {
        finalResult.textContent = `You won. The score was ${playerScore} - ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        finalResult.textContent = `You lost. The score was ${playerScore} - ${computerScore}`;
    }
    endGameWindow.style.visibility = "visible";
}
