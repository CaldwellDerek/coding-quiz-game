// These variables hold the corresponding elements in the HTML document
let quizIntro = document.querySelector(".quiz-intro");
let quizContent = document.querySelector(".quiz-content");
let startButton = document.querySelector(".start-quiz");
let timer = document.querySelector(".timer");
let question = document.querySelector(".question");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let answer4 = document.querySelector(".answer-4");
let rightOrWrong = document.querySelector(".right-wrong");

// These variables hold the questions for the quiz and the corresponding answers
let quizQuestions = ["Which of these is used to declare a single-line comment in JavaScript?",
                "What is the correct way to output 'Hello World!' in JavaScript?",
                "Which is a viable way to create a variable in JavaScript?",
                "Which HTML element links a JavaScript file?"
            ];
let quizAnswers = [["//", "!-", "/*", "/-"], 
                ["System.log('Hello World!');", "print('Hello World!');", "console.log('Hello World!');", "System.out.println('Hello World!');"], 
                ["int = myVariable;", "container = myVariable;", "boolean = myVariable;", "let = myVariable;"], 
                ["<link>", "<script>", "<js>", "<p>"]
            ];
            
// Keeps track of the index for quizQuestions and quizAnswers
let index = 0;

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

// Function that Changes Quiz and Answer text
function setQuiz() {
    if (index <= 3 && index >= 0){
        question.textContent = quizQuestions[index];
        answer1.textContent = quizAnswers[index][0];
        answer2.textContent = quizAnswers[index][1];
        answer3.textContent = quizAnswers[index][2];
        answer4.textContent = quizAnswers[index][3];
        index ++;
    };
}



startButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: block;");
    countdown();
    setQuiz();
});

// FINISH THE OTHER QUESTIONS USING THIS FORMAT! -----------------------------------------


answer1.addEventListener("click", ()=> {
    if (question.textContent ===  quizQuestions[0]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;")
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
    }
    setQuiz();
});

answer2.addEventListener("click", ()=> {
    if (question.textContent ===  quizQuestions[3]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;")
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
    }
    setQuiz();
});

answer3.addEventListener("click", ()=> {
    if (question.textContent === quizQuestions[1]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;");
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
    }
    setQuiz();
});

answer4.addEventListener("click", ()=> {
    if (question.textContent === quizQuestions[2]){
        rightOrWrong.textContent = "Correct!";
        rightOrWrong.setAttribute("style", "display: block;");
    } else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.setAttribute("style", "display: block;")
    }
    setQuiz();
});