function flipCard(card) {
  const question = card.querySelector(".question");
  const answer = card.querySelector(".answer");

  if (question.style.display === "none") {
    question.style.display = "block";
    answer.style.display = "none";
  } else {
    question.style.display = "none";
    answer.style.display = "block";
  }
}
