const examName = localStorage.getItem("selectedExam");
const subjectName = localStorage.getItem("selectedSubject");
const topicName = localStorage.getItem("selectedQuestionTopic");

const box = document.getElementById("questionBox");

// safe access
const topicData =
  questionsData?.[examName]?.[subjectName]?.[topicName];

// ❌ NO DATA CASE
if (!box) {
  console.error("questionBox not found in HTML");
}

if (!topicData || !topicData.questions || !box) {
  if (box) box.innerHTML = "No Questions Found 🚀";
} else {

  topicData.questions.forEach((q, index) => {

    const optionsHTML = q.options.map(opt => `
      <button class="option-btn" data-answer="${q.answer}">
        ${opt}
      </button>
    `).join("");

    box.innerHTML += `
      <div class="question-card">
        <h3>Q${index + 1}. ${q.q}</h3>
        <div class="options">
          ${optionsHTML}
        </div>
      </div>
    `;
  });

}

// CLICK HANDLER (SAFE)
if (box) {
  box.addEventListener("click", function (e) {

    if (!e.target.classList.contains("option-btn")) return;

    const selected = e.target.innerText.trim();
    const correct = e.target.getAttribute("data-answer");

    // prevent multiple coloring overwrite (optional improvement)
    const parent = e.target.parentElement;
    const allOptions = parent.querySelectorAll(".option-btn");

    allOptions.forEach(btn => {
      btn.disabled = true; // lock after answer
    });

    if (selected === correct) {
      e.target.style.background = "green";
      e.target.style.color = "white";
    } else {
      e.target.style.background = "red";
      e.target.style.color = "white";
    }

  });
}
const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}