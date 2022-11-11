let choices = ["rock","paper","scissors"];

function getComputerChoice() {
 return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice,computerChoice) {
    
    
    if (playerChoice == computerChoice) {
        alert(`${playerChoice} and ${computerChoice} is a tie!`)
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        alert("Win! Rocks beats scissors!")
    }

    else if (playerChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats rock!")
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        alert("You win! Paper beats rock!");
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        alert("You lose! scissors beats paper!");
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        alert("You win! scissors beats paper!");
    }
    else {
        alert("You lose! rock beats scissors!");
    }

}

function game() {
    for (let i = 0; i< 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        console.log(playerChoice);

        playRound(playerChoice,computerChoice);
    }
}

game();


