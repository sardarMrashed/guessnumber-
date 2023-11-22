let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  
  const humanDifference = getAbsoluteDistance(humanGuess,targetNumber)
  const computerDifference = Math.abs(targetNumber - computerGuess);

  return humanDifference <= computerDifference;
}

function updateScore(winner){
if(winner === 'human'){
  humanScore++;
}else if(winner === 'computer'){
  computerScore++;
}else
return updateScore;
}

function advanceRound(){
  return currentRoundNumber++;
}

advanceRound(7)

function getAbsoluteDistance(n1, n2){



if((n1 >= 0) && (n1 <= 9)){
return Math.abs(n1 - n2);
}else 
alert()
}

