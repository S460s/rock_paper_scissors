        let playerScore  = 0;
        let computerScore = 0;
        const container = document.querySelector("#display");
        const buttons = document.querySelectorAll("#btn");


        function computerPlay() {
            // Chooses a random value for computerPlay.
            switch (Math.floor(Math.random() * 3)) {
                case 0: return "rock"
                case 1: return "scissors"
                case 2: return "paper"
                    }
                }

        function playRound(playerSelection, computerSelection) {
            // Compares playerSelection and computerSelection
            const msg = document.createElement("p")
        
            if (playerSelection === "rock" && computerSelection ==="paper"){
                computerScore++            
                document.getElementById('scoreComputer').innerText =(computerScore)
                document.getElementById('result').innerText =(`You lost! ${computerSelection} beats ${playerSelection}.`)
                }
            else if (playerSelection === "paper" && computerSelection ==="scissors"){
                computerScore++            
                document.getElementById('scoreComputer').innerText =(computerScore)
                document.getElementById('result').innerText =(`You lost! ${computerSelection} beats ${playerSelection}.`)
                }
            else if (playerSelection === "scissors" && computerSelection ==="rock"){
                computerScore++            
                document.getElementById('scoreComputer').innerText =(computerScore)
                document.getElementById('result').innerText =(`You lost! ${computerSelection} beats ${playerSelection}.`)

                }
            else if (playerSelection === "rock" && computerSelection ==="scissors"){
                playerScore++           
                document.getElementById('scorePlayer').innerText =(playerScore)
                document.getElementById('result').innerText =(`You won! ${playerSelection} beats ${computerSelection}.`)
                }
            else if (playerSelection === "paper" && computerSelection ==="rock"){
                playerScore++            
                document.getElementById('scorePlayer').innerText =(playerScore)
                document.getElementById('result').innerText =(`You won! ${playerSelection} beats ${computerSelection}.`)
                }
                else if (playerSelection === "scissors" && computerSelection ==="paper"){
                    playerScore++            
                document.getElementById('scorePlayer').innerText =(playerScore)
                document.getElementById('result').innerText =(`You won! ${playerSelection} beats ${computerSelection}.`)
                }
            else if (playerSelection === computerSelection) {
                document.getElementById('result').innerText =("Tie!")
                }
            }


        function game() {
            buttons.forEach((button1) => {
                button1.addEventListener("click",() => {
                    let computerSelection = computerPlay();
                    if (button1.id === "btn") {
                        playRound(button1.value,computerSelection) 
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
function playAgain(){
const playAgain = document.querySelector('#playAgain');
playAgain.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    document.getElementById("scorePlayer").innerText = playerScore;
    document.getElementById("scoreComputer").innerText = computerScore;
    document.getElementById('result').innerText ="Welcome to RPC! Click any of the buttons below to start."
    document.getElementById("congrats").innerText = ""
    buttons.forEach((button) => {
        button.setAttribute("id", "btn")
    })

});
}


game()
playAgain()



