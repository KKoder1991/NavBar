/* This will be used for keeping score of the user and the computer in the game */
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random * 3);
        return choices[randomChoice]
}

console.log(getComputerChoice())

function main {
    document.getElementById("rock").addEventListener('click', () => game("rock"));
    document.getElementById("paper").addEventListener('click', () => game("paper"));
    document.getElementById("paper").addEventListener('click', () => game("scissor"));
} 