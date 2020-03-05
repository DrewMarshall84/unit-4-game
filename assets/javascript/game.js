// GLOBAL VARIABLES
//==========================================================================

// Crystal Variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    orange:
    {
        name: "Orange",
        value: 0
    },
    pink:
    {
        name: "Pink",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    },
};


// Scores (Current and Target)
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;


// FUNCTIONS
//==========================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (min - max + 1)) +min;
}

// Starts the Game (and restarts the game)
var startGame = function() {

// Rest the Current Score 
currentScore = 0;

// Set new Target Score (between 19 and 120)

targetScore = getRandom(19, 120);

// Set different values for each of the crystals (between 1 and 12)
crystal.blue.value       = getRandom(1, 12);
crystal.orange.value     = getRandom(1, 12);
crystal.pink.value       = getRandom(1, 12);
crystal.purple.value     = getRandom(1, 12);

// Change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

// Testing Console
console.log("--------------------------------------------")
console.log("Target Score:" +targetScore);
console.log("Blue" + crystal.blue.value + " | Orange:" + crystal.orange.value + " | Pink" + crystal.pink.value + " | Purple" + crystal.purple.value);
console.log("--------------------------------------------")
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin Function
    checkWin();

    // Testing Console
    console.log("Your Score" + currentScore);

}

// Check if User Won or Last and Rest the Game
var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry You Lost!") 
        console.log("You Lost");

        // Add to Loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#lossCount").html(lossCount);
        // Restart the game
        startGame();
    }       

        
    

    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");

        // Add to Winner Counter
        winCount++;

        // Change Win Counter HTML
        $("#winCount").html(winCount);

        // Restart the game
        startGame();
    }
        
}




// MAIN PROCESS
//==========================================================================
// Stars the Game the First Time
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);

});
$("#orange").click(function() {
    addValues(crystal.orange)
});
$("#pink").click(function() {
    addValues(crystal.pink)
});
$("#purple").click(function() {
    addValues(crystal.purple)
});