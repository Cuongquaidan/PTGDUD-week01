// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
let score;
let secretNumber;

document.querySelector(".again").addEventListener("click", resetGame);
document.querySelector(".start").addEventListener("click", startGame);

function resetGame() {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").value = 0;
    document.querySelector(".guess").value = "";

    document.querySelector(".body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
}
function startGame() {
    score = document.querySelector(".score").value;
    secretNumber = Math.floor(Math.random() * score) + 1;
    let number = parseInt(document.querySelector(".guess").value);
    document.querySelector(".number").textContent = secretNumber;
    if (number == secretNumber) {
        document.querySelector(".message").textContent = "Congratulations";
        document.querySelector(".body").style.backgroundColor = "green";
    } else {
        document.querySelector(".message").textContent = "Unlucky, try again";
        document.querySelector(".body").style.backgroundColor = "red";
    }
    document.querySelector(".number").style.width = "20rem";
}
