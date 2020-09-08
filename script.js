var timer = 60;
var questionCounter = 0;
var qAndA = [
  {
    "question": "Inside which HTML element do we put the JavaScript?",
    "answer1": "<script>",
    "answer2": "<js>",
    "answer3": "<scripting>",
    "answer4": "<javascript>"
  },
  {
    "question": "How do you write an IF statement in JavaScript?",
    "answer1": "if i = 5",
    "answer2": "if i = 5 then",
    "answer3": "if (i == 5)",
    "answer4": "if i == 5 then"
  },
  {
    "question": "How does a FOR loop start?",
    "answer1": "for i = 1 to 5",
    "answer2": "for (i = 0; i <= 5)",
    "answer3": "for (i <= 5; i++)",
    "answer4": "for (i = 0; i <= 5; i++)"
  },
  {
    "question": "How do you round the number 7.25 to the nearest integar?",
    "answer1": "round(7.25)",
    "answer2": "Math.round(7.25)",
    "answer3": "rnd(7.25)",
    "answer4": "Math.rnd(7.25)"
  },
  {
    "question": "Which event occurs when the user clicks on an HTML element?",
    "answer1": "onclick",
    "answer2": "onchange",
    "answer3": "onmouseclick",
    "answer4": "onmouseover"
  },
  {
    "question": "Which operator is used to assign a value to a variable?",
    "answer1": "*",
    "answer2": "-",
    "answer3": "x",
    "answer4": "="
  }
];
var correctAnswers = [qAndA[0].answer1, qAndA[1].answer3, qAndA[2].answer4, qAndA[3].answer2, qAndA[4].answer1, qAndA[5].answer4];
var questionIndex = 0;
var timerEl = document.getElementById("timer");
var i = 0;

document.getElementById("start").addEventListener("click", startfunction);
document.getElementsByClassName("answer")[0].addEventListener("click", checkAnswers);
document.getElementsByClassName("answer")[1].addEventListener("click", checkAnswers);
document.getElementsByClassName("answer")[2].addEventListener("click", checkAnswers);
document.getElementsByClassName("answer")[3].addEventListener("click", checkAnswers);

function countdown() {
  timer = 60;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timer;
    timer--;
    console.log(timer);
    if (timer === 0) {
      timerEl.textContent = "0";
      timesUp();
      clearInterval(timeInterval);
    }
  }, 1000);
}

function startfunction() {
  countdown();
  quizStart();
  var jumbotronEl = document.getElementsByClassName("jumbotron");
  var card1El = document.getElementById("card1");
  jumbotronEl[0].style.display = "none";
  card1El.style.display = "block";
};

function timesUp() {
  var card1El = document.getElementById("card1");
  var card2El = document.getElementById("card2");
  card1El.style.display = "none";
  card2El.style.display = "block";
};

function quizStart() {
  if(questionCounter < 6) {
  var quiz = qAndA[questionCounter];
  var questionEl = document.getElementById("question");
  var answer1El = document.getElementById("answer1");
  var answer2El = document.getElementById("answer2");
  var answer3El = document.getElementById("answer3");
  var answer4El = document.getElementById("answer4");

  questionEl.textContent = quiz.question;
  answer1El.textContent = quiz.answer1;
  answer2El.textContent = quiz.answer2;
  answer3El.textContent = quiz.answer3;
  answer4El.textContent = quiz.answer4;
  } else {
    timesUp();
  };
};

function checkAnswers() {
  questionCounter++
  quizStart();
  var resultEl = document.getElementById("result");

  if(correctAnswers[questionCounter]){
    resultEl.textContent = "That is the correct answer!";
  } else {
    resultEl.textContent = "That is the wrong answer.";
    timer = timer - 10;
  }
};