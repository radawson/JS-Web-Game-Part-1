// Set Some global variables
var secretNumber = 0;
var counter = 0;
var name;

// Generate a random number between 1 and 100
function getRandom() {
    secretNumber = Math.floor(Math.random() * 100 + 1);
}

// Game logic
function guessNum() {
    //increment the counter on each guess
    counter++;

    // update the guess counter
    document.getElementById("counter").innerHTML = counter;

    //Clear guess input
    var guessNumber = 0;

    //get the current guess number
    guessNumber = document.getElementById("guess").value;

    //check the guess number against the random number
    if (guessNumber > secretNumber) {
        //guess is more than secret number
        document.getElementById("answerIcon").className = "fas fa-arrow-down";
    } else if (guessNumber < secretNumber) {
        //guess is less than secert number
        document.getElementById("answerIcon").className = "fas fa-arrow-up";
    } else {
        // guess and secret number are equal
        document.getElementById("answerIcon").className = "fas fa-check-circle";
        document.getElementById("guessingZone").style.display = "none";
        document.getElementById("winningNumber").innerHTML = secretNumber;
        document.getElementById("winZone").style.display = "block";
        document.body.style.backgroundColor = "limegreen";
    }
 
    // Reset guess input
    document.getElementById("guess").value = "";
}
