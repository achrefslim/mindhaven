document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("self-assessment-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const stressLevel = document.getElementById("stress-level").value;
      const anxietyLevel = document.getElementById("anxiety-level").value;
      const moodLevel = document.getElementById("mood-level").value;
      const energyLevel = document.getElementById("energy-level").value;

      let advice = "";

      if (stressLevel >= 7) {
        advice +=
          "Your stress level is high. Consider incorporating more relaxation exercises into your daily routine. ";
      } else if (stressLevel >= 4) {
        advice +=
          "Your stress level is moderate. Try practicing some stress management techniques. ";
      } else {
        advice += "Your stress level is low. Keep up the good work! ";
      }

      if (anxietyLevel >= 7) {
        advice +=
          "Your anxiety level is high. Practice deep breathing and mindfulness exercises. ";
      } else if (anxietyLevel >= 4) {
        advice +=
          "Your anxiety level is moderate. Consider some calming activities like yoga. ";
      } else {
        advice +=
          "Your anxiety level is low. Keep maintaining a positive mindset! ";
      }

      if (moodLevel <= 3) {
        advice +=
          "Your mood level is low. Try to engage in activities that make you happy, such as hobbies or spending time with loved ones. ";
      } else if (moodLevel <= 6) {
        advice +=
          "Your mood level is moderate. Keep finding ways to uplift your mood. ";
      } else {
        advice +=
          "Your mood level is high. Continue doing what makes you feel good! ";
      }

      if (energyLevel <= 3) {
        advice +=
          "Your energy level is low. Ensure you're getting enough rest and consider incorporating a balanced diet and regular exercise into your routine. ";
      } else if (energyLevel <= 6) {
        advice +=
          "Your energy level is moderate. Maintain a healthy lifestyle to boost your energy. ";
      } else {
        advice += "Your energy level is high. Keep up the healthy habits! ";
      }

      const resultMessage = `
            Your stress level is ${stressLevel}.
            Your anxiety level is ${anxietyLevel}.
            Your mood level is ${moodLevel}.
            Your energy level is ${energyLevel}.
            ${advice}
        `;

      document.getElementById("assessment-result").textContent = resultMessage;
    });
});

function saveJournalEntry() {
  const journalEntry = document.getElementById("journal-entry").value;
  localStorage.setItem("journalEntry", journalEntry);
  document.getElementById("status-message").textContent =
    "Journal entry saved!";
}
