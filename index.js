// Set Some global variables
var secretNumber = 0;
var counter = 0;

// Generate a random number between 1 and 100
function getRandom() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

// Game logic
function guessNum() {
    //increment the counter on each guess
    counter++;

    // update the guess counter
    document.getElementById('counter').innerHTML = counter;

    //Clear guess input
    let guessNumber = 0;

    //get the current guess number
    guessNumber = document.getElementById('guess').value;
    
    //check counter is < 10
    if (counter > 10) {
        document.getElementById('answerIcon').className = "fas fa-times-circle";
        document.getElementById('guessingZone').style.display = "none";
        document.getElementById('loseZone').style.display = "block";
        document.getElementById('losingNumber').innerHTML = secretNumber;
        document.body.style.backgroundColor = "red";
    } else {

        //check the guess number against the random number
        if (guessNumber > secretNumber) {
            //guess is more than secret number
            document.getElementById('answerIcon').className = "fas fa-arrow-down";
        } else if (guessNumber < secretNumber) {
            //guess is less than secret number
            document.getElementById('answerIcon').className = "fas fa-arrow-up";
        } else {
            // guess and secret number are equal
            document.getElementById('answerIcon').className = "fas fa-check-circle";
            document.getElementById('guessingZone').style.display = "none";
            document.getElementById('winZone').style.display = "block";
            document.getElementById('winningNumber').innerHTML = secretNumber;
            document.body.style.backgroundColor = "limegreen";
        }
    }
    // Reset guess input
    document.getElementById('guess').value = "";
}
