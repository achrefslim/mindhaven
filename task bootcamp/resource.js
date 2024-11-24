document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector("#home p");
  const solutions = [
    "Take 10 minutes of meditation.",
    "Walk outside for 20 minutes.",
    "Try a new breathing technique.",
    "Listen to an inspiring podcast.",
    "Write down three things you're grateful for.",
  ];

  function getRandomSolution() {
    return solutions[Math.floor(Math.random() * solutions.length)];
  }

  homeSection.textContent = getRandomSolution();
});
