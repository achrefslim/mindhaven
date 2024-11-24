document.addEventListener("DOMContentLoaded", () => {
  const showSection = (sectionId) => {
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
  };

  // Initialize patients data
  const patients = [];

  // Add Patient
  const addPatientForm = document.getElementById("add-patient-form");
  const addPatientStatus = document.getElementById("add-patient-status");

  addPatientForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("patient-name").value;
    const email = document.getElementById("patient-email").value;
    const age = document.getElementById("patient-age").value;
    const gender = document.getElementById("patient-gender").value;

    patients.push({ name, email, age, gender, score: 0 });

    addPatientStatus.textContent = "Patient added successfully!";
    addPatientForm.reset();
    showSection("patient-list");
    renderPatientList();
  });

  // Render Patient List
  const renderPatientList = () => {
    const patientListContent = document.getElementById("patient-list-content");

    if (patients.length === 0) {
      patientListContent.innerHTML = "<p>No patients found.</p>";
      return;
    }

    patientListContent.innerHTML = patients
      .map(
        (patient) => `
            <div class="patient-card">
                <p>Name: ${patient.name}</p>
                <p>Email: ${patient.email}</p>
                <p>Age: ${patient.age}</p>
                <p>Gender: ${patient.gender}</p>
                <p>Score: ${patient.score}</p>
                <button onclick="managePatient('${patient.name}')">Manage</button>
            </div>
        `
      )
      .join("");
  };

  // Manage Patient
  window.managePatient = (name) => {
    showSection("manage-patient");
    const patient = patients.find((patient) => patient.name === name);

    if (patient) {
      document.getElementById("manage-patient-name").value = patient.name;
      document.getElementById("score-patient-name").value = patient.name;
    }
  };

  // Remove Patient
  window.removePatient = () => {
    const name = document.getElementById("manage-patient-name").value;
    const index = patients.findIndex((patient) => patient.name === name);
    if (index !== -1) {
      patients.splice(index, 1);
    }

    document.getElementById("manage-patient-status").textContent =
      "Patient removed successfully!";
    showSection("patient-list");
    renderPatientList();
  };

  // Read Report
  window.readReport = () => {
    const name = document.getElementById("manage-patient-name").value;
    const patient = patients.find((patient) => patient.name === name);

    if (patient) {
      const reportContent = `
                <p>Name: ${patient.name}</p>
                <p>Email: ${patient.email}</p>
                <p>Age: ${patient.age}</p>
                <p>Gender: ${patient.gender}</p>
                <p>Score: ${patient.score}</p>
            `;
      document.getElementById("patient-report").innerHTML = reportContent;
      showSection("report");
    } else {
      document.getElementById("patient-report").innerHTML =
        "Patient not found.";
    }
  };

  // Add Score
  const addScoreForm = document.getElementById("add-score-form");
  const addScoreStatus = document.getElementById("add-score-status");

  addScoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("score-patient-name").value;
    const activity = document.getElementById("score-activity").value;
    const points = parseInt(document.getElementById("points").value, 10);

    const patient = patients.find((patient) => patient.name === name);

    if (patient) {
      patient.score += points;
      addScoreStatus.textContent = `Added ${points} points for ${activity}.`;
      renderPatientList();
    } else {
      addScoreStatus.textContent = "Patient not found.";
    }

    addScoreForm.reset();
  });

  // Initial Render
  renderPatientList();
  showSection("dashboard");
});
