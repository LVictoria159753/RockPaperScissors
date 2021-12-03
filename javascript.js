

function computerPlay () {
//create an array for the computer to choose from
let computerPlay = ["Rock", "Paper", "Scissors"];
let choice;
let finalResult = document.createElement('h2');
//allow the computer to pick a random number between 0-2

let num = Math.floor(Math.random()* 3);

    if(num===0){
        choice = 'Rock';
    } else if(num===1){
        choice = 'Paper';
    } else{
        choice = 'Scissors';
    }
    return choice;
}

// Computer Selection 

let playerScore = 0;
let computerScore= 0;

function playing (playerSelection, computerSelection){
if (computerSelection === playerSelection){
   alert ("It's a Tie!");
}

else if (computerSelection = "Rock" && playerSelection = "Paper" ) {
    alert ("Paper beats Rock.");
    playerScore ++;
}


else if (computerSelection = "Paper" && playerSelection = "Rock" ){
    alert ("Paper beats Rock.");
    computerScore ++;

}


else if (computerSelection = "Scissor" && playerSelection = "Rock" ){
    alert ("Rock beats Scissor.");
    playerScore ++;

}

else if (computerSelection = "Rock" && playerSelection = "Scissor" ){
    alert ("Rock beats Scissor");
    computerScore ++;

}

else if (computerSelection = "Paper" && playerSelection = "Scissor" ){
    alert(" Scissor beats Paper.");
    playerScore ++;

}

else (computerSelection="Scissor" && playerSelection="Paper"){
    alert( " Scissor beats Paper.");
    computerScore ++;

}

}


let round = 0;
let outcome = (computerScore - playerScore);

if (round === 5){
    else if (outcome = 0) {
    alert( "It's a Tie!");
}
else if (outcome < 0) {
    alert("You win!");
}
else (outcome >1){ 
    alert( "Computer Wins. Play Again?");
}
}