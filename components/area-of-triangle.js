const inputBox = document.querySelectorAll(".input-box");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");

function solveArea(a, b) {
  const sum = (a * b * 1) / 2;
  return sum;
}

function calculateArea() {
  const area = solveArea(inputBox[0].value, inputBox[1].value);
  outputBox.innerText = "The area is : " + area;
}

calculateBtn.addEventListener("click", calculateArea);
