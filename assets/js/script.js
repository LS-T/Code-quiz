// DOM Variables
var timeEl = document.querySelector("#timeLeft");
var containerEl = document.querySelector(".container");
var button = document.querySelector("button");

var secondsLeft = 75;

// Pseudo code

// Question generator

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("done");
    }
  }, 1000);
}


function generateQuestion() {
    index = question.length;
    questionCard = question[index];
    console.log(question[1]);

    for(var i = 0; i < question.length; i++){
        question[i].createElement("h1");
        question[i].createElement("ul");
        console.log("works");
   }
}

button.addEventListener("click", function () {
  console.log("button works");
  containerEl.innerHTML = " ";
  setTimer();
});

generateQuestion();

    // cardQuestion.textContent = question[i];
        // containerEl.appendChild(cardQuestion);
        // cardList.textContent = " ";
        // cardQuestion.appendChild(cardList);
        // console.log("working");