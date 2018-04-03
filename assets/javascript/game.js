var win = 0;
var losses = 0;
var clickedCyrstal1 = 0;
var clickedCyrstal2 = 0;
var clickedCyrstal3 = 0;
var clickedCyrstal4 = 0;
var crystalScore = [];
var sum = 0;
var totalScore = 0;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
var computerCrystal = Math.floor(Math.random() * 120) + 19;
var htmlComputerCrystal = //writes computerCrystal to html
            "<p>Computer Crystal # " + computerCrystal + "</p>";
    document.querySelector("#computerCrystal").innerHTML = htmlComputerCrystal;

    while (crystal1 == crystal2 || crystal1 == crystal3 || crystal1 == crystal4 || crystal2 == crystal1 || crystal2 == crystal3 || crystal2 == crystal4 || crystal3 == crystal1 || crystal3 == crystal2 || crystal3 == crystal4 || crystal4 == crystal1 || crystal4 == crystal2 || crystal4 == crystal3){
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }

function crystalClick(crystal){
    clickedCyrstal = crystal;
    crystalScore.push(clickedCyrstal);
    console.log(crystalScore);
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

    //sum = crystalScore.reduce(function(a, b) {
     //   return a + b;
    //  });
   
   

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
/* $("#crystal2").click(function(){
    clickedCyrstal2 = crystal2;
    console.log(clickedCyrstal2);
    crystalScore.push(clickedCyrstal2);
    console.log(crystalScore);
    var sum = crystalScore.reduce(function(a, b) {
        return a + b;
    });
      console.log(sum);
});
$("#crystal3").click(function(){
    clickedCyrstal3 = crystal3;
    console.log(clickedCyrstal3);
    crystalScore.push(clickedCyrstal3);
    console.log(crystalScore);
    var sum = crystalScore.reduce(function(a, b) {
        return a + b;
      });
      console.log(sum);
});
$("#crystal4").click(function(){
    clickedCyrstal4 = crystal4;
    console.log(clickedCyrstal4);
    crystalScore.push(clickedCyrstal4);
    console.log(crystalScore);
    var sum = crystalScore.reduce(function(a, b) {
        return a + b;
      });
      console.log(sum);
});

console.log(b);
*/
//for (crystalScore i = 0, sum = 0; i < crystalScore.length; sum += crystalScore[i++]);
//console.log(sum);


console.log(crystalScore);
console.log(sum);
//console.log(crystalScoreTotal);


//var crystalScore = clickedCyrstal1 + clickedCyrstal2 + clickedCyrstal3 + clickedCyrstal4;
//console.log(crystalScore);

//var html =
//"<p>Wins: " + wins + "</p>" +
//"<br><p>Losses: " + losses + "</p>" +
// Set the inner HTML contents of the #game div to our html string
//document.querySelector("#gameScore").innerHTML = html;
//}