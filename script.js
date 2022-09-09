var questions = []
var points = 0
increment = -1
var pageContent = document.querySelector("#page-content")
var introductionContainer = document.querySelector("#introduction-container")
var startButton = document.querySelector("#start-button")
var quizContainer = document.querySelector("#quiz-container")
var highscoreContainer = document.querySelector("#highscore-container")

var questionHeader = document.querySelector("#question-header")
var buttonOne = document.querySelector("#button-one")
var buttonTwo = document.querySelector("#button-two")
var buttonThree = document.querySelector("#button-three")
var buttonFour = document.querySelector("#button-four")

console.log(quizContainer)
console.log(startButton)


var startQuiz = function () {
    introductionContainer.className = ("hide")
    quizContainer.classList.remove("hide")
}



var quizTaker = function (event) {
    var eventTarget = event.target;
    console.log(eventTarget)

    if (event.target == buttonOne) {
        console.log("sucess")
        points = points + 25
        alert("That is correct")
    }
    else {
        //remove time

    }
    increment++

    questionHeader.textContent = (questions[increment].question)
    buttonOne.textContent = (questions[increment].answer)
    buttonTwo.textContent = (questions[increment].answerChoiceTwo)
    buttonThree.textContent = (questions[increment].answerChoiceThree)
    buttonFour.textContent = (questions[increment].answerChoiceFour)


    console.log(points)
    console.log(increment)

    if (increment === 4) {
       highscore()
    }

}

var highscore = function () {

    quizContainer.className=("hide")

    highscoreContainer.classList.remove("hide")
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
pageContent.addEventListener("click", quizTaker)
