document.addEventListener("DOMContentLoaded", () => {
  const accessForm = document.getElementById("access-form");
  const accessError = document.getElementById("access-error");
  const professionalServices = document.getElementById("professional-services");
  const emergencyServices = document.getElementById("emergency-services");

  accessForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const accessCode = document.getElementById("access-code").value;

    // Example credentials for validation
    const validName = "achref slimen";
    const validAccessCode = "12345";

    if (name === validName && accessCode === validAccessCode) {
      accessError.textContent = "";
      professionalServices.classList.remove("hidden");
      emergencyServices.classList.remove("hidden");
    } else {
      accessError.textContent =
        "Invalid name or access code. Please try again.";
    }
  });
});

function bookAppointment(doctor) {
  alert(`You have booked an appointment with ${doctor}.`);
  // Additional logic for booking appointments can be added here
}
