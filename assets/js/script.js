// Quiz state variables
var currentQuestionIndex = 0;
var timeLeft;
var timer;
var score = 0;

// DOM Variables
var timeEl = document.querySelector("#timeLeft");
var startScreenEl = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var quizScreen = document.querySelector("#questionCard");
var submitButton = document.querySelector("#submit-button");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");



// Start quiz function
function startQuiz() {
  var timeLeft = 75;
  timer = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log("done");
    }
  }, 1000);

  generateQuestion();
}
// Generate question card
function generateQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = " ";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choices = currentQuestion.choices[i];
    var choices = document.createElement("button");
    choices.textContent = currentQuestion.choices[i];
    choices.setAttribute("class", "choice");
    choicesEl.appendChild(choices);
  }
  choices.addEventListener("click", questionClick);
}
// On click listen for value of the choice selected
function questionClick() {
  feedbackEl.setAttribute("class", "show");
  if (this.value !== questions[currentQuestionIndex].answer) {
    feedbackEl.textContent = "Correct!";
    currentQuestionIndex++;
  } else {
    feedbackEl.textContent = "Wrong!";
    timeLeft -15;
  }

  // Check to see if there are any more questions
  if (currentQuestionIndex === questions.length) {
    highScore();
  } else {
    generateQuestion();
  }
}

function highScore() {
  var highScoreSectionEl = document.querySelector("#highscore-section");
  highScoreSectionEl.setAttribute("class", "show");
  var finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = timer;
  questionCard.setAttribute("class", "hide");
  submitButton.addEventListener("click", saveHighscore);
}
function saveHighscore() {
  var initials = initialsEl.value.trim();
  if (initials !== " ") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores"));

    
    initialsEl.textContent = document.querySelector("initials-area");

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highScore.html";
  }
}

startButton.addEventListener("click", function () {
  console.log("button works");
  startScreenEl.setAttribute("class", "hide");
  quizScreen.setAttribute("class", "show");
  startQuiz();
});
