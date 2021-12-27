
//play again button
const reloadpg= document.querySelector("#resetbutton");
reloadpg.addEventListener('click',() => location.reload());

//Randomizes the Computer RPS Selection

function computerPlay() {
    const OPTIONS = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    document.getElementById("cpuChoice").innerHTML=(OPTIONS[random]);
    return OPTIONS[random];
  }
//Keeps Player Score 
//Keeps Compares player RPS choice and the Computer RPS choice
let pScore=0;
let cpuScore=0;
let round=0;
function playRound(playerSelection) {

let computerScore = document.getElementById('computer-score');
let playerScore = document.getElementById('player-score');
let roundScore = document.getElementById('roundsPlayed');
let result = document.getElementById('result');
let round=0;

   computerSelection=computerPlay();
    //Tie game
    if (playerSelection === computerSelection) {
        result.textContent= "Tie game! No points awarded to either party"
        roundScore.textContent++;
        round++;
        return;
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent= 'You lose! Rock covered by paper!'
        computerScore.textContent++;
        cpuScore++;
        roundScore.textContent++;
        round++;
        return; 
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent= 'You win! Rock breaks scissors!';
        playerScore.textContent++;
        pScore++;
        roundScore.textContent++;
        round++;
        return; 
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result.textContent=  'You lose! Paper gets cut by scissors!';
        computerScore.textContent++;
        cpuScore++;
        roundScore.textContent++;
        round++;
        return; 
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent=  'You win! Paper covers rock!';
        playerScore.textContent++; 
        pScore++;
        roundScore.textContent++;
        round++;
        return; 
    } 

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent= 'You win! Scissors cut paper!';
        playerScore.textContent++; 
        pScore++;
        roundScore.textContent++;
        round++;
        return; 
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result.textContent= 'You lose! Scissors crushed by rock!';
        computerScore.textContent++;
        cpuScore++;
        roundScore.textContent++;
        round++;
        return;
    } 
    
}


let winner= document.getElementById("Winner");
function decideWinner(){
        if(cpuScore ===5 ){
            winner.textContent= "Computer Wins the game! Click the refresh button to play again.";
     
        }
        else if (pScore===5) {
            winner.textContent= "You win the entire game! Click the refresh button to play again.";
           
        }
     }
     decideWinner();



//changes to print whether User choice is Rock, Paper or Scissor
rock.addEventListener("click",print)

function print(){
let x= document.getElementById("rock").textContent;
document.getElementById("yourChoice").innerHTML=x;
}

paper.addEventListener("click",p1)
function p1(){
let x= document.getElementById("paper").textContent;

document.getElementById("yourChoice").innerHTML=x;
}

scissors.addEventListener("click",p2)

function p2(){
let x= document.getElementById("scissors").textContent;

document.getElementById("yourChoice").innerHTML=x;
}


document.getElementById('rock').addEventListener('click',
  () => playRound('rock'));

document.getElementById('paper').addEventListener('click',
  () => playRound('paper'));

document.getElementById('scissors').addEventListener('click',
  () => playRound('scissors'));





  /* SCRAP CODE

const buttonsText = document.querySelectorAll('button').textContent;
//when the buttons are clicked we
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(game(button.id));
    })
   
})

*/


/*
//player Score and computer Score
document.getElementById("computer-score").innerHTML= "Computer Score: "+ pScore;
document.getElementById("player-score").innerHTML= "Player Scored: " + cpuScore;
document.getElementById("roundsPlayed").innerHTML="Rounds played: " + round++;
*/