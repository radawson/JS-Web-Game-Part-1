var secretNumber = 0;
var counter = 0;
var name;

function getRandom() {

    secretNumber = Math.floor(Math.random() * 100 + 1);
}

function guessNum() {
    //increment the counter on each guess
    counter++;

    // update the guess counter
    document.getElementById("counter").innerHTML = counter;

    //Clear guessNumber
    var guessNumber = 0;

    //get the current guess number
    guessNumber = document.getElementById("guess").value;

    //check the guess number against the random number
    if (guessNumber > secretNumber) {
        document.getElementById("answerIcon").className = "fas fa-arrow-down";
    } else if (guessNumber < secretNumber) {
        document.getElementById("answerIcon").className = "fas fa-arrow-up";
    } else {
        document.getElementById("answerIcon").className = "fas fa-check-circle";
        document.getElementById("guessingZone").style.display = "none";
        document.getElementById("winningNumber").innerHTML = secretNumber;
        document.getElementById("winZone").style.display = "block";
        document.body.style.backgroundColor = "limegreen";
    }

    //Reset guess input
    document.getElementById("guess").value = "";
}