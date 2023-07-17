function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    switch (randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    if (playerChoice === computerChoice) {
        return "TIE"
    } else if ((computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
               (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
               (computerChoice === 'PAPER' && playerChoice === 'ROCK')) {
        return "LOSS"
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
               (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
               (playerChoice === 'PAPER' && computerChoice === 'ROCK')) {
        return "WIN"
}
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose: Rock, Paper or Scissors").toUpperCase()
        let computerChoice = getComputerChoice()
        let outcome = playRound(playerChoice, computerChoice)
        
        switch (outcome) {
            case "WIN":
                playerScore++
                console.log("You win! " + playerChoice + " beats " + computerChoice)
                break
            case "LOSS":
                computerScore++
                console.log("You lose! " + computerChoice + " beats " + playerChoice)
                break
            case "TIE":
                console.log("It's a tie! " + playerChoice + " vs " + computerChoice)
        }
        console.log("Player: " + playerScore + "   Computer: " + computerScore)    
    }
    if (playerScore > computerScore) {
        console.log("YOU WON! The score was " + playerScore + " - " + computerScore)
    } else if (playerScore < computerScore) {
        console.log("YOU LOST! The score was " + playerScore + " - " + computerScore)
    } else {
        console.log("YOU TIED! The final score was " + playerScore + " - " + computerScore)
    }
}

game()