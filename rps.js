/* RPS for The Odin Project */
/* Solution by Harry Coburn */

function getComputerChoice() {
    let seed = Math.floor((Math.random() * 3))
    console.log(seed)
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

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())