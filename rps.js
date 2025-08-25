/* RPS for The Odin Project */
/* Solution by Harry Coburn */

let humanScore = 0
let computerScore = 0

// Event Handler
const buttonUI = document.querySelector("#buttons");
buttonUI.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log("Rock clicked");
            playGame("rock")
            break;
        case 'paper':
            console.log("Paper clicked");
            playGame("scissors")
            break;
        case 'scissors':
            console.log("Scissors clicked");
            playGame("paper")
            break;
    }
})


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

function getHumanChoice() {
    /* Note that, for the console version, we are assuming correct inputs every time.
    If the input is invalid, the computer will win the round.
    */
    return prompt("Do you throw rock, paper, or scissors?: ");
}

function playRound(humanChoice, computerChoice) {
    cleanHumanChoice = humanChoice.toLowerCase().trim()
    // Tie with Computer
    if (cleanHumanChoice === computerChoice) {
        console.log("You tied! The score remains the same.")
        console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
        return
    }
    // Check who wins
    if ((cleanHumanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("You throw rock and the computer throws scissors. You win!")
        handleScore("human")
    } else if ((cleanHumanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You throw paper and the computer throws rock. You win!")
        handleScore("human")
    } else if ((cleanHumanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("You throw scissors and the computer throws paper. You win!")
        handleScore("human")
    } else { // Computer wins
        console.log(`You throw ${cleanHumanChoice} and the computer throws ${computerChoice}. You lose!`)
        handleScore("computer")
    }    
}

function handleScore(whoWon) {
    if (whoWon === "human") {
        humanScore += 1
    } else {
        computerScore += 1
    }
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
    return
}

function playGame(choice) {
    console.log(`
Rock Paper Scissors
        
Game is played over five rounds. Ties do not score.
Incorrect inputs give the computer the round!`)
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
            console.log("The player wins the RPS game! Go eat a cookie as your reward.")
        } else if (humanScore === computerScore) {
            console.log("The game is a tie! You'll need to play again to see who is superior.")
        } else {
            console.log("The computer wins the RPS game! Sadness...")
        }
}

playGame()