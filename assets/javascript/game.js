//An array typesFlowers containing types of flowers
var typesFlowers = [
"peonies",
"lilacs",
"hydrangeas",
"lavender",
"lupine",
"iris",
"carnation",
"bluebell",
"lily"];

var guessesLeft = 9;   //Number of guesses the user has before endGame
var userGuess = [];     // letters the user guessed
var computerGuess = [];      // random computerized guess
var wordGuessed = [];   // This will be the word we actually build to match the current word
var letterGuesses = [];  // The letters the user guessed that were incorrect
var endGame = false;    // Flag for 'press any key to try again'     
var wins = 0;           //wins
var numBlanks = [];

function startgame() {

    //This is the method used so that the computer can generate a random choice
    computerGuess = typesFlowers[Math.floor(Math.random()*(typesFlowers.lenth))];

    letterGuesses = computerGuess.split("");

    numBlanks = letterGuesses.length

     //Setting up the blank placeholders
     for (var i=0; i<letterGuesses.length; i++){
        letterGuesses.push("");
    }

    //Changing the source of an image with the class of typesFlowers
    if (computerGuess(typesFlowers[0])) {
        document.getElementById("flowerimg").src="assets/images/PinkPeonies.jpg"
    }else if (computerGuess(typesFlowers[1])) {
        document.getElementById("flowerimg").src="assets/images/lilacs.jpg"
    }else if (computerGuess(typesFlowers[2])) {
        document.getElementById("flowerimg").src="assets/images/blueHydrangeas.jpg"
    }else if (computerGuess(typesFlowers[3])) {
        document.getElementById("flowerimg").src="assets/images/lavender.jpg"
    }else if (computerGuess(typesFlowers[4])) {
        document.getElementById("flowerimg").src="assets/images/lupine.jpg"
    }else if (computerGuess(typesFlowers[5])) {
        document.getElementById("flowerimg").src="assets/images/iris.jpg"
    }else if (computerGuess(typesFlowers[6])) {
        document.getElementById("flowerimg").src="assets/images/carnation.jpg"
    }else if (computerGuess(typesFlowers[7])) {
        document.getElementById("flowerimg").src="assets/images/bluebell.jpg"
    }else if (computerGuess(typesFlowers[8])) {
        document.getElementById("flowerimg").src="assets/images/lily.jpg"
    }else {
        alert("No More.");
    }

};

//Function Display: Updating Current Word being displayed, Guesses Left, and Letters Guessed
function display () {
document.getElementById("currentWord").innerHTML = computerGuess;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("userGuess").innerHTML = userGuess
};

// function checkletter
// function ()

// function refreshScreen() {
//     letterGuesses===userGuess

//     // document.getElementById("gameWins").textContent = wins;
//     // document.getElementById("gameLosses").textContent = losses;

//     var guessingWordText = "";
//     for (var i=0; i<wordGuessed.length; i++) {
//         guessingWordText += wordGuessed[1];
//     }



//Comparing
function evaluateGuess(letter) {
    var positions = [];

    for (var i=0; i<typesFlowers[computerGuess].length; i++) {
        if(computerGuess(typesFlowers[i]) === letter){
            positions.push(i);
        }

        if (positions.length <= 0) {
            guessesLeft--;
        }else {
            for (var i=0; i <positions.length; i++) {
                wordGuessed[positions[i]] = letter;
            }
        }
    }
};

// //check if all letters have been entered.
// function checkWin() {
//     if(wordGuessed.indexOf("_") === -1) {
//         wins++;
//         finishedGame = true;
//     }
// };

// //guessing
// function makeGuess(letter) {
//     if (guessesLeft > 0) {
//         // Make sure we didn't use this letter
//         if (userGuess.indexOf(letter) === -1) {
//             userGuess.push(letter);
//             evaluateGuess(letter);
//         }
//     }
// };

//Event listener
document.onkeypress = function(event) {
    //if the game is finished, restart it.
    if(endGame) {
        startGame();
        endGame = false;
    }else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
            // checkWin();
        }
    }
};
