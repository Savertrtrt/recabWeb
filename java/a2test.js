
function checkAnswers() {
  let score = 0;
  const answers = {
    q1v: "correct",
    q2v: "correct",
    q3v: "correct",
    q4v: "correct",
    q5v: "correct",
    q6v: "correct",
    q7v: "correct",
    q8v: "correct",
    q9v: "correct",
    q10v: "correct",
    q11v: "correct",
    q12v: "correct",
    q13v: "correct",
    q14v: "correct",
    q15v: "correct",
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
  if (score >= 12) {
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
