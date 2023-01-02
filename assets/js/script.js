let quizIntro = document.querySelector(".quiz-intro");
let quizContent = document.querySelector(".quiz-content");
let startButton = document.querySelector(".start-quiz");

startButton.addEventListener("click", ()=> {
    console.log("it's working!!!")
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: block;");
});
