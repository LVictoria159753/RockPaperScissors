//play again button
const reloadpg= document.querySelector("#resetbutton");
reloadpg.addEventListener('click',() => location.reload());

let round=0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
        round++;
    })
})
  
//plugs the button clicking back into the gameRound function
 function game(x){
   gameRound(x, computerPlay());
   
    if(cpuScore > pScore ){
        console.log("Computer Wins the game!");
       
    }
    else {
        console.log("You win the entire game!");
       
    }
 }

//Randomizes the Computer RPS Selection
function computerPlay() {
    const choice = Math.floor(Math.random()*100)
        if (choice >= 67) {
            return 'scissors'
        }
        else if (choice >= 33 && choice <= 66) {
            return 'rock'
        }
        else
            return 'paper'
}

//Keeps Player Score 
//Keeps Compares player RPS choice and the Computer RPS choice
let pScore=0;
let cpuScore=0;
function gameRound(playerSelection, computerSelection) {
   
   
    //Tie game
    if (playerSelection === computerSelection) {
        return 'Tie game!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Rock covered by paper!'
        cpuScore++;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock breaks scissors!'
        pScore++;
    } 

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Paper cut by scissors!'
        cpuScore++;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper covers rock!'
        pScore++;
    } 

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors cut the paper!'
        pScore++;
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Scissors crushed by rock!'
        cpuScore++;
    } 
}


    
   