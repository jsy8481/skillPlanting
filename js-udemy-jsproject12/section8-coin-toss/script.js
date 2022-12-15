const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
   button.addEventListener("click", tossCoin)
});

const coinArray = ["HEAD", "TAIL"];
let userScore = 0;
let computerScore = 0;

function tossCoin(e) {
    const playerGuess = this.dataset.coin;
    let computerToss = coinArray[Math.floor(Math.random() * 2)];

    let outputMessage = "";
    if (playerGuess === computerToss) {
        outputMessage = "Player Wins"
        userScore += 1;
    } else {
        outputMessage = "Computer Wins";
        computerScore += 1;
    }
    message.innerHTML = `${outputMessage}<br>Player ${userScore} Computer ${computerScore}`
}
