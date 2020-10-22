        let playerScore  = 0;
        let computerScore = 0;


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
            const container = document.querySelector("#result");
            const msg = document.createElement("p")

            
            msg.textContent =(`You entered ${playerSelection}.`)
            msg.textContent =(`Computer entered ${computerSelection}.`)
            
            if (playerSelection === "rock" && computerSelection ==="paper"){
                msg.textContent =(`You lose! ${computerSelection} beats ${playerSelection}.`)
                computerScore++            
                }
            else if (playerSelection === "paper" && computerSelection ==="scissors"){
                msg.textContent =(`You lose! ${computerSelection} beats ${playerSelection}.`)
                computerScore++            
                }
            else if (playerSelection === "scissors" && computerSelection ==="rock"){
                msg.textContent =(`You lose! ${computerSelection} beats ${playerSelection}.`)
                computerScore++            
                }
            else if (playerSelection === "rock" && computerSelection ==="scissors"){
                msg.textContent =(`You win! ${playerSelection} beats ${computerSelection}.`)
                playerScore++           
                }
            else if (playerSelection === "paper" && computerSelection ==="rock"){
                msg.textContent =(`You win! ${playerSelection} beats ${computerSelection}.`)
                playerScore++            
                }
            else if (playerSelection === "scissors" && computerSelection ==="paper"){
                msg.textContent =(`You win! ${playerSelection} beats ${computerSelection}.`)
                playerScore++            
                }
            else if (playerSelection === computerSelection) {
                msg.textContent =("Tie!")
                }
            container.appendChild(msg)
        }

        function game() {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => {
                button.addEventListener("click",() => {
                    let computerSelection = computerPlay();
                    console.log(playerScore,computerScore)
                    playRound(button.value,computerSelection)
                })
            })
            
        }

game()     
