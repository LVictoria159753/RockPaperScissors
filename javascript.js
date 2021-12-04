function computerPlay () {

const OPTIONS =["Rock"," Paper", "Scissors"];
let choice = Math.floor(Math.random()* 3);
return OPTIONS;
}



function playRound(playerSelection, computerSelection){
    let playerScore= document.getElementById ("player-score");
    let computerScore= document.getElementById("computer-score");
    let result = document.getElementById('info');

if (computerSelection === playerSelection){
   result.textContent= "It's a Tie!";
   console.log("It's a Tie!");
   return;
}
else if(computerSelection == "rock" && playerSelection == "paper") {
    result.textContent="Paper beats Rock.";
    playerScore.textContent ++;
    console.log("Paper beats Rock");
    return;
}


else if (computerSelection == "paper" && playerSelection == "rock" ){
    result.textContent="Paper beats Rock.";
    computerScore.textContent ++;
    console.log ("Paper beats rock")
    return;

}


else if (computerSelection == "scissor" && playerSelection == "rock" ){
    result.textContent= "Rock beats Scissor.";
    playerScore.textContent ++;
    console.log("Rock beats Scissor")
    return;

}

else if (computerSelection == "rock" && playerSelection == "scissor" ){
    result.textContent="Rock beats Scissor";
    computerScore.textContent ++;
    console.log ("Rock beats Scissor");
    return;

}

else if (computerSelection = "paper" && playerSelection == "scissor" ){
    result.textContent=" Scissor beats Paper.";
    playerScore.textContent ++;
    console.log("Scissor beats Paper");
    return;
}


else if (computerSelection = "scissor" && playerSelection == "paper" ){
    result.textContent= " Scissor beats Paper.";
    computerScore.textContent ++;
    console.log (" Scissor beats Paper.");
    return;

}

}


/*
let outcome;
outcome = (computerScore - playerScore);

    if (outcome < 0) {
        let message = "You win!" ; 
        console.log(message);
        return;
    }   else if (outcome > 1) { 
        let message = "Computer Wins. Play Again?"; 
        console.log(message);
    }   else {
        let message = "It's a Tie!"; 
        console.log(message);
    }
    */


document.getElementById('rock-button').addEventListener('click',
  () => playRound('Rock'));

document.getElementById('paper-button').addEventListener('click',
  () => playRound('Paper'));

document.getElementById('scissor-button').addEventListener('click',
  () => playRound('Scissor'));