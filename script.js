alert("Do You Want to Play?");
var p1_name = prompt("What is The NAME of Player 1?").toUpperCase();
var p2_name = prompt("What is The NAME of Player 2?").toUpperCase();

document.querySelector(".first-dice h2").textContent = p1_name;
document.querySelector(".second-dice h2").textContent = p2_name;

var randomnum1 = Math.floor(Math.random() * 6) + 1;
var player1 = document.querySelector(".first-dice img");
var set1 = "/images copy/dice" + randomnum1 + ".png";
player1.setAttribute("src",set1 );


var randomnum2 = Math.floor(Math.random() * 6) + 1;
var player2 = document.querySelector(".second-dice img");
var set2 = "/images copy/dice" + randomnum2 + ".png";
player2.setAttribute("src", set2);


var winner = document.querySelector(".winner-wraper h1");
var comp = document.querySelector(".middle");
var sdb = document.querySelector(".Win-lose h1");

if (randomnum1 > randomnum2) {
    winner.textContent = "Winner: " + p1_name;
    comp.textContent = ">";
    sdb.textContent = p2_name + ", You Dumb Ass Loser";
}
else if (randomnum1 == randomnum2) {
    winner.textContent = "Draw"
    comp.textContent = "=";
    sdb.textContent = "okay no loser here";

}
else { 
    winner.textContent = "Winner: " + p2_name;
    comp.textContent = "<";
     sdb.textContent = p1_name + ", You Dumb Ass Loser";

}

console.log("random1: " + randomnum1);
console.log("random2: " + randomnum2);