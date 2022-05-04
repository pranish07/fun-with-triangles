const inputBox = document.querySelectorAll(".input-box");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");

function solve(a, b) {
  const sum = a * a + b * b;
//   console.log(sum);
return sum;
}

function calculateHypotenuse() {
  const sum = solve(Number(inputBox[0].value),Number(inputBox[1].value));
  const h = Math.sqrt(sum).toFixed(2);
  outputBox.innerText = "The length of hypotenuse is " + h;
// console.log(h)
}
calculateBtn.addEventListener("click", calculateHypotenuse);
