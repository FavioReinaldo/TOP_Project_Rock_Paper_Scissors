

function computerPlay(){
    let max = 3;
    return Math.floor(Math.random() * max);
    //0 ‘Rock’, 1 ‘Paper’ or 2 ‘Scissors’
}

function playRound(playerSelection, computerSelection){
    let result="";
    computerSelection = computerPlay();
    
    if(playerSelection === computerSelection){
        result = "Its a Draw!"
    }else if(playerSelection === 0){
        if(computerSelection === 1){
            result = "You Lose! Paper beats Rock";
        }else{
            result = "You Win! Rock beats Scissors";
        }
    }else if(playerSelection === 1){
        if(computerSelection === 0){
            result = "You Win! Paper beats Rock";
        }else{
            result = "You Lose! Scissors beats Paper";
        }
    }else{
        if(computerSelection === 0){
            result = "You Lose! Rock beats Scissors";
        }else{
            result = "You Win! Scissors beats Paper";
        }
    }
    return result;
}



