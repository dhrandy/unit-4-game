var win = 0;
var losses = 0;
var clickedCyrstal1 = 0;
var clickedCyrstal2 = 0;
var clickedCyrstal3 = 0;
var clickedCyrstal4 = 0;
var crystalScore = [];
var sum = 0;
var totalScore = 0;

function randomNumber (){
    Math.floor(Math.random() * 12) + 1;
}

var crystal1 = randomNumber();
var crystal2 = randomNumber();
var crystal3 = randomNumber();
var crystal4 = randomNumber();
var computerCrystal = Math.floor(Math.random() * 120) + 19;
var htmlComputerCrystal = //writes computerCrystal to html
            "<p>Enemy's Number # " + computerCrystal + "</p>";    
    document.querySelector("#computerCrystal").innerHTML = htmlComputerCrystal;

  

    while (crystal1 == crystal2 || crystal1 == crystal3 || crystal1 == crystal4 || crystal2 == crystal1 || crystal2 == crystal3 || crystal2 == crystal4 || crystal3 == crystal1 || crystal3 == crystal2 || crystal3 == crystal4 || crystal4 == crystal1 || crystal4 == crystal2 || crystal4 == crystal3){
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }

    var htmlScore = //writes Score to html
    "<p>Wins: " + win + "</p>" +
"<p>Losses: " + losses + "</p>";

document.querySelector("#score").innerHTML = htmlScore;
    

function crystalClick(crystal){
    clickedCyrstal = crystal;
    crystalScore.push(clickedCyrstal);
    console.log(crystalScore);
    sum = crystalScore.reduce(function(a, b) {
        return a + b;
      }); 
      var htmlsum = //writes computerCrystal to html
            "<p>Crystal Sum = " + sum + "</p>";    
    document.querySelector("#sum").innerHTML = htmlsum;

      console.log("sum =",sum);

      if (sum === computerCrystal) {       
        win++;
        crystalScore = [0];
        computerCrystal = Math.floor(Math.random() * 120) + 19;
        var htmlComputerCrystal = //writes computerCrystal to html
            "<p>Enemy's Number # " + computerCrystal + "</p>";    
    document.querySelector("#computerCrystal").innerHTML = htmlComputerCrystal;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
       
        
        console.log("win =",sum);
                
    } else if (sum > computerCrystal) {
        losses++;
        crystalScore = [0];
        computerCrystal = Math.floor(Math.random() * 120) + 19;
        var htmlComputerCrystal = //writes computerCrystal to html
            "<p>Enemy's Number # " + computerCrystal + "</p>";    
    document.querySelector("#computerCrystal").innerHTML = htmlComputerCrystal;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        console.log("loss =",sum);
    }
    var htmlScore = //writes Score to html
    "<p>Wins: " + win + "</p>" +
"<p>Losses: " + losses + "</p>";

document.querySelector("#score").innerHTML = htmlScore;
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

/*var restartButton = document.getElementById("restartButton"); //sets the reset button variable
restartButton.addEventListener("click", gameRestart); //listens for the click

function gameRestart() {
    wins = 0;
    losses = 0;
    crystalScore = [];
}*/

};

   
   
    $("#crystal1").click(function(){
        crystalClick(crystal1);
        sum = crystalScore.reduce(function(a, b) {
            return a + b;
          }); 
        
    });
    console.log(crystalScore);
    $("#crystal2").click(function(){
        crystalClick(crystal2);
        sum = crystalScore.reduce(function(a, b) {
            return a + b;
          }); 
        console.log(sum);
    });
    $("#crystal3").click(function(){
        crystalClick(crystal3);
        console.log(sum);
    });
    $("#crystal4").click(function(){
        crystalClick(crystal4);
        console.log(sum);
    });


    console.log(crystalScore);



