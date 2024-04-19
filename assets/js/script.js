// Modal - (Walkthrough code)
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, opens the modal - (Walkthrough code)
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal - (Walkthrough code)
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it - (Walkthrough code)
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Call variables for hand choices
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");
let result = document.getElementById("result-text");

/**
 * Add event listeners to each choice button
 * calling playRound function, determining the result of Player vs Comp chosen hand
 */
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
lizardButton.addEventListener("click", () => playRound("lizard"));
spockButton.addEventListener("click", () => playRound("spock"));

// Call variables for scores
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

function playRound(playerChoice) {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner and update the result with the outcome - (Walkthrough code)
    if (playerChoice === computerChoice) {
        result.textContent = "It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "rock" && computerChoice === "lizard") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "paper" && computerChoice === "spock") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "lizard") ||
        (playerChoice === "lizard" && computerChoice === "paper") ||
        (playerChoice === "lizard" && computerChoice === "spock") ||
        (playerChoice === "spock" && computerChoice === "rock") ||
        (playerChoice === "spock" && computerChoice === "scissors")
    ) {
        result.textContent = "You win!";
        playerScore++; // Increment player's score
    } else {
        result.textContent = "Computer wins!";
        computerScore++; // Increment computer's score
    }

    // Update the player and computer scores
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

// Testing function to show hand played by either side
// function displayChoice() {
//     let playerChoiceDisplay = document.getElementById("player-choice-text");
//     let computerChoiceDisplay = display.getElementById("comp-choice-text");

//     if (playerChoice === "rock") {
//         playerChoiceDisplay.innerText = `${playerChoice}`
//     }
// }