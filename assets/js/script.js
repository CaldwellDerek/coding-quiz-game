// These variables hold the corresponding elements in the HTML document
let quizIntro = document.querySelector(".quiz-intro");
let quizContent = document.querySelector(".quiz-content");
let quizEnd = document.querySelector(".quiz-end");
let startButton = document.querySelector(".start-quiz");
let timer = document.querySelector(".timer");
let question = document.querySelector(".question");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let answer4 = document.querySelector(".answer-4");
let rightOrWrong = document.querySelector(".right-wrong");
let playerScore = document.querySelector(".score");
let playerInitials = document.querySelector("#name");
let submitScoreButton = document.querySelector(".submit-highscore");

// These variables hold the questions for the quiz and the corresponding answers
let quizQuestions = [
                "Which of these is used to declare a single-line comment in JavaScript?",
                "What is the correct way to output 'Hello World!' in JavaScript?",
                "Which is a viable way to create a variable in JavaScript?",
                "Which HTML element links a JavaScript file?"
            ];
let quizAnswers = [
                ["//", "!-", "/*", "/-"], 
                ["System.log('Hello World!');", "print('Hello World!');", "console.log('Hello World!');", "System.out.println('Hello World!');"], 
                ["int = myVariable;", "container = myVariable;", "boolean = myVariable;", "let = myVariable;"], 
                ["<link>", "<script>", "<js>", "<p>"]
            ];

// Keeps track of the index for quizQuestions and quizAnswers
let index = 0;
let timeLeft = 60;
// let score = 0;

// Function that starts the timer
function countdown() {
    timer.textContent = `Timer: ${timeLeft}`;
    let timeInterval = setInterval( ()=> {
        if (timeLeft >= 1){
            timeLeft--;
        }
        timer.textContent = `Timer: ${timeLeft}`;
        if (timeLeft <= 0){
            clearInterval(timeInterval);
            timeLeft = 0;
            quizContent.setAttribute("style", "display: none;");
            quizEnd.setAttribute("style", "display: block;");
            playerScore.textContent = `Your score is: ${timeLeft}`;
            timer.textContent = "Timer: ";
        } else if (index >= 4){
            clearInterval(timeInterval);
            timer.textContent = "Timer: ";
        }
        // console.log(timeLeft);
        // console.log(`index = ${index}`);
    }, 1000);
}

// Function that Changes Quiz and Answer text - proceeds to score page if out of questions
function setQuiz() {
    if (index <= 3 && index >= 0){
        question.textContent = quizQuestions[index];
        answer1.textContent = quizAnswers[index][0];
        answer2.textContent = quizAnswers[index][1];
        answer3.textContent = quizAnswers[index][2];
        answer4.textContent = quizAnswers[index][3];
    } else {
        if (timeLeft <= 0){
            timeLeft = 0;
        }
        quizContent.setAttribute("style", "display: none;");
        quizEnd.setAttribute("style", "display: block;");
        playerScore.textContent = `Your score is: ${timeLeft}`;
        timer.textContent = "Timer: ";
    }
}



startButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: block;");
    countdown();
    setQuiz();
});




answer1.addEventListener("click", ()=> {
    if (question.textContent ===  quizQuestions[0]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;")
    } else {
        rightOrWrong.textContent = "Wrong!";
        timeLeft -= 15;
        rightOrWrong.setAttribute("style", "display: block;")
    }
    index++;
    setQuiz();
});

answer2.addEventListener("click", ()=> {
    if (question.textContent ===  quizQuestions[3]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;")
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
        timeLeft -= 15;
    }
    index++;
    setQuiz();
});

answer3.addEventListener("click", ()=> {
    if (question.textContent === quizQuestions[1]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;");
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
        timeLeft -= 15;
    }
    index++;
    setQuiz();
});

answer4.addEventListener("click", ()=> {
    if (question.textContent === quizQuestions[2]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;");
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
        timeLeft -= 15;
    }
    index++;
    setQuiz();
});

submitScoreButton.addEventListener("click", ()=> {
    let initials = playerInitials.value;
    const regex = new RegExp(/^[A-Za-z]+$/);
    if (initials === '' || !initials.match(regex) || initials.length > 3){
        window.alert("Please enter only letters for your initials - no more than 3 letters.");
    } else {
        // TO DO
        // SAVE INITIALS AND HIGHSCORE, TRANSITION TO HIGHSCORES PAGE
    }
})