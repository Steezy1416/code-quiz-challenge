var questions = []
var points = 0
var increment = -1
var timeRemaining = document.querySelector("#time-remaining")
var secondsRemaining = 75
var pageContent = document.querySelector("#page-content")
var introductionContainer = document.querySelector("#introduction-container")
var startButton = document.querySelector("#start-button")
var quizContainer = document.querySelector("#quiz-container")
var highscoreContainer = document.querySelector("#highscore-container")

var scoreBoardContainer = document.querySelector("#scoreboard-container")

var nameInput = document.querySelector("#name-input")

var questionHeader = document.querySelector("#question-header")
var buttonOne = document.querySelector("#button-one")
var buttonTwo = document.querySelector("#button-two")
var buttonThree = document.querySelector("#button-three")
var buttonFour = document.querySelector("#button-four")
var startOverButton = document.querySelector("#start-over-button")

console.log(quizContainer)
console.log(startButton)


var startQuiz = function () {
    

    timeRemaining.classList.remove("hide")
    introductionContainer.className = ("hide")
    quizContainer.classList.remove("hide")




    var countdown = function () {
        timeRemaining.textContent = ("Time remaining: " + secondsRemaining)
        secondsRemaining--;
        if (secondsRemaining === -1) {
            clearInterval(startCountDown)
            quizContainer.className = ("hide")
            highscoreContainer.classList.remove("hide")
            timeRemaining.className = ("hide")

            var finalScore = document.querySelector("#final-score")
            finalScore.textContent = ("Your final score is " + points)
        }
    }

    var startCountDown = setInterval(countdown, 1000)

}

var quizTaker = function (event) {
    var eventTarget = event.target;
    console.log(eventTarget)

    if (event.target.matches("#button-one")) {
        console.log("sucess")
        points = points + 25
        alert("That is correct")
    }
    else {
        secondsRemaining = secondsRemaining - 15

    }
    increment++

    if (increment < 4) {
        questionHeader.textContent = (questions[increment].question)
        buttonOne.textContent = (questions[increment].answer)
        buttonTwo.textContent = (questions[increment].answerChoiceTwo)
        buttonThree.textContent = (questions[increment].answerChoiceThree)
        buttonFour.textContent = (questions[increment].answerChoiceFour)
    }

    console.log(points)
    console.log(increment)

    if (increment === 4) {
        quizContainer.className = ("hide")
        highscoreContainer.classList.remove("hide")
        secondsRemaining = 0
        timeRemaining.className = ("hide")

        var finalScore = document.querySelector("#final-score")
        finalScore.textContent = ("Your final score is " + points)

    }

}

var highscore = function (event) {

    event.preventDefault()

    var nameInput = document.querySelector("input[name='your-name']").value;

    if (!nameInput) {
        alert("You need to insert a name and press enter");
        return false;
    }

    highscoreContainer.className = ("hide")

    scoreBoardContainer.classList.remove("hide")

    scores(nameInput)
}

var scores = function (nameInput) {
    var scoreContainer = document.querySelector("#score-container")
    var listItem = document.createElement("li")
    listItem.className = "list-item"
    listItem.textContent = (nameInput + " - " + points)
    scoreContainer.append(listItem)
}

var startOver = function () {
    scoreBoardContainer.className = ("hide")
    introductionContainer.classList.remove("hide")
    points = 0
    increment = -2
    secondsRemaining = 75
}

var questionOne = {
    question: "What does Html stand for?",

    answer: "Hypertext Markup Language",

    answerChoiceTwo: "Help Timmy make lasagna",

    answerChoiceThree: "Hyperlinktext Make Language",

    answerChoiceFour: "Hypertexture Markdown Language"
}
questions.push(questionOne)

var questionTwo = {
    question: "What does Css stand for?",

    answer: "Cascading Style Sheets",

    answerChoiceTwo: "Come Steal Something",

    answerChoiceThree: "Create Standard Sheets",

    answerChoiceFour: "Cascading Sheet Style"
}

questions.push(questionTwo)

var questionThree = {
    question: "What are variables used for?",

    answer: "Store information and be used when called upon",

    answerChoiceTwo: "I dont know",

    answerChoiceThree: "To find x",

    answerChoiceFour: "To find y"
}

questions.push(questionThree)

var questionFour = {
    question: "What does JSON stand for?",

    answer: "JavaScript Object Notation",

    answerChoiceTwo: "JavaSad Object Notation",

    answerChoiceThree: "JavaScripture Of Notations",

    answerChoiceFour: "I dont know, Im not there yet"
}
questions.push(questionFour)

var questionExtra = {
    question: "extra",

    answer: "extra",

    answerChoiceTwo: "extra",

    answerChoiceThree: "extra",

    answerChoiceFour: "extra"
}

questions.push(questionExtra)



startButton.addEventListener("click", startQuiz);
nameInput.addEventListener("submit", highscore)
pageContent.addEventListener("click", quizTaker)
startOverButton.addEventListener("click", startOver)
