console.log("Hello, World!");


function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    return randomChoice;
}


function getPlayerChoice () {
    let playerAnswer = prompt("type rock, paper, or scissor").toLowerCase();
    return playerAnswer;
}

function playRound(computerChoice, playerChoice) {
    let result;
    if (computerChoice === playerChoice) {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. ITS A DRAW`);
        result = "draw";
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. Player wins this round!`);
        result = "player";
    } else if (computerChoice === "rock" && playerChoice === "scissor") {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. Computer wins this round!`);
        result = "computer";
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. Computer wins this round!`);
        result = "computer";
    } else if (computerChoice === "paper" && playerChoice === "scissor") {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. Player wins this round!`);
        result = "player";
    } else if (computerChoice === "scissor" && playerChoice === "rock") {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. Player wins this round!`);
        result = "player";
    } else if (computerChoice === "scissor" && playerChoice === "paper") {
        console.log(`Computers ${computerChoice} VS Players ${playerChoice}. Computer wins this round!`);
        result = "computer";
    }
    return result;
}

function game() {

    let computerWinCounter = 0;
    let playerWinCounter = 0;
    let drawCounter = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        let winner = playRound(getComputerChoice(), getPlayerChoice());
        if (winner === "computer") {
            computerWinCounter++;
        } else if (winner === "player") {
            playerWinCounter++;
        } else {
            drawCounter++;
        }
    }

    if (computerWinCounter === playerWinCounter) {
        winner = "nobody";
    } else {
        winner = (computerWinCounter > playerWinCounter) ? "Computer" : "Player";
    }
    
    console.log(`Computer won ${computerWinCounter} round(s). Player won ${playerWinCounter} round(s). ${drawCounter} draws. ${winner} WINS!`);

}


game();