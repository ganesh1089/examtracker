const examName = localStorage.getItem("selectedExam");
const subjectName = localStorage.getItem("selectedSubject");

document.getElementById("pageTitle").textContent =
`${subjectName} Practice Questions`;

const container = document.getElementById("topicsContainer");

const topics = questionsData?.[examName]?.[subjectName];

// clear first (important)
container.innerHTML = "";

if (!topics || Object.keys(topics).length === 0) {

container.innerHTML = `
  <div class="topic-card">
    Questions Coming Soon 🚀
  </div>
`;

} else {

Object.keys(topics).forEach(topicName => {

const card = document.createElement("div");
card.className = "topic-card";
card.textContent = `❓ ${topicName}`;

card.addEventListener("click", () => {
localStorage.setItem("selectedQuestionTopic", topicName);
window.location.href = "question-detail.html";
});

container.appendChild(card);

});

}
const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}