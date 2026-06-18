// ==========================================
// GLOBAL STATE
// ==========================================

let exams = [];

// ==========================================
// DOM ELEMENTS
// ==========================================

const examGrid = document.getElementById("examGrid");
const searchInput = document.getElementById("searchInput");
const logoutBtn = document.getElementById("logoutBtn");

// ==========================================
// FETCH EXAMS FROM BACKEND
// ==========================================

function loadExams() {
    fetch("https://examtracker-fur6.onrender.com/api/exams")
        .then(res => {
            if (!res.ok) {
                throw new Error("API Error: " + res.status);
            }
            return res.json();
        })
        .then(data => {
            exams = data || [];
            renderExams();
        })
        .catch(err => {
            console.log("Failed to load exams:", err);
            exams = [];
            renderExams();
        });
}

// ==========================================
// RENDER EXAMS
// ==========================================

function renderExams() {
    examGrid.innerHTML = "";

    if (!exams || exams.length === 0) {
        examGrid.innerHTML = "<p>No exams available</p>";
        return;
    }

    exams.forEach(exam => {
        examGrid.innerHTML += `
            <div class="exam-card" data-name="${exam.name}">
                <span>${exam.icon || "📘"}</span>
                <h3>${exam.name}</h3>
            </div>
        `;
    });
}

// ==========================================
// SEARCH FILTER
// ==========================================

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".exam-card").forEach(card => {
        const text = card.dataset.name.toLowerCase();

        card.style.display = text.includes(value)
            ? "block"
            : "none";
    });
});

// ==========================================
// SELECT EXAM
// ==========================================

document.addEventListener("click", (e) => {
    const card = e.target.closest(".exam-card");
    if (!card) return;

    const examName = card.dataset.name;

    localStorage.setItem("selectedExam", examName);

    card.style.transform = "scale(0.95)";

    setTimeout(() => {
        window.location.href = "exam.html";
    }, 150);
});

// ==========================================
// USER INFO
// ==========================================

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    const userBox = document.getElementById("userBox");
    if (userBox) {
        userBox.textContent = `Welcome, ${user.name} 👋`;
    }
}

// ==========================================
// SELECTED EXAM DISPLAY
// ==========================================

const exam = localStorage.getItem("selectedExam");

if (exam) {
    const selectedExamName = document.getElementById("selectedExamName");
    if (selectedExamName) {
        selectedExamName.textContent = exam;
    }
}

// ==========================================
// DAILY TARGET
// ==========================================

const target = localStorage.getItem("dailyTarget") || 10;

const dailyGoal = document.getElementById("dailyGoal");

if (dailyGoal) {
    dailyGoal.textContent = target + " Topics";
}

// ==========================================
// CONTINUE BUTTON
// ==========================================

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        if (!exam) {
            alert("Please select an exam first");
            return;
        }

        window.location.href = "exam.html";
    });
}

// ==========================================
// LOGOUT (ONLY ONCE)
// ==========================================

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("selectedExam");
        localStorage.removeItem("selectedSubject");

        window.location.href = "login.html";
    });
}

// ==========================================
// INIT
// ==========================================

loadExams();