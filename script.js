var questions = []
var introductionContainer = document.querySelector("#introduction-container")
var startButton = document.querySelector("#start-button")
var quizContainer = document.querySelector("#quiz-container")
console.log(quizContainer)
console.log(startButton)


var startQuiz = function() {
    introductionContainer.className = ("hide")
    quizContainer.classList.remove("hide")

    setUpQuestion()
}

var setUpQuestion = function() {

    var questionOne = {
        question: "What does Html stand for?",

        answer: "Hypertext Markup Language",

        answerChoiceTwo: "Help Timmy make lasagna",

        answerChoiceThree: "Hyperlinktext Make Language",

        answerChoiceFour: "Hypertexture Markdown Language"
    }
    questions.push(questionOne)
    console.log(questions[0].answer)

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
}


startButton.addEventListener("click", startQuiz);