// ==========================================
// Get Selected Exam & Subject
// ==========================================

const examName = localStorage.getItem("selectedExam");
const subjectName = localStorage.getItem("selectedSubject");

const user = JSON.parse(localStorage.getItem("user"));
const userId = user?._id;

const exam = exams.find(e => e.name === examName);

if (!exam) {
    console.error("Exam not found");
}

// ==========================================
// Show Subject Title
// ==========================================

document.getElementById("subjectTitle").textContent =
    `${exam?.name || ""} - ${subjectName}`;

// ==========================================
// Topics Container
// ==========================================

const container = document.getElementById("topicsContainer");

let topicsHTML = "";

// ==========================================
// Get Subject Data
// ==========================================

const subjectData = exam?.subjects?.[subjectName];

// ==========================================
// Render Topics
// ==========================================

function buildTopic(topicName, nameKey) {

    return `
    <div class="topic">
        <div class="topic-name">${topicName}</div>

        <div class="radio-box">
            <input type="radio" name="${nameKey}" value="weak">
        </div>

        <div class="radio-box">
            <input type="radio" name="${nameKey}" value="medium">
        </div>

        <div class="radio-box">
            <input type="radio" name="${nameKey}" value="strong">
        </div>
    </div>`;
}

// ARRAY TYPE SUBJECT
if (Array.isArray(subjectData)) {

    subjectData.forEach(topic => {

        const nameKey = `${examName}-${subjectName}-${topic}`;
        topicsHTML += buildTopic(topic, nameKey);

    });

// CATEGORY TYPE SUBJECT
} else {

    for (const category in subjectData) {

        topicsHTML += `<div class="category-title">📂 ${category}</div>`;

        subjectData[category].forEach(topic => {

            const nameKey =
                `${examName}-${subjectName}-${category}-${topic}`;

            topicsHTML += buildTopic(topic, nameKey);

        });
    }
}

// ==========================================
// Render HTML
// ==========================================

container.innerHTML = `
<div class="status-header">
    <div>Topic</div>
    <div>Weak</div>
    <div>Medium</div>
    <div>Strong</div>
</div>
${topicsHTML}
`;

// ==========================================
// Save Progress (MongoDB)
// ==========================================

function saveProgress(topicKey, status) {

    if (!userId) return;

    fetch("http://localhost:5000/api/progress/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            exam: examName,
            subject: subjectName,
            topic: topicKey,
            status
        })
    });
}

// ==========================================
// Radio Events
// ==========================================

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {

    radio.addEventListener("change", () => {

        saveProgress(radio.name, radio.value);
        updateProgress();

    });

});

// ==========================================
// Restore Progress (FIXED LOGIC)
// ==========================================

if (userId) {

    fetch(`http://localhost:5000/api/progress/${userId}`)
        .then(res => res.json())
        .then(data => {

            data.forEach(item => {

                const selector =
                    `input[name="${item.topic}"][value="${item.status}"]`;

                const radio = document.querySelector(selector);

                if (radio) {
                    radio.checked = true;
                }

            });

            updateProgress();
        })
        .catch(err => console.log(err));

}

// ==========================================
// Progress Function
// ==========================================

function updateProgress() {

    const checkedRadios =
        document.querySelectorAll('input[type="radio"]:checked');

    let weak = 0;
    let medium = 0;
    let strong = 0;

    checkedRadios.forEach(radio => {

        if (radio.value === "weak") weak++;
        if (radio.value === "medium") medium++;
        if (radio.value === "strong") strong++;

    });

    const total = document.querySelectorAll('.topic').length;

    const score = (strong * 1) + (medium * 0.5);

    const percent = total > 0
        ? Math.round((score / total) * 100)
        : 0;

    document.getElementById("weakCount").textContent = weak;
    document.getElementById("mediumCount").textContent = medium;
    document.getElementById("strongCount").textContent = strong;

    document.getElementById("progressPercent").textContent = percent + "%";

    document.getElementById("progressFill").style.width = percent + "%";
}
const saveBtn = document.getElementById("saveProgressBtn");

saveBtn.addEventListener("click", () => {

    const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');

    if (!userId) {
        alert("User not logged in");
        return;
    }

    checkedRadios.forEach(radio => {

        fetch("http://localhost:5000/api/progress/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                exam: examName,
                subject: subjectName,
                topic: radio.name,
                status: radio.value
            })
        });

    });

    alert("Progress Saved Successfully 🚀");
});
// ==========================================
// INIT
// ==========================================

updateProgress();