const startButton = document.querySelector(".startquiz-btn");
const main = document.querySelector(".main");
const question = document.querySelector(".question");
const optionSection = document.querySelector(".option");
const nextButton = document.querySelector(".next-btn");
const options = document.querySelectorAll(".options");

const quizQuestions = [
  {
    question: `Which selector is the most specific among following?`,
    options: ["ID", "Class", "Type", "Attribute"],
    answer: "ID",
  },

  {
    question: `How can we select the following element?
    <h1 Class = "head" id = "heading">This Is heading</h1>`,
    options: ["#heading", ".head", 'h1', 'All of the above'],
    answer: "All of the above",
  },

  {
    question: "Among these selectors which has to be unique?",
    options: ["ID", "Class", "Type", "Attribute"],
    answer: "ID",
  },

  {
    question: `Which character used at start of class selector in css file?`,
    options: [".", "#", "$", "@"],
    answer: ".",
  },

  {
    question: "Which element is selected by universal selector?",
    options: ["h1", "p", "All elements of web page", "Nothing"],
    answer: "All elements of web page",
  },
];

let suffledQuestion, currentQustionIndex;

startButton.addEventListener("click", startQuizGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuizGame() {
  startButton.classList.add("hide");
  main.classList.remove("hide");
  currentQuestionIndex = 0;
  suffledQuestion = quizQuestions.sort(() => Math.random() - 0.5);
  setNextQuestion();
}

function setNextQuestion() {
  resetOptions();
  updateQuestion(suffledQuestion[currentQuestionIndex]);
}

function updateQuestion(ques) {
  question.innerText = ques.question;
  let createButton = suffledQuestion[currentQuestionIndex].options;
  createButton.forEach((item) => {
    let opt_Btn = document.createElement("button");
    opt_Btn.classList.add("options");
    opt_Btn.innerText = item;
    opt_Btn.addEventListener('click', (e) => {
      selectAnswer(e);
    })
    optionSection.appendChild(opt_Btn);
  });
}

function selectAnswer(e) {
  nextButton.classList.remove('hide');
  let selected = e.target;
  setAnswer(selected);
  showStartButton()
}

function setAnswer(target) {
  quizQuestions.forEach(item => {
    if(target.innerText === item.answer) {
      return target.style.backgroundColor = 'Green';
    }
  })
}

function showStartButton() {
  if (quizQuestions.length > currentQuestionIndex + 1) {
    console.log('working')
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide')
    nextButton.classList.add('hide')
  }
}

function resetOptions() {
  nextButton.classList.add("hide");
  while (optionSection.firstChild) {
    optionSection.removeChild(optionSection.firstChild);
  }
}