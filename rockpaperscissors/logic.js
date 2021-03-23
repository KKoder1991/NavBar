
/* These will be used to keep track of the score for the game later in the program. */
let userScore = 0;
let computerScore = 0;

/*These are variables for DOM variables to use for the DOM elements */
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

/*Used to cache the DOM and make it easier to write the code in the program.
We are storing something for future use. Storing things in variables to use later.*/
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win()
            break;
        case "sr":
        case "rp":
        case "ps":
            lose()
            break;
        case "rr":
        case "pp":
        case "ss":
            draw()
            break;
    }
    
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();