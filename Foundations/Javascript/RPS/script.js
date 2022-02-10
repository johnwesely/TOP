/* simple rock, paper, scissors game built to practice manipulating DOM elements
** using JavaScript */

// button elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const restartButton = document.getElementById("restart");

// button event listeners
let nextRound = rpsRound;
rockButton.onclick = () => nextRound("Rock");
paperButton.onclick = () => nextRound("Paper");
scissorsButton.onclick = () => nextRound("Scissors");
restartButton.onclick = () => restartGame();

// globals for score
let roundCount = 0;
let playerScore = 0;
let ComputerScore = 0;

function formatPlayerString(playerString) {
    return playerString.slice(0, 1).toUpperCase() + playerString.slice(1).toLowerCase()
}

function computerPlay() {
    const plays = [ "Rock", "Paper", "Scissors" ]
    const randomNumber = (Math.random() * 10000000) % 3;

    return plays[Math.floor(randomNumber)]
}

function rpsRound(playersMove) {
    const computersMove = computerPlay()
    let validPlay = false

    if (computersMove == playersMove) {
        console.log("tie");
        document.querySelector("#round-outcome").textContent = `When both players select ${computersMove}, it's a tie.`;
        return;
    }

    if (computersMove === "Rock") {
        if (playersMove === "Paper") {
            addPlayerScore("Paper", "Rock");
        } else {
            addComputerScore("Scissors", "Rock");
        }
    } else if (computersMove === "Paper") {
        if (playersMove === "Scissors") {
            addPlayerScore("Scissors", "Paper");
        } else {
            addComputerScore("Rock", "Paper");
        }
    } else {
        if (playersMove === "Rock") {
            addPlayerScore("Rock", "Scissors");
        } else {
            addComputerScore("Rock", "Paper");
        }
    }

    if (roundCount === 5) {
        endGame();
    }
}

function addPlayerScore(userPlay, computerPlay) {
    ++playerScore;
    ++roundCount;

    // add tally to player score in browser
    const PlayerScoreParent = document.querySelector("#player-score-container");
    const pointSquare = document.createElement("div");
    pointSquare.classList.add("player-score");
    PlayerScoreParent.appendChild(pointSquare);

    const roundOutcome = document.querySelector("#round-outcome");
    roundOutcome.textContent = `CONGRATULATIONS!!! ${userPlay} beats ${computerPlay}!!!!!`

}

function addComputerScore(userPlay, computerPlay) {
    ++ComputerScore;
    ++roundCount;

    const ComputerScoreParent = document.querySelector("#computer-score-container");
    const pointSquare = document.createElement("div");
    pointSquare.classList.add("computer-score");
    ComputerScoreParent.appendChild(pointSquare);

    const roundOutcome = document.querySelector("#round-outcome");
    roundOutcome.textContent = `OUCH!!!! This must really hurt. ${computerPlay} beats ${userPlay}!!!!!`
}

function endGame() {
    document.querySelector("#round-outcome").textContent = `You ${(playerScore > ComputerScore) ? "Win" : "Lose"}!`
    nextRound = () => {
        return;
    };
}

function restartGame() {
    document.querySelector("#round-outcome").textContent = "";
    roundCount = 0;
    playerScore = 0;
    ComputerScore = 0;
    nextRound = rpsRound;

    removeAllChildNodes(document.querySelector("#player-score-container"));
    removeAllChildNodes(document.querySelector("#computer-score-container"));
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}