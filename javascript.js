//play again button
const reloadpg= document.querySelector("#resetbutton");
reloadpg.addEventListener('click',() => location.reload());


const buttonsText = document.querySelectorAll('button').textContent;

//when the buttons are clicked we
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(game(button.id));
    })
   
})


//plugs the button clicking back into the gameRound function
 function game(x){
   gameRound(x, computerPlay());
   
 }

//Randomizes the Computer RPS Selection
function computerPlay() {
    const choice = Math.floor(Math.random()*100)
        if (choice >= 67) {
            return "scissors";
        }
        else if (choice >= 33 && choice <= 66) {
            return' rock';
        }
        else
            return 'paper';
}

//Keeps Player Score 
//Keeps Compares player RPS choice and the Computer RPS choice
let pScore=0;
let cpuScore=0;
let round=0;

function gameRound(playerSelection, computerSelection) {
   
   
    //Tie game
    if (playerSelection === computerSelection) {
        console.log('Tie game!');
        return round++;
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log( 'You lose! Rock covered by paper!');
        return (cpuScore++, round++);
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log( 'You win! Rock breaks scissors!');
        return(pScore++, round++);
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log( 'You lose! Paper cut by scissors!');
        return (cpuScore++, round++);
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log( 'You win! Paper covers rock!');
        return(pScore++, round++);
    } 

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log( 'You win! Scissors cut the paper!');
        return(pScore++, round++);
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log( 'You lose! Scissors crushed by rock!');
        return (cpuScore++, round++);
    } 
}

//player Score and computer Score
document.getElementById("computer-score").innerHTML= "Computer Score: "+ pScore;
document.getElementById("player-score").innerHTML= "Player Scored: " + cpuScore;
document.getElementById("roundsPlayed").innerHTML="Rounds played: " + round++;

 
document.getElementById("cpuChoice").innerHTML="Computer chose " + computerPlay () ;

//Finds who wins after five rounds. 
function decideWinner(){
    while (round===5){
        if(cpuScore > pScore ){
            console.log("Computer Wins the game! Click the refresh button to play again.");
            break;
        }
        else {
            console.log("You win the entire game! Click the refresh button to play again.");
            break;
           
        }
     }
    }

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






