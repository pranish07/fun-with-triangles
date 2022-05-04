const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const data = new FormData(quizForm);
  for (let value of data.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  outputBox.innerText="you've score is " + score  ;
}

submitBtn.addEventListener("click", calculateScore);
