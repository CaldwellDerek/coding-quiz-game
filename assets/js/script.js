// These variables hold the corresponding elements from the HTML page
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

// Stores all [score, initals] in an array to be sorted
let allScores = [];
// Keeps track of the index for quizQuestions and quizAnswers
let index = 0;
// Stores the amount of time the player has left
let timeLeft = 60;
// Stores the score at the end of the quiz
let score = 0;

// This function is responsible for acting as a timer by taking the timeLeft variable and subtracting 1 every second
function countdown() {
    // Sets header element to display timeLeft
    timer.textContent = `Timer: ${timeLeft}`;
    // Creates a timeInterval where the function executes every 1000 ms
    let timeInterval = setInterval( ()=> {
        if (timeLeft >= 1){
            timeLeft--;
        }
        // Displays new timeLeft value in header
        timer.textContent = `Timer: ${timeLeft}`;
        // timeInterval is cleared, current page is hidden, quiz end is shown, player score is saved and timeLeft, timer and index are reset to defaults
        if (timeLeft <= 0){
            clearInterval(timeInterval);
            quizContent.setAttribute("style", "display: none;");
            quizEnd.setAttribute("style", "display: block;");
            playerScore.textContent = `Your score is: ${score}`;
            timer.textContent = "Timer: ";
            timeLeft = 60;
            index = 0;
        } else if (index >= 4 || quizContent.getAttribute("data-display") === "hidden"){
            // if the player finishes the quiz ahead of time or the custom attr is hidden, the time interval is cleared and timer, timeleft and index are reset to defaults
            clearInterval(timeInterval);
            timer.textContent = "Timer: ";
            timeLeft = 60;
            index = 0;
        } 
    }, 1000);
}

// Function that Changes Quiz and Answer text - proceeds to score page if out of questions
function setQuestion() {
    // checks index variable to see if anymore questions are left, question is updated with new question and answers are updated to match the question
    if (index <= 3 && index >= 0){
        question.textContent = quizQuestions[index];
        answer1.textContent = quizAnswers[index][0];
        answer2.textContent = quizAnswers[index][1];
        answer3.textContent = quizAnswers[index][2];
        answer4.textContent = quizAnswers[index][3];
    } else {
        // timer is reset
        if (timeLeft <= 0){
            timeLeft = 0;
        }
        // score is saved, quiz end is shown, timer is reset and score is displayed to the player
        score = timeLeft;
        quizContent.setAttribute("style", "display: none;");
        quizEnd.setAttribute("style", "display: block;");
        playerScore.textContent = `Your score is: ${score}`;
        timer.textContent = "Timer: ";
    }
}

// This button, in the header, hides all pages and displays the high score page
seeHighscoresButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: none;");
    quizContent.setAttribute("data-display", "hidden")
    quizEnd.setAttribute("style", "display: none;");
    highscorePage.setAttribute("style", "display: block;");
});

// This button shows the quiz page, begins the countdown and sets the question with the appropriate answers
startButton.addEventListener("click", ()=> {
    quizIntro.setAttribute("style", "display: none;");
    quizContent.setAttribute("style", "display: block;");
    quizContent.setAttribute("data-display", "visible");
    countdown();
    setQuestion();
});

// Checks if the current question matches the question at specified index, if so, the answer is correct 'Correct!' is displayed. If wrong, 'Wrong!' is displayed. Index is increased by one to advance to the next question with setQuestion(). A time interval is used to display Correct/Wrong for 1 second
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

// Checks if the current question matches the question at specified index, if so, the answer is correct 'Correct!' is displayed. If wrong, 'Wrong!' is displayed. Index is increased by one to advance to the next question with setQuestion(). A time interval is used to display Correct/Wrong for 1 second
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

// Checks if the current question matches the question at specified index, if so, the answer is correct 'Correct!' is displayed. If wrong, 'Wrong!' is displayed. Index is increased by one to advance to the next question with setQuestion(). A time interval is used to display Correct/Wrong for 1 second
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

// Checks if the current question matches the question at specified index, if so, the answer is correct 'Correct!' is displayed. If wrong, 'Wrong!' is displayed. Index is increased by one to advance to the next question with setQuestion(). A time interval is used to display Correct/Wrong for 1 second
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


// Checks if user entered initials, and uploads score to highscores list.
submitScoreButton.addEventListener("click", ()=> {
    // Container used to store the player's initials from the textbox
    let initials = playerInitials.value;
    // A regular expression that is used to test for letters of the alphabet
    const regex = new RegExp(/^[A-Za-z]+$/);
    // Checks if the value from the text box is blank or contains a character outside of the alphabet, or if the length of the input is greater than 3
    if (initials === '' || !initials.match(regex) || initials.length > 3){
        //
        window.alert("Please enter only letters for your initials - no more than 3 letters and at least 1.");
    } else {
        // Hides current page
        quizEnd.setAttribute("style", "display: none;");
        // Iterates through scorelist's children until each child has been removed from the DOM.
        while (scoreList.children.length){
            scoreList.children[0].remove();
        }
        // Creates an array for the newly entered highscore and appends it to the allScores array
        allScores.push([score, initials]);
        // Sorts allScores by score, lowest to highest
        allScores.sort();
        // Creates a li element from lowest to highest score and prepends it to the <ol> scoreList so that the highest score is always on top.
        for (let score of allScores){
            let newLi = document.createElement('li');
            newLi.textContent = `${score[1]} - ${score[0]}`;
            scoreList.prepend(newLi);
            console.log(newLi);
        }
        // Displays the highscore page
        highscorePage.setAttribute("style", "display: block;");

    }
})

// When the user selects "Play Again!" the current page is hidden and they are taken back to the start page
playAgainButton.addEventListener("click", ()=> {
    highscorePage.setAttribute("style", "display: none;")
    quizIntro.setAttribute("style", "display: block;");
})

// When the user selects "Clear Highscores", each <li> from the highscores <ol> is removed from the DOM
clearScoresButton.addEventListener("click", ()=> {
    while (scoreList.children.length){
        scoreList.children[0].remove();
    }
})