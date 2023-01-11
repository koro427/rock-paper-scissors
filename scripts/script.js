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
    let gameWinner;

    for (let i = 0; i < 5; i++) {
        if (computerWinCounter === 5 || playerWinCounter === 5) {
            break;
        }
        let roundWinner = playRound(getComputerChoice(), getPlayerChoice());
        if (roundWinner === "computer") {
            computerWinCounter++;
        } else if (roundWinner === "player") {
            playerWinCounter++;
        } else if (roundWinner === "draw") {
            drawCounter++;
            i--
        }
    }

    if (computerWinCounter === playerWinCounter) {
     gameWinner = "nobody";
    } else {
     gameWinner = (computerWinCounter > playerWinCounter) ? "Computer" : "Player";
    }
    
    console.log(`Computer won ${computerWinCounter} round(s). Player won ${playerWinCounter} round(s). ${drawCounter} draws. ${gameWinner} WINS!`);

}


game();