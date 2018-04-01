
var win = 0;
var losses = 0;
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
    //while (crystal2 == crystal1 || crystal2 == crystal3 || crystal2 == crystal4){
    //    crystal2 = Math.floor(Math.random() * 12) + 1;
    //}
    //while (crystal3 == crystal1 || crystal3 == crystal2 || crystal3 == crystal4){
    //    crystal3 = Math.floor(Math.random() * 12) + 1;
    //}
    //while (crystal4 == crystal1 || crystal4 == crystal2 || crystal4 == crystal3){
    //    crystal4 = Math.floor(Math.random() * 12) + 1;
    //}

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

//var html =
//"<p>Wins: " + wins + "</p>" +
//"<br><p>Losses: " + losses + "</p>" +

// Set the inner HTML contents of the #game div to our html string
//document.querySelector("#gameScore").innerHTML = html;
//}

