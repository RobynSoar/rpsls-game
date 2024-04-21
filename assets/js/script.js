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

// Call variables for rounds
let currentRound = 1;
const totalRounds = 5;
const roundDisplay = document.getElementById("game-round")

/**
 * Sets rules for the game rounds.
 * Sets game round's results and displays then to the user.
 * Updates player and computer scores.
 * Increments rounds and provides overall winner after all rounds are concluded.
 */
function playRound(playerChoice) {

    if (currentRound <= totalRounds) {

        // Provides current round and total rounds to user
        roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;

        let choices = ["rock", "paper", "scissors", "lizard", "spock"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Displays Player and Computer chosen hands to the user
        displayChoice(playerChoice, computerChoice);

        // Determine the winner and update the result with the outcome - (Walkthrough code)
        if (playerChoice === computerChoice) {
            result.textContent = "It's a draw!";
            result.style.borderColor = "#FFC857";
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
            result.style.borderColor = "#69A197";
            playerScore++; // Increment player's score
        } else {
            result.textContent = "Computer wins!";
            result.style.borderColor = "#DB3A34";
            computerScore++; // Increment computer's score
        }

        // Update the player and computer scores
        playerScoreDisplay.textContent = `${playerScore}`;
        computerScoreDisplay.textContent = `${computerScore}`;

        currentRound++; // Increments round after each game played

        if (currentRound > totalRounds) {
            concludeGame(); // Function called when all rounds are complete
        }
    }
}

/**
 * Concludes game after all rounds are completed.
 * Provides overall game outcome feedback to the user.
 */
function concludeGame() {

    if (currentRound >= totalRounds) {
        if (playerScore > computerScore) {
            result.textContent = "You won overall! Well done!";
            result.style.borderColor = "#69A197";
        } else if (playerScore < computerScore) {
            result.textContent = "Oh no! The computer won!";
            result.style.borderColor = "#DB3A34";
        } else {
            result.textContent = "The game ends in a tie!";
            result.style.borderColor = "#FFC857";
        }
    }
}

// Reset button and event listener
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetGame);

/**
 * Resets game to original state allowing user to play again.
 */
function resetGame() {

    // Resets playRound Function
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    playerScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;
    roundDisplay.innerText = `Round: 1 of ${totalRounds}`;
    result.innerText = "Best of 5 - WINS!";

    // Resets displayChoice function
    document.getElementById("player-choice-text").innerText = "1..2..3... GO!";
    document.getElementById("comp-choice-text").innerText = "1..2..3... GO!";

    // Resets results display border colour
    result.style.borderColor = "#252525";
}

/**
 * Displays hand played by either side to the user
 */
function displayChoice(playerChoice, computerChoice) {
    let playerChoiceDisplay = document.getElementById("player-choice-text");
    let computerChoiceDisplay = document.getElementById("comp-choice-text");

    // Method to change displayed choice outputs as uppercase
    let uppercasePlayerChoice = playerChoice.toUpperCase();
    let uppercaseComputerChoice = computerChoice.toUpperCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "lizard" || playerChoice === "spock") {
        playerChoiceDisplay.innerText = `${uppercasePlayerChoice}`
    }

    if (computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors" || computerChoice === "lizard" || computerChoice === "spock") {
        computerChoiceDisplay.innerText = `${uppercaseComputerChoice}`
    }
}