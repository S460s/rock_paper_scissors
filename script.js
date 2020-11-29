let playerScore = 0;
let computerScore = 0;
const container = document.querySelector("#display");
const buttons = document.querySelectorAll("#btn");

function computerPlay() {
    // Chooses a random value for computerPlay.
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    // Compares playerSelection and computerSelection
    if (playerSelection === computerSelection) {
        document.getElementById('result').innerText = ("Tie!")
    }
    else if (playerSelection.length - computerSelection.length === -1 || playerSelection.length - computerSelection.length === 4 || playerSelection.length - computerSelection.length === -3) {
        computerScore++
        document.getElementById('scoreComputer').innerText = (computerScore)
        document.getElementById('result').innerText = (`You lost! ${computerSelection} beats ${playerSelection}.`)
    }
    else {
        playerScore++
        document.getElementById('scorePlayer').innerText = (playerScore)
        document.getElementById('result').innerText = (`You won! ${playerSelection} beats ${computerSelection}.`)
    }
}

function game() {
    buttons.forEach((button1) => {
        button1.addEventListener("click", () => {
            let computerSelection = computerPlay();
            if (button1.id === "btn") {
                playRound(button1.value, computerSelection)
            }
            if (playerScore === 5) {
                document.getElementById('congrats').innerText = `Congrats! You won! The results is ${playerScore} for you and ${computerScore} for the computer`
            }
            else if (computerScore === 5) {
                document.getElementById('congrats').innerText = `You lost! The results is ${playerScore} for you and ${computerScore} for the computer`
            }
            if (playerScore === 5 || computerScore === 5) {
                buttons.forEach((button) => {
                    button.removeAttribute("id")
                })
            }
        })
    })
}
function playAgain() {
    const playAgain = document.querySelector('#playAgain');
    playAgain.addEventListener('click', () => {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("scorePlayer").innerText = playerScore;
        document.getElementById("scoreComputer").innerText = computerScore;
        document.getElementById('result').innerText = "Click any of the buttons below to start playing again."
        document.getElementById("congrats").innerText = ""
        buttons.forEach((button) => {
            button.setAttribute("id", "btn")
        })
    });
}
game()
playAgain()



