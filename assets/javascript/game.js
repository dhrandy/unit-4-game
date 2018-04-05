//writing all the variables needed
var win = 0;
var losses = 0;
var gentlemanScore = [];
var sum = 0;
var gentleman1 = randomNumber();
var gentleman2 = randomNumber();
var gentleman3 = randomNumber();
var gentleman4 = randomNumber();
var computerHyde = Math.floor(Math.random() * 120) + 19;
var htmlComputerHyde = //writes computerHyde to html
    "<p>ENEMY'S NUMBER # " + computerHyde + "</p>";
document.querySelector("#computerHyde").innerHTML = htmlComputerHyde;

//used for the gentleman 1,2,3,4 variale to create the random number, didn't realy need this step, but wanted to try it.
function randomNumber() {
    Math.floor(Math.random() * 12) + 1;
}

//the while loop makes sure that no 2 numbers match for the player
while (gentleman1 == gentleman2 || gentleman1 == gentleman3 || gentleman1 == gentleman4 || gentleman2 == gentleman1 || gentleman2 == gentleman3 || gentleman2 == gentleman4 || gentleman3 == gentleman1 || gentleman3 == gentleman2 || gentleman3 == gentleman4 || gentleman4 == gentleman1 || gentleman4 == gentleman2 || gentleman4 == gentleman3) {
    gentleman1 = Math.floor(Math.random() * 12) + 1;
    gentleman2 = Math.floor(Math.random() * 12) + 1;
    gentleman3 = Math.floor(Math.random() * 12) + 1;
    gentleman4 = Math.floor(Math.random() * 12) + 1;
}

//Shows the initial win and loss score, which is 0 to 0.
var htmlScore = 
    "<p>Wins: " + win + "</p>" +
    "<p>Losses: " + losses + "</p>";

document.querySelector("#score").innerHTML = htmlScore;

//this function runs when you click on a gentleman
function gentlemanClick(gentleman) {
    gentlemanScore.push(gentleman); //pushes the selected random number from gentleman to variable
    sum = gentlemanScore.reduce(function(a, b) { //this sums the variable
        return a + b;
    });
    var htmlsum = //writes computerHyde to html
        "<p>Gentlemens Sum = " + sum + "</p>";
    document.querySelector("#sum").innerHTML = htmlsum;
    
    //this runs if the sum and gentleman is equal
    if (sum === computerHyde) {
        win++;
        var htmlComputerHyde = //writes computerHyde to html
            "<p>Enemy's Number # " + computerHyde + "</p>";
        document.querySelector("#computerHyde").innerHTML = htmlComputerHyde;
        nextGame ();

    } else if (sum > computerHyde) {
        losses++; // add a loss if user goes over computer random number
        nextGame ();
    }

    function nextGame () {
        gentleman1 = Math.floor(Math.random() * 12) + 1;
        gentleman2 = Math.floor(Math.random() * 12) + 1;
        gentleman3 = Math.floor(Math.random() * 12) + 1;
        gentleman4 = Math.floor(Math.random() * 12) + 1;
        gentlemanScore = [0]; 
        computerHyde = Math.floor(Math.random() * 120) + 19;
    }

    htmlScore = //writes Score to html
        "<p>Wins: " + win + "</p>" +
        "<p>Losses: " + losses + "</p>";

    document.querySelector("#score").innerHTML = htmlScore;
};
$("#gentleman1").click(function() {
    gentlemanClick(gentleman1);
});

$("#gentleman2").click(function() {
    gentlemanClick(gentleman2);
});

$("#gentleman3").click(function() {
    gentlemanClick(gentleman3);
});

$("#gentleman4").click(function() {
    gentlemanClick(gentleman4);
});