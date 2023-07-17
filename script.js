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

    if (playerChoice == computerChoice) {
        return "It's a tie! " + playerChoice + " vs " + computerChoice
    } else if ((computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
               (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
               (computerChoice === 'PAPER' && playerChoice === 'ROCK')) {
        return "You lose! " + computerChoice + " beats " + playerChoice
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
               (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
               (playerChoice === 'PAPER' && computerChoice === 'ROCK')) {
        return "You win! " + playerChoice + " beats " + computerChoice
}
}
