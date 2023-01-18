

function modifiers(string, ...values){
    console.log(string);
    console.log(values);
}

var player1 = "Nahidu Islam"
var player2 = "MD Yousuf";

modifiers`Player 1: ${player1}, Player 2: ${player2}`;