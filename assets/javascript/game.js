var winCounter = 0;
var lossCounter = 0;
var computerNumber = 0;
var userNumber = 0;
var crystalNumber = 0;
var emeraldNumber = 0;
var sapphireNumber = 0;
var topazNumber = 0

function targetNumber() {
    // Generates the target score
    computerNumber = Math.floor(Math.random() * 120) + 19;
    $("#targetScore").text(computerNumber);

    // Logs Target Score to console to verify functionality
    console.log(computerNumber);
  };

function jewelNumbers() {
  // Assigns each jewel a random number from 1 to 12
  crystalNumber = Math.floor(Math.random() * 12) + 1;
  emeraldNumber = Math.floor(Math.random() * 12) + 1;
  sapphireNumber = Math.floor(Math.random() * 12) + 1;
  topazNumber = Math.floor(Math.random() * 12) + 1;

  // Sets userNumber to 0 and displays it on the screen
  // userNumber = 0;
  $("#yourScore").text(userNumber);
}

function gameStart() {
    // Resets the wins to 0 and displays the value on the scree
    winCounter = 0;
    $("#winCount").text(winCounter);

    // Resets the losses to 0 and displays the value on the screen
    lossCounter = 0;
    $("#lossCount").text(lossCounter);
};

// Sets the targetNumber between 19 and 120
targetNumber();
// Gives each jewel a random value between 1 and 12
jewelNumbers();
// Sets the wins and losses to 0 and displays them on the screen
gameStart();

// On click functions for jewels
$("#crystal").on("click", function() {
  if (true) {

  }
  userNumber += crystalNumber;
  console.log(userNumber);
});
