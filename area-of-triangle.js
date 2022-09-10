const inputBox = document.querySelectorAll(".input-box");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");

function solveArea(a, b, c) {
  if (a + b < c || b + c < a || a + c < b) {
    let solve = "use valid numbers";
    return solve;
  } else {
    const sum = (a + b + c) / 2;
    let solve =
      "The area is : " +
      Math.sqrt(sum * (sum - a) * (sum - b) * (sum - c)) +
      "units";

    return solve;
  }
}

function calculateArea() {
  const area = solveArea(
    Number(inputBox[0].value),
    Number(inputBox[1].value),
    Number(inputBox[2].value)
  );

  outputBox.innerText = area;
}

calculateBtn.addEventListener("click", calculateArea);
