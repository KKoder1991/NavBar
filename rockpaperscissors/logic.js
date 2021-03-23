
/* These will be used to keep track of the score for the game later in the program. */
const userScore = 0;
const computerScore = 0;

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

function computerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(computerChoice());




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