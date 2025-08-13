/* RPS for The Odin Project */
/* Solution by Harry Coburn */

let humanScore = 0
let computerScore = 0

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
        humanScore += 1    
    } else if ((cleanHumanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You throw paper and the computer throws rock. You win!")
        humanScore += 1    
    } else if ((cleanHumanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("You throw scissors and the computer throws paper. You win!")
        humanScore += 1    
    } else { // Computer wins
        console.log(`You throw ${cleanHumanChoice} and the computer throws ${computerChoice}. You lose!`)
        computerScore += 1
    }
    // Display score    
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
    return
}


/* Testing */


computerChoice = getComputerChoice()
humanChoice = getHumanChoice()

playRound(humanChoice, computerChoice)