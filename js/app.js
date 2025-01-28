// Pill loading animation
const introPage = document.getElementById("introductory-page");
const pillSteps = document.querySelectorAll(".pill-step");
const pillFill = document.getElementById("pill-fill");

let counter = 1;

function fillStep() {
  if (counter < pillSteps.length) {
    pillSteps[counter++].classList.add("active");
    setTimeout(fillStep, 800);
  } else {

    introPage.style.display = 'none'
  }

  return;
}

setTimeout(fillStep, 800);
