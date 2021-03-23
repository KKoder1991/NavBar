
/* These will be used to keep track of the score for the game later in the program. */
let userScore = 0;
let computerScore = 0;

/*These are variables for DOM variables to use for the DOM elements */
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

/*Used to cache the DOM and make it easier to write the code in the program.
We are storing something for future use. Storing things in variables to use later.*/
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} you win.`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 750);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} you lose.`;
    document.getElementById(computerChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(computerChoice).classList.remove('red-glow'), 750);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)}  is equal to  ${convertToWord(computerChoice)},  it is a draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 750);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
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