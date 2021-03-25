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

function game() {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            console.log("You have won!");
            break;
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            console.log("You have lost");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            console.log("It is a draw");
            break;

    }

}

/* This gets the different elements in the HTML document, each element is represented 
by the element id i.e. "rock". An anomous function is passed through, which calls the function game."*/
function main() {
    document.getElementById("rock").addEventListener('click', () => game("rock"));
    document.getElementById("paper").addEventListener('click', () => game("paper"));
    document.getElementById("paper").addEventListener('click', () => game("scissor"));
} 