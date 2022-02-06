rpsGame(5)

function formatPlayerString(playerString) {
    return playerString.slice(0, 1).toUpperCase() + playerString.slice(1).toLowerCase()
}

function computerPlay() {
    const plays = [ "Rock", "Paper", "Scissors" ]
    const randomNumber = (Math.random() * 10000000) % 3;

    return plays[Math.floor(randomNumber)]
}

function rpsRound() {
    const computersMove = computerPlay()
    let validPlay = false
    let playersMove = formatPlayerString(prompt("Rock, Paper, or, Scissors"))


    while (!validPlay) {
        if (playersMove === "Rock" || playersMove === "Paper" || playersMove == "Scissors") {
            validPlay = true;
        } else {
            playersMove = formatPlayerString(prompt("Invalid Entry: Choose Rock, Paper, or Scissors"))
        }
    }

    if (computersMove == playersMove) {
        return `It's a Tie!: both players chose ${computersMove}`
    }

    if (computersMove === "Rock") {
        if (playersMove === "Paper") {
            return "You Win!: Paper Beats Rock"
        } else {
            return "You Lose!: Rock Beats Scissors"
        }
    } else if (computersMove === "Paper") {
        if (playersMove === "Scissors") {
            return "You Win!: Scissors beats Paper"
        } else {
            return "You Lose!: Paper beats Rock"
        }
    } else {
        if (playersMove === "Rock") {
            return "You Win!: Rock Beats Scissors"
        } else {
            return "You Lose!: Paper Beats Rock"
        }
    }
}

function rpsGame(rounds) {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < rounds; ++i) {
        let gameOutcome = rpsRound()
        alert(gameOutcome)
        
        if (gameOutcome.slice(0, 5) === "You W") {
            ++playerScore
        } else if (gameOutcome.slice(0, 5) === "You L") {
            ++computerScore
        }
    }

    alert(`Player Score is ${playerScore}, Computer Score is ${computerScore}: ${(playerScore > computerScore) ? "You Win" : "You Lose"}`)
}