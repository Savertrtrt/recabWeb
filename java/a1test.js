function checkAnswers() {
  let score = 0;
  const answers = {
    q1: "correct",
    q2: "correct",
    q3: "correct",
    q4: "correct",
    q5: "correct",
    q6: "correct",
    q7: "correct",
    q8: "correct",
    q9: "correct",
    q10: "correct",
    q11: "correct",
    q12: "correct",
    q13: "correct",
    q14: "correct",
    q15: "correct",
    q16: "correct",

  };

  for (let question in answers) {
    const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
    if (selectedAnswer) {
      selectedAnswer.disabled = true; 
      if (selectedAnswer.value === answers[question]) {
        score++;
      }
    }
  }
  
  const resultElement = document.getElementById("result");
  resultElement.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;

  const checkButton = document.querySelector("button");
  checkButton.disabled = true;
  const nexttestElement= document.getElementById("nexttest")
  const retestElement = document.getElementById("retest");
  if (score >= 10) {
    retestElement.style.display = "none"; 
    const congratulationsMessage = document.getElementById("congratulations-message");
    congratulationsMessage.style.display = "block"; 
    nexttestElement.style.display="block";
  } else {
    retestElement.style.display = "block"; 
    const congratulationsMessage = document.getElementById("congratulations-message");
    congratulationsMessage.style.display = "none";
    nexttestElement.style.display="none";
  }
}


function retest() {
  const answers = document.querySelectorAll('input[type="radio"]');
  answers.forEach((answer) => (answer.disabled = false));

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

 
  const checkButton = document.querySelector("button");
  checkButton.disabled = false;

 
  const retestButton = document.getElementById("retest-button");
  retestButton.style.display = "none";
}
let nightMode = false;

function toggleNightMode() {
  const body = document.body;
  const elementsToInvert = document.querySelectorAll("h1, p, .test-question, button");
  const congratulationsMessage = document.getElementById("congratulations-message");
  const nightModeButton = document.getElementById("night-mode-button"); 

  if (nightMode) {
    
    body.classList.remove("night-mode");

    nightMode = false;
  } else {
    body.classList.add("night-mode");
    nightMode = true;
  }

  elementsToInvert.forEach((element) => {
    element.classList.toggle("night-mode");
  });

  congratulationsMessage.classList.toggle("night-mode");
}