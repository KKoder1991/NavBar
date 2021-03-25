/* This will be used for keeping score of the user and the computer in the game */
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random * 3);
        return choices[randomChoice]
}

console.log(getComputerChoice())

/* This gets the different elements in the HTML document, each element is represented 
by the element id i.e. "rock". An anomous function is passed through, which calls the function game."*/
function main {
    document.getElementById("rock").addEventListener('click', () => game("rock"));
    document.getElementById("paper").addEventListener('click', () => game("paper"));
    document.getElementById("paper").addEventListener('click', () => game("scissor"));
} 