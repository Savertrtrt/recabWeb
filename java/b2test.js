function checkAnswers() {
  let score = 0;
  const answers = {
    q1s: "correct",
    q2s: "correct",
    q3s: "correct",
    q4s: "correct",
    q5s: "correct",
    q6s: "correct",
    q7s: "correct",
    q8s: "correct",
    q9s: "correct",
    q10s: "correct",
    q11s: "correct",
    q12s: "correct",
    q13s: "correct",
    q14s: "correct",
    q15s: "correct",
    q16s: "correct",
    q17s: "correct",
    q18s: "correct",
    q19s: "correct",
    q20s: "correct",
    q21s: "correct",
    q22s: "correct",
    q23s: "correct",
    q24s: "correct",
    q25s: "correct",
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

  const returnElement = document.getElementById('return')
  const resultElement = document.getElementById("result");
  resultElement.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;

  returnElement.style.display = 'block';
  const checkButton = document.querySelector("button");
  checkButton.disabled = true;

 const retestElement = document.getElementById("retest");
  if (score >= 16) {
    retestElement.style.display = "none"; 
    const congratulationsMessage = document.getElementById("congratulations-message");
    congratulationsMessage.style.display = "block"; 
  } else {
    retestElement.style.display = "block"; 
    const congratulationsMessage = document.getElementById("congratulations-message");
    congratulationsMessage.style.display = "none";
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
