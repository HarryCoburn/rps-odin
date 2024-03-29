const moves = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
function computerPlay() {
    sel = Math.floor(Math.random() * moves.length);
    return moves[sel];
}

function playRound(playerSelection, computerSelection) {
    // Tie
    if (playerSelection === computerSelection) {
        return ["You both throw " + playerSelection + "! It's a tie!", 0];
    }

    // Player throws rock
    if (playerSelection === 'rock') {
        return (computerSelection === 'paper') ?
            ["You lose! Player's rock loses against computer's paper.", -1] :
            ["You win! Player's rock smashes the computer's scissors.", 1];
    }

    // Player throws scissors
    if (playerSelection === 'scissors') {
        return (computerSelection === 'rock') ?
            ["You lose! Player's scissors loses against computer's rock.", -1] :
            ["You win! Player's scissors cuts through the computer's paper.", 1];
    }

    // player throws paper
    if (playerSelection === 'paper') {
        return (computerSelection === 'scissors') ?
            ["You lose! Player's paper loses against computer's scissors.", -1] :
            ["You win! Player's paper covers the computer's rock.", 1];
    }

    return ["Invalid parameters sent to computerPlay function!", 0]

}

function addMessage(text) {
    let message = document.getElementById("message");
    let para = document.createElement('p');
    para.textContent = text;
    message.appendChild(para);
}

function game() {

    let scoreDiv = document.getElementById("scoreDiv");    
    let score = 0;
    let compScore = 0;
    scoreDiv.textContent = "Player Score: " + score + " Computer Score: " + compScore;

    addMessage("Will you throw rock, paper, or scissors? First to five wins!");


    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            displayResults(playRound(e.target.id, computerPlay()))
        })
    })

    function displayResults(roundResult) {

        addMessage(roundResult[0]);
        if (roundResult[1] === 1) score += 1;
        else if (roundResult[1] === -1) compScore += 1;
        else {
            score++;
            compScore++;
        }
        scoreDiv.textContent = "Player Score: " + score + " Computer Score: " + compScore;

        if (score === 5 || compScore === 5) {
            addMessage("We have a winner!")
            addMessage("Final player score is: " + score);
            addMessage("Final computer score is " + compScore);
            if (score > compScore) addMessage("You win!");
            else if (compScore > score) addMessage("You lose...");
            else addMessage("It's a tie!");
            score = 0;
            compScore = 0;
        }
    };
}

game()