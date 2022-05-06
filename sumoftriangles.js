const inputBox = document.querySelectorAll(".input-box");
const isTriangle = document.querySelector("#is-triangle");
const outputBox = document.querySelector("#output-box");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function calculateTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputBox[0].value),
    Number(inputBox[1].value),
    Number(inputBox[2].value)
  );
  console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    outputBox.innerText = "It is a triangle";
  } else {
    outputBox.innerText = "It is not a triangle";
  }
}

isTriangle.addEventListener("click", calculateTriangle);
