let quizIntro = document.querySelector(".quiz-intro");
let quizContent = document.querySelector(".quiz-content");
let startButton = document.querySelector(".start-quiz");
let timer = document.querySelector(".timer");

// Function that starts the timer
function countdown() {
    let timeLeft = 60;
    timer.textContent = `Timer: ${timeLeft}`;
    let timeInterval = setInterval( ()=> {
        timeLeft --;
        timer.textContent = `Timer: ${timeLeft}`;
        if (timeLeft == 0){
            clearInterval(timeInterval);
            timer.textContent = "Timer: 0";
        }
    }, 1000);
}

startButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: block;");
    countdown();
});
