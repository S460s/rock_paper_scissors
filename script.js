        let playerScore  = 0;
        let computerScore = 0;
        const container = document.querySelector("#display");


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
            const buttons = document.querySelectorAll("#btn");
            buttons.forEach((button1) => {
                
                button1.addEventListener("click",() => {
                    let computerSelection = computerPlay();
                    playRound(button1.value,computerSelection)      
                    if (playerScore === 5) {
                        const winMsg = document.createElement("p");
                        document.getElementById('congrats').innerText = `Congrats! You won! The results is ${playerScore} for you and ${computerScore} for the computer`
                        container.appendChild(winMsg)
                        
                    }
                    else if (computerScore === 5) {
                        const pcWinMsg = document.querySelector("#winmsg");
                        document.getElementById('congrats').innerText = `You lost! The results is ${playerScore} for you and ${computerScore} for the computer`
                        container.appendChild(pcWinMsg)
                    }

                })
            })
        }

if(computerScore < 5 && playerScore < 5){
    game()
}


