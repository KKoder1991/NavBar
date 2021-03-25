/* This will be used for keeping score of the user and the computer in the game */
let userScore = 0;
let computerScore = 0;


/*This function will generate a random choice for the computer. I used math.random and set it 
to get a float number up to 3. Math.floor then rounds down the number. the randomChoice
function is then passed into the choices array which then makes a random choice between the
three avalaible choices.*/
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
}

function win(userChoice, computerChoice){
    userScore ++;
    document.getElementById("user-score").innerHTML = userScore;
    document.querySelector(".result > p").innerHTML = `${userChoice} beats ${computerChoice}, you win!`;

}

function lose(userChoice, computerChoice){
    computerScore ++;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > p").innerHTML = `${computerChoice} beats ${userChoice}, you lose!`
}

function draw(userChoice, computerChoice){
    document.querySelector(".result > p").innerHTML = `${userChoice} and ${computerChoice} are equal. It is a tie!`;
}

/*The game function looks at the 9 different outcomes the game could have.  the switch case
starts by combining the user and computer choices. After the choices are made, it is combined to see
what outcome there is. After each set of win, lose or draw outcomes a message is printed to the console.*/
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
}

/* This gets the different elements in the HTML document, each element is represented 
by the element id i.e. "rock". An anomous function is passed through, which calls the function game."*/
function main() {
    document.getElementById("rock").addEventListener('click', () => game("rock"));
    document.getElementById("paper").addEventListener('click', () => game("paper"));
    document.getElementById("scissor").addEventListener('click', () => game("scissor"));
} 

main();