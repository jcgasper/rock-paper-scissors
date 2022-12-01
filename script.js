//add score feature, basic styling

//vars
let choices = ["rock","paper","scissors"];
let playerScore = 0;
let pcScore = 0;

//query selectors
const buttons = document.querySelectorAll('.container button');
const playerScoreScreen = document.querySelector(".playerScore")
const pcScoreScreen = document.querySelector(".PCScore")
const responseScreen = document.querySelector(".response");
const containerQuery = document.querySelector(".container")
const againButton = document.querySelector(".playAgain");


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.className;
        let pcChoice = getComputerChoice();
        playRound(playerChoice,pcChoice);
    })
});

againButton.addEventListener('click', () => {
    reset();
});



function getComputerChoice() {
 return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice,computerChoice) {
    
    
    if (playerChoice == computerChoice) {
        responseScreen.innerHTML = `${playerChoice} and ${computerChoice} is a tie!`
        gameScore("draw");
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        responseScreen.innerHTML = "Win! Rock smashes scissors!"
        gameScore("win");
    }

    else if (playerChoice == "rock" && computerChoice == "paper") {
        responseScreen.innerHTML = "You lose! Paper covers rock!"
        gameScore("lose");
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        responseScreen.innerHTML = "You Win! Paper covers rock!"
        gameScore("win");
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        responseScreen.innerHTML = "You lose! Scissors cuts paper!"
        gameScore("lose");

    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        responseScreen.innerHTML = "You win! Scissors cut paper!"
        gameScore("win");
    }
    else {
        responseScreen.innerHTML = "You lose! Rock smashes scissors!";
        gameScore("lose");
    }

}

function gameScore(input) {
    if (input == "win") {
        playerScore++;
        playerScoreScreen.innerHTML = `Player: ${playerScore}`;
    }
    else if (input == "lose") {
        pcScore ++;
        pcScoreScreen.innerHTML = `Computer: ${pcScore}`

    }
    console.log(playerScore)
    console.log(pcScore)
        
    //add logic to check for player/pc to get 5 wins and 
    if (playerScore >= 5) {
        gameEnd("player");
    }
    if (pcScore >= 5) {
        gameEnd("computer");
    }
    
}

function gameEnd(winner) {
    if (winner == "player") {
        responseScreen.innerHTML = "You beat the computer! Play again?"
        displayEnd();
        
    }

    else {
       responseScreen.innerHTML = "You lose! Play again?"
       displayEnd();
        
    }

}

function displayEnd() {
    containerQuery.classList.add("hidden");
    againButton.classList.remove("hidden");
    console.log("end")

}

function reset() {
    playerScore = 0;
    pcScore = 0;
    containerQuery.classList.remove("hidden");
    againButton.classList.add("hidden");
    responseScreen.innerHTML = "Choose: Rock, Paper, or Scissors?"

    playerScoreScreen.innerHTML = `Player: 0`;
    pcScoreScreen.innerHTML = `Computer: 0`;
    
}
