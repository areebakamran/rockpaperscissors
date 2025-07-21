function getComputerChoice() {
  let num = Math.random();
  if (num <= 0.3 && num >= 0.0)
    return "rock";
  else if (num > 0.3 && num <= 0.6)
    return "paper";
  else
    return "scissors"
}

function getHumanChoice() {
  return prompt("chose either rock, paper or scissor")
}

let humanScore = 0
let compScore = 0 

function playRound(humanChoice, compChoice) {
  if (humanChoice === compChoice) {
    console.log("tie! play again")
    const newHuman = getHumanChoice().toLowerCase();
    const newComp = getComputerChoice();
    console.log(newComp)
    return playRound(newHuman, newComp);}
  else if (humanChoice === "rock" && compChoice === "paper") {
    compScore += 1
    return "You lose! Paper beats rock";}
  else if (humanChoice === "rock" && compChoice !== "paper") {
    humanScore += 1 
    return "You win! Rock beats " + compChoice + ".";}
  else if (humanChoice === "paper" && compChoice === "scissors") {
    compScore += 1
    return "You lose! Scissors beats paper.";}
  else if (humanChoice === "paper" && compChoice !== "scissors") {
    humanScore += 1 
    return "You win! Paper beats " + compChoice + ".";}
  else if (humanChoice === "scissors" && compChoice === "rock") {
    compScore += 1
    return "You lose! Rock beats scissors";}
  else if (humanChoice === "scissors" && compChoice !== "rock") {
    humanScore += 1 
    return "You win! Scissors beats " + compChoice + ".";}
}



function playGame() {
  let rounds = 0
  while (rounds < 5) {
    let humanChoice = getHumanChoice();
    let compChoice = getComputerChoice();
    console.log(compChoice); 
    console.log(playRound(humanChoice.toLowerCase(), compChoice))
    rounds += 1
  }
}

playGame();
console.log("your score = " + humanScore + "/5")
if (humanScore >= 3) {
  console.log("you won!");}
else {
  console.log("u lose");} 