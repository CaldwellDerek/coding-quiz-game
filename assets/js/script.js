
let quizIntro = document.querySelector(".quiz-intro");
let quizContent = document.querySelector(".quiz-content");
let quizEnd = document.querySelector(".quiz-end");
let highscorePage = document.querySelector(".highscore-page");
let timer = document.querySelector(".timer");
let seeHighscoresButton = document.querySelector(".highscore-button");
let startButton = document.querySelector(".start-quiz");
let question = document.querySelector(".question");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let answer4 = document.querySelector(".answer-4");
let answers = [answer1, answer2, answer3, answer4];
let rightOrWrong = document.querySelector(".right-wrong");
let rightOrWrongEnd = document.querySelector(".right-wrong-quiz-end");
let playerScore = document.querySelector(".score");
let playerInitials = document.querySelector("#name");
let submitScoreButton = document.querySelector(".submit-highscore");
let playAgainButton = document.querySelector(".back-to-start");
let clearScoresButton = document.querySelector(".clear-scores");
let scoreList = document.querySelector(".highscore-list");

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
let score = 0;

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
            quizContent.setAttribute("style", "display: none;");
            quizEnd.setAttribute("style", "display: block;");
            playerScore.textContent = `Your score is: ${score}`;
            timer.textContent = "Timer: ";
            timeLeft = 60;
            index = 0;
        } else if (index >= 4 || quizContent.getAttribute("data-display") === "hidden"){
            clearInterval(timeInterval);
            timer.textContent = "Timer: ";
            timeLeft = 60;
            index = 0;
        } 
    }, 1000);
}

// Function that Changes Quiz and Answer text - proceeds to score page if out of questions
function setQuestion() {
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
        score = timeLeft;
        quizContent.setAttribute("style", "display: none;");
        quizEnd.setAttribute("style", "display: block;");
        playerScore.textContent = `Your score is: ${score}`;
        timer.textContent = "Timer: ";
    }
}

seeHighscoresButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: none;");
    quizContent.setAttribute("data-display", "hidden")
    quizEnd.setAttribute("style", "display: none;");
    highscorePage.setAttribute("style", "display: block;");
});

startButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: block;");
    quizContent.setAttribute("data-display", "visible");
    countdown();
    setQuestion();
});

answer1.addEventListener("click", ()=> {
    if (question.textContent ===  quizQuestions[0]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;")
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
        timeLeft -= 15;
    }
    index++;
    setQuestion();

    let timeInterval = setInterval(()=>{
        rightOrWrong.setAttribute("style", "display: none;");
        clearInterval(timeInterval);
    }, 1000)
});

answer2.addEventListener("click", ()=> {
    if (question.textContent ===  quizQuestions[3]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;");
        rightOrWrongEnd.textContent = "Correct!";
        rightOrWrongEnd.setAttribute("style", "display: block;");
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;");
        rightOrWrongEnd.textContent = "Wrong!";
        rightOrWrongEnd.setAttribute("style", "display: block;");
        timeLeft -= 15;
    }
    index++;
    setQuestion();

    let timeInterval = setInterval(()=>{
        rightOrWrong.setAttribute("style", "display: none;");
        rightOrWrongEnd.setAttribute("style", "display: none;");
        clearInterval(timeInterval);
    }, 1000)
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
    setQuestion();

    let timeInterval = setInterval(()=>{
        rightOrWrong.setAttribute("style", "display: none;");
        clearInterval(timeInterval);
    }, 1000)
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
    setQuestion();

    let timeInterval = setInterval(()=>{
        rightOrWrong.setAttribute("style", "display: none;");
        clearInterval(timeInterval);
    }, 1000)
});



submitScoreButton.addEventListener("click", ()=> {
    let initials = playerInitials.value;
    const regex = new RegExp(/^[A-Za-z]+$/);
    if (initials === '' || !initials.match(regex) || initials.length > 3){
        window.alert("Please enter only letters for your initials - no more than 3 letters and at least 1.");
    } else {
        quizEnd.setAttribute("style", "display: none;");
        let newHighscore = document.createElement("li");
        newHighscore.textContent = `${initials} - ${score}`
        scoreList.append(newHighscore);
        highscorePage.setAttribute("style", "display: block;");
    }
})

playAgainButton.addEventListener("click", ()=> {
    highscorePage.setAttribute("style", "display: none;")
    quizIntro.setAttribute("style", "display: block;");
})

clearScoresButton.addEventListener("click", ()=> {
    for (let child of scoreList.children){
        child.remove();
    }
})