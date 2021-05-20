const quizData = [
  {
    question: "How old is florin?",
    a: 10,
    b: 17,
    c: 22,
    d: 110,
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "c",
    b: "python",
    c: "c++",
    d: "javaScript",
    correct: "d",
  },
  {
    question: "Who is a president of US?",
    a: "Florin pop",
    b: "Tashif",
    c: "Donald trump",
    d: "None",
    correct: "d",
  },
  {
    question: "What does HTML stands for?",
    a: "Hypertext Markup language",
    b: "Hypertext transfer protocol",
    c: "Hyper transfer markup language",
    d: "None",
    correct: "a",
  },
  {
    question: "In which year javaScript launched?",
    a: "1998",
    b: "1999",
    c: "2000",
    d: "1995",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions.</h2>
      <button onClick={location.reload()}>Reload</button>`;
    }
  }
});
