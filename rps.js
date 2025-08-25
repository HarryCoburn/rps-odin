/* RPS for The Odin Project */
/* Solution by Harry Coburn */

let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results-log")

// Event Handler for the user interface.
const buttonUI = document.querySelector("#buttons");
buttonUI.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':           
            playGame("rock");
            break;
        case 'paper':            
            playGame("scissors")
            break;
        case 'scissors':            
            playGame("paper")
            break;
    }
});


// Result logging
function addResult(text) {
    let newResult = document.createElement("p");
    newResult.textContent = text;
    results.appendChild(newResult)
}

// Computer chooses its choice randomly.
function getComputerChoice() {
    let seed = Math.floor((Math.random() * 3))
    switch (seed) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors";
        default:
            return "Seed is too large."
    }
}


function playRound(humanChoice, computerChoice) {
    
    // Tie with Computer
    if (humanChoice === computerChoice) {
        addResult("You tied! The score remains the same.")
        addResult(`Human: ${humanScore} | Computer: ${computerScore}`)
        return
    }
    // Check who wins
    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        addResult("You throw rock and the computer throws scissors. You win!")
        handleScore("human")
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        addResult("You throw paper and the computer throws rock. You win!")
        handleScore("human")
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        addResult("You throw scissors and the computer throws paper. You win!")
        handleScore("human")
    } else { // Computer wins
        addResult(`You throw ${humanChoice} and the computer throws ${computerChoice}. You lose!`)
        handleScore("computer")
    }
}

function handleScore(whoWon) {
    if (whoWon === "human") {
        humanScore += 1
    } else {
        computerScore += 1
    }
    addResult(`Human: ${humanScore} | Computer: ${computerScore}`)
    return
}

function playGame(choice) {
    //roundCount = 5
    //while (roundCount > 0) {
    computerChoice = getComputerChoice()
    humanChoice = choice
    playRound(humanChoice, computerChoice)
    //roundCount -= 1
    // }
    // endGame()   
}

function endGame() {
    if (humanScore > computerScore) {
        addResult("The player wins the RPS game! Go eat a cookie as your reward.")
    } else if (humanScore === computerScore) {
        addResult("The game is a tie! You'll need to play again to see who is superior.")
    } else {
        addResult("The computer wins the RPS game! Sadness...")
    }
}