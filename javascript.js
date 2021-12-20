//play again button
const reloadpg= document.querySelector("#resetbutton");
reloadpg.addEventListener('click',() => location.reload());

// buttons for rock paper and scissor
const rockB= document.querySelector("#rock");
const paperB= document.querySelector("#paper");
const scissorB=document.querySelector("#scissor");


rockB.addEventListener('click', function(){
    gameRound(button.id, computerPlay);
})
paperB.addEventListener('click', function(){
    gameRound();
})
scissorB.addEventListener('click', function(){
    gameRound();
})


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


function gameRound(playerSelection, computerSelection) {
   
    pScore=0;
    cpuScore=0;
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


function game() {

    for (let i = 1; i < 6; i++) {
        console.log("games played =  " + i);   

    }
}

function decideWinner(){
    do{
        if(cpuScore > pScore ){
        console.log("Computer Wins the game!");
        break;
    }
    else {
        console.log("You win the entire game!");
        break;
    }
    
}
while(i=5)
}

