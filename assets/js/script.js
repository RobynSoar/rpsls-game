// Modal - (Walkthrough code)
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, opens the modal - (Walkthrough code)
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal - (Walkthrough code)
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it - (Walkthrough code)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Call elements for hand choices
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");
let result = document.getElementById("round-result");